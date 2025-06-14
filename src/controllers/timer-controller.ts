import { handleAction } from 'custom-card-helpers';
import { Controller } from './controller';

export class TimerController extends Controller {
  _step = 1;
  _targetValue;
  _invert = false;
  private _interval?: number;

  hostConnected(): void {
  }
  
  hostDisconnected(): void {
    this._clearInterval();
  }

  hostUpdated(): void {
    if (this.state === 'active') {
      this._startInterval();
    } else {
      this._clearInterval();
    }
  }
  
  _startInterval(): void {
    // TODO: Interval could be derived from the duration
    if (!this._interval) {
      this._interval = window.setInterval(() => {
        try {
          if (!this.isSliderDragging) {
            this._host.requestUpdate();
          }
        } catch (e) {
          // If the update fails, the component is likely disconnected
          this._clearInterval();
        }
      }, 250);
    }
  }

  _clearInterval(): void {
    if (this._interval) {
      window.clearInterval(this._interval);
      this._interval = undefined;
    }
  }
  
  get _value(): number {
    if (!this.stateObj) {
      return 0;
    }

    // When active, calculate remaining time as percentage of total duration
    if (this.state === 'active') {
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);

      const endsAtMs = Date.parse(this.stateObj.attributes.finishes_at);
      const remainingMs = endsAtMs - Date.now();
      const ellapsedMs = Math.max(0, durationMs - remainingMs);
      
      // Return percentage of ellapsed time
      return Math.round((ellapsedMs / durationMs) * this._max);
    }
    
    // When paused, return the current percentage
    if (this.state === 'paused') {
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);
      const remainingMs = this._timeToMs(this.stateObj.attributes.remaining);
      const ellapsedMs = Math.max(0, durationMs - remainingMs);

      return Math.round((ellapsedMs / durationMs) * this._max);
    }
    
    return 0;
  }

  // TODO: Am I handling out of bounds values properly?
  // TODO: There's a lot of jank below
  // TODO: De-duplicate code below

  set _value(value) {
    if (!this.stateObj) {
      return;
    }

    // TODO: This is pretty jank
    const percentage = value / this._max * 100;
    const targetValue = 100 - percentage;
    
    // Oh boy, timer semantics are a mess
    // A timer is either idle, active or paused
    // Available timer services: start, pause, cancel, finish, change
    // Change can only be used to increment or decrement an ACTIVE timer with a delta. Delta can not be over the timer's initial duration.
    // Change cannot be used if the timer is in any other state
    
    if (targetValue === 0 && (this.state === 'active' || this.state === 'paused')){
      this._hass.callService('timer', 'finish', {
        entity_id: this._config.entity,
      });
      return;
    }

    if (this.state === 'active'){
      // Compute the time delta between current remaining time and the new remaining time
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);
      const endsAtMs = Date.parse(this.stateObj.attributes.finishes_at);
      const remainingMs = endsAtMs - Date.now();

      const targetRemainingMs = targetValue / 100 * durationMs;
      const deltaMs = targetRemainingMs - remainingMs;

      // Call change with the delta (which must be a HH:MM:SS string)
      this._hass.callService('timer', 'change', {
        entity_id: this._config.entity,
        duration: this._msToTime(deltaMs),
      });

      return;
    }
    
    if (this.state === 'paused'){
      this._hass.callService('timer', 'start', {
        entity_id: this._config.entity,
      });

      // Compute the time delta between current remaining time and the new remaining time
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);
      const remainingMs = this._timeToMs(this.stateObj.attributes.remaining);

      const targetRemainingMs = targetValue / 100 * durationMs;
      const deltaMs = targetRemainingMs - remainingMs;

      // Call change with the delta (which must be a HH:MM:SS string)
      this._hass.callService('timer', 'change', {
        entity_id: this._config.entity,
        duration: this._msToTime(deltaMs),
      });

      this._hass.callService('timer', 'pause', {
        entity_id: this._config.entity,
      });

      return;
    }
    
    if (this.state === 'idle'){
      this._hass.callService('timer', 'start', {
        entity_id: this._config.entity,
      });

      // Compute the time delta between current remaining time and the new remaining time
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);
      const remainingMs = durationMs;

      const targetRemainingMs = targetValue / 100 * durationMs;
      const deltaMs = targetRemainingMs - remainingMs;

      // Call change with the delta (which must be a HH:MM:SS string)
      this._hass.callService('timer', 'change', {
        entity_id: this._config.entity,
        duration: this._msToTime(deltaMs),
      });

      this._hass.callService('timer', 'pause', {
        entity_id: this._config.entity,
      });

      return;
    }
  }
  
  get _min(): number {
    return 0;
  }

  get _max(): number {
    return 10000;
  }

  // Helper method to convert HH:MM:SS time to milliseconds
  private _timeToMs(timeString: string): number {
    if (!timeString) return 0;
    
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return ((hours * 60 + minutes) * 60 + seconds) * 1000;
  }

  private _msToTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const sign = ms < 0 ? '-' : '';
    const hours = Math.floor(Math.abs(totalSeconds) / 3600);
    const minutes = Math.floor((Math.abs(totalSeconds) % 3600) / 60);
    const seconds = Math.abs(totalSeconds) % 60;
    
    return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  get isOff(): boolean {
    return this.state === 'idle';
  }

  get label(): string {
    // When slider is being dragged, use targetValue as label
    if (this.isSliderDragging){
      const targetLeftRatio = 1 - (this.targetValue / this._max);
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);

      const targetRemainingMs = targetLeftRatio * durationMs;
      return this._msToTime(targetRemainingMs);
    }

    // When active, calculate remaining time as percentage of total duration
    if (this.state === 'active') {
      const endsAtMs = Date.parse(this.stateObj.attributes.finishes_at);
      const remainingMs = endsAtMs - Date.now();
      return this._msToTime(remainingMs);
    }
    
    // When paused, return the current percentage
    if (this.state === 'paused') {
      const remainingMs = this._timeToMs(this.stateObj.attributes.remaining);
      return this._msToTime(remainingMs);
    }

    if (this.state === 'idle') {
      return this._hass.localize('component.timer.entity_component._.state.idle') || 'Idle';
    }
    
    return this.state;
  }
  
  get hasToggle(): boolean {
    return false;
  }
  
  get invert(): boolean {
    return true;
  }

  get actionIcon(): string {
    if (this.state === 'active') {
      return 'mdi:pause';
    }
    return 'mdi:play';
  }

  get defaultAction(): Parameters<typeof handleAction>[2] | undefined {
    if (this.state === 'active') {
      return {
        tap_action: {
          action: 'call-service',
          service: 'timer.pause',
          service_data: {
            entity_id: this._config.entity,
          },
        },
      };
    }
    
    if (this.state === 'idle' || this.state === 'paused') {
      return {
        tap_action: {
            action: 'call-service',
          service: 'timer.start',
          service_data: {
            entity_id: this._config.entity,
          },
        },
      };
    }

    return undefined;
  }

  get secondaryActionIcon(): string {
    if (this.state === 'active' || this.state === 'paused') {
      return 'mdi:refresh';
    }
    return '';
  }

  get defaultSecondaryAction(): Parameters<typeof handleAction>[2] | undefined {
    if (this.state === 'active' || this.state === 'paused') {
      return {
        tap_action: {
          action: 'call-service',
          service: 'timer.cancel',
          service_data: {
            entity_id: this._config.entity,
          },
        },
      };
    }

    return undefined;
  }
} 
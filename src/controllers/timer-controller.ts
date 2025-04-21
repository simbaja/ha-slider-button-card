import { ActionConfig, handleAction } from 'custom-card-helpers';
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
    // TODO: Interval could be defined in the config
    // TODO: Interval could be derived from the duration
    if (!this._interval) {
      this._interval = window.setInterval(() => {
        try {
          this._host.requestUpdate();
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

  set _value(_value) {
    // TODO: Setting the value should through the slider should update the timer's remaining time unless disabled
    if (!this.stateObj) {
      return;
    }
    
    // Oh boy, timer semantics are a mess
    // A timer is either idle, active or paused
    // Available timer services: start, pause, cancel, finish, change
    // Change can only be used to increment or decrement an ACTIVE timer with a delta. Delta can not be over the timer's initial duration.
    // Change cannot be used if the timer is in any other state
    
    // Special case: If new value is 0, and state was activeve, or paused, finish the timer
    //     What if the timer is idle?
    // Special case: If new value is 100, and state was active, or paused, cancel the timer

    if (this.state === 'active'){
      // Compute the time delta between current remaining time and the new remaining time
      // Call change with the delta (which must be a HH:MM:SS string)
    }
    
    if (this.state === 'paused'){
      // Make the timer active
      // Call change with the delta (which must be a HH:MM:SS string)
      // Pause the timer
    }
    
    if (this.state === 'idle'){
      // Make the timer active
      // Call change with the delta (which must be a HH:MM:SS string)
      // Pause the timer
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
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  get isOff(): boolean {
    return this.state === 'idle';
  }

  get label(): string {
    if (this.state === 'active') {
      const endsAtMs = Date.parse(this.stateObj.attributes.finishes_at);
      const remainingMs = endsAtMs - Date.now();
      return this._msToTime(remainingMs);
    }
    
    if (this.state === 'paused') {
      return this.stateObj.attributes.remaining || '';
    }

    if (this.state === 'idle') {
      return this._hass.localize('component.timer.entity_component._.state.idle') || 'Idle';
    }

    
    return this.state;
  }
  
  get hasToggle(): boolean {
    return false;
  }
  
  get hasSlider(): boolean {
    // The slider is used only for display, not for control
    return false;
  }

  get isSliderDisabled(): boolean {
    // The slider is always disabled for timers
    return true;
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
} 
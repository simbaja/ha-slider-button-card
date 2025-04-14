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
    if (!this._interval) {
      this._interval = window.setInterval(() => {
        this._host.requestUpdate();
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

  // Timer doesn't support setting values through the slider
  set _value(_value) {
    if (!this.stateObj) {
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

  get isOff(): boolean {
    return this.state === 'idle';
  }

  get label(): string {
    if (this.state === 'idle') {
      return this._hass.localize('component.timer.entity_component._.state.idle') || 'Idle';
    }
    
    // If active or paused, show the remaining time
    if (this.state === 'active' || this.state === 'paused') {
      return this.stateObj.attributes.remaining || '';
    }
    
    return this.state;
  }
  
  get hasToggle(): boolean {
    return false;
  }
  
  // TODO: Should slider be usable to change remaining time?
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
    
    if (this.state === 'idle') {
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
    
    if (this.state === 'paused') {
      return {
        tap_action: {
          action: 'call-service',
          service: 'timer.resume',
          service_data: {
            entity_id: this._config.entity,
          },
        },
      };
    }

    return undefined;
  }
} 
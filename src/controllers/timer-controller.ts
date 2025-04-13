import { Controller } from './controller';

export class TimerController extends Controller {
  _step = 1;
  _targetValue;
  _invert = false;
  
  get _value(): number {

    if (!this.stateObj) {
      return 0;
    }

    // When active, calculate remaining time as percentage of total duration
    if (this.state === 'active') {
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);

      const endsAtMs = Date.parse(this.stateObj.attributes.finishes_at);
      const remainingMs = endsAtMs - Date.now();
      
      // Return percentage of time remaining
      return Math.round((remainingMs / durationMs) * 100);
    }
    
    // When paused, return the current percentage
    if (this.state === 'paused') {
      const durationMs = this._timeToMs(this.stateObj.attributes.duration);
      const remainingMs = this._timeToMs(this.stateObj.attributes.remaining);

      return Math.round((remainingMs / durationMs) * 100);
    }
    
    if (this.state === 'idle') {
      // When idle, 100% should be left
      return 100;
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
    return 100;
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
  
  get hasSlider(): boolean {
    // The slider is used only for display, not for control
    return true;
  }

  // TODO: Should slider be usable to change remaining time?
  get isSliderDisabled(): boolean {
    // The slider is always disabled for timers (read-only)
    return true;
  }
} 
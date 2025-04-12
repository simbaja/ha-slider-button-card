import { Controller } from './controller';
import { ActionButtonMode } from '../types';

export class TimerController extends Controller {
  _step = 1;
  _targetValue;
  _invert = false;
  
  // TODO: Add a label showing the remaining time live
  // TODO: Add live refresh of remaining time
  
  constructor(config) {
    super(config);
    
    // TODO: Anything I need to to to add custom action support?
    
    // Override the default action button configuration for timers
    if (this._config.action_button?.mode === ActionButtonMode.TOGGLE) {
      // If using toggle mode, set the icon dynamically based on state
      this._config.action_button.tap_action = {
        action: 'call-service',
        service: 'timer.cancel',
        service_data: {
          entity_id: this._config.entity,
        },
      };
      this._config.action_button.icon = 'mdi:timer-off';
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
    
    // TODO: Is this value setter the right place to handle actions like this?
    
    // Start, pause, or cancel timer based on context
    const service = this._getServiceFromContext();
    
    this._hass.callService('timer', service, {
      entity_id: this.stateObj.entity_id,
    });
  }
  
  // Determine which service to call based on current state
  private _getServiceFromContext(): string {
    // TODO: Double check the logic here

    switch(this.state) {
      case 'idle':
        return 'start';
      case 'active':
        return 'pause';
      case 'paused':
        return 'start'; // Resume
      default:
        return 'start';
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

  // TODO: What is this for?
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

  // TODO: Validate all the toggle related logic here

  get hasToggle(): boolean {
    return true;
  }

  get toggleValue(): number {
    // Toggle logic for the action button
    return this.value;
  }
  
  // Handle toggle action
  _toggle(): void {
    if (!this.stateObj) {
      return;
    }
    
    let service: string;
    
    // TODO: Duplicate code from _getServiceFromContext?
    switch(this.state) {
      case 'idle':
        service = 'start';
        break;
      case 'active':
        service = 'pause';
        break;
      case 'paused':
        service = 'start'; // Resume
        break;
      default:
        service = 'start';
    }
    
    this._hass.callService('timer', service, {
      entity_id: this.stateObj.entity_id,
    });
  }

  get hasSlider(): boolean {
    // The slider is used only for display, not for control
    return true;
  }

  // TODO: Is that true? Should this be configurable? It may make sense to be able to update the timer's current duration?
  get isSliderDisabled(): boolean {
    // The slider is always disabled for timers (read-only)
    return true;
  }
} 
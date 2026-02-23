import { STATES_OFF } from 'custom-card-helpers';
import { capitalizeFirst } from '../utils';
import { Controller } from './controller';

export class HumidifierController extends Controller {
  _targetValue;
  _invert = false;

  get _value(): number {
    return this.stateObj.attributes.humidity;
  }

  set _value(value) {
    this.callService('humidifier', 'set_humidity', {
      entity_id: this.stateObj.entity_id,
      humidity: value,
    });
  }

  get isOff(): boolean {
    return STATES_OFF.includes(this.state);
  }

  get _step(): number {
    return 1;
  }

  get _min(): number {
    return this.stateObj.attributes?.min_humidity || 0;
  }

  get _max(): number {
    return this.stateObj.attributes?.max_humidity || 100;
  }

  get isValuePercentage(): boolean {
    return true;
  }

  get unit(): string {
    return '%';
  }

  get label(): string {
    const mode = capitalizeFirst(this.state);
    return `${this.targetValue} | ${mode}`;
  }
}

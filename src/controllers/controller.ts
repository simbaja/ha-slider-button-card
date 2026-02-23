import { ActionConfig, computeStateDomain, domainIcon, handleAction, HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import { ActionButtonConfig, SliderBackground, SliderButtonCardConfig, SliderDirections } from '../types';
import { getLightColorBasedOnTemperature, normalize, percentageToValue, toPercentage } from '../utils';

import { ReactiveController, ReactiveControllerHost } from 'lit';

export interface Style {
  icon: ObjectStyle;
  slider: ObjectStyle;
}

export interface ObjectStyle {
  filter: string;
  color: string;
  rotateSpeed?: string;
}

class EmittedContexts {
  _emittedContexts = new Set();
  _tracker: Array<string>;
  _cursor = 0;

  constructor(capacity = 50) {
    this._tracker = new Array(capacity);
  }

  addContext(context: string): void {
    this._emittedContexts.add(context);

    const existingValue = this._tracker[this._cursor];
    if (existingValue != undefined) {
      this.popContext(existingValue);
    }

    this._tracker[this._cursor] = context;
    this._cursor++;
    if (this._cursor >= this._tracker.length) {
      this._cursor = 0;
    }
  }

  popContext(context: string): boolean {
    return this._emittedContexts.delete(context);
  }
}

export abstract class Controller implements ReactiveController {
  _config: SliderButtonCardConfig;
  _hass: any;
  _host: ReactiveControllerHost;
  _sliderPrevColor = '';
  _emittedContexts = new EmittedContexts();
  _lastPromiseID = 0;
  _pendingPromises = new Set();

  abstract _value?: number;
  abstract _targetValue?: number;
  abstract _min?: number;
  abstract _max?: number;
  abstract _step?: number;
  abstract _invert?: boolean;

  private _isSliderDragging = false;

  protected constructor(config: SliderButtonCardConfig, host: ReactiveControllerHost) {
    this._config = config;
    this._host = host;
    host.addController(this);
  }
  
  hostConnected?(): void {}
  hostDisconnected?(): void {}
  hostUpdated?(): void {}
  
  protected requestUpdate(): void {
    this._host.requestUpdate();
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
  }

  // TODO: This isn't null safe can causing a bunch of downstream typing & runtime errors
  get stateObj(): any {
    return this._hass.states[this._config.entity] as HassEntity;
  }

  get domain(): string {
    return computeStateDomain(this.stateObj);
  }

  get name(): string {
    return this._config.name ? this._config.name : this.stateObj?.attributes?.friendly_name ? this.stateObj.attributes.friendly_name : '';
  }

  get icon(): string {
    if (typeof this._config.icon?.icon === 'string' && this._config.icon?.icon.length) {
      return this._config.icon.icon;
    }
    return this.stateObj.attributes?.icon ? this.stateObj.attributes.icon : domainIcon(this.domain, this.stateObj.state);
  }

  get value(): number {
    if (this._value) {
      return Math.round(this._value / this.step) * this.step;
    }
    return this.min;
  }

  set value(value: number) {
    if (value !== this.value) {
      this._value = value;
      this.requestUpdate();
    }
  }

  get targetValue(): number {
    if (this._targetValue !== undefined) {
      return Math.round(this._targetValue / this.step) * this.step;
    }
    if (this.value) {
      return this.value;
    }
    return 0;
  }

  resetTargetValue(): void {
    this._targetValue = undefined;
  }

  set targetValue(value: number) {
    if (value !== this.targetValue) {
      this._targetValue = value;
      this.requestUpdate();
    }
  }

  get label(): string {
    return `${this.targetValue}`;
  }

  get unit(): string {
    return this.stateObj?.attributes?.unit_of_measurement || '';
  }

  get attributeLabel(): string {
    if (this._config.attribute) {
      return this.stateObj.attributes[this._config.attribute];
    }
    return '';
  }

  get hidden(): boolean {
    return false;
  }

  get hasSlider(): boolean {
    return true;
  }

  get hasToggle(): boolean {
    return this._config.slider?.toggle_on_click ?? false;
  }

  get toggleValue(): number {
    return this.value === this.min ? this.max : this.min;
  }

  get state(): string {
    return this.stateObj?.state;
  }

  get isOff(): boolean {
    return this.percentage === 0;
  }

  get isUnavailable(): boolean {
    return this.state ? this.state === 'unavailable' : true;
  }

  get isSliderDisabled(): boolean {
    return this.isUnavailable ? this.isUnavailable : this.hasToggle;
  }

  get min(): number {
    return this._config.slider?.min ?? this._min ?? 0;
  }

  get max(): number {
    return this._config.slider?.max ?? this._max ?? 100;
  }

  get step(): number {
    // TODO: There is no such thing as a step value under slider config.
    return this._config.slider?.step ?? this._step ?? 5;
  }

  get invert(): boolean {
    return this._config.slider?.invert ?? this._invert ?? false;
  }

  get isValuePercentage(): boolean {
    return true;
  }

  // TODO: It's a bit unclear percentage & targetValue are used for temporary slider values while it's 
  // being dragged around. These variables could be renamed to clarify.

  get percentage(): number {
    const percentage = ((this.targetValue - (this.invert ? this.max : this.min)) * 100) / (this.max - this.min) * (this.invert ? -1 : 1)
    // Round to 1 decimal place for a smoother slider
    return Math.round(percentage * 10) / 10;
  }

  get valueFromPercentage(): number {
    return percentageToValue(this.percentage, this.min, this.max);
  }

  get allowedAttributes(): string[] {
    return [];
  }

  get style(): Style {
    return {
      icon: {
        filter: this.iconFilter,
        color: this.iconColor,
        rotateSpeed: this.iconRotateSpeed,
      },
      slider: {
        filter: this.sliderFilter,
        color: this.sliderColor,
      },
    };
  }

  get iconFilter(): string {
    if (!this._config.icon?.use_state_color || this.percentage === 0) {
      return 'brightness(100%)';
    }
    return `brightness(${(this.percentage + 100) / 2}%)`;
  }

  get iconColor(): string {
    if (this._config.icon?.use_state_color) {
      if (this.stateObj.attributes.hs_color) {
        const [hue, sat] = this.stateObj.attributes.hs_color;
        if (sat > 10) {
          return `hsl(${hue}, 100%, ${100 - sat / 2}%)`;
        }
      } else if (this.invert ? this.percentage < 100 : this.percentage > 0) {
        return 'var(--paper-item-icon-active-color, #fdd835)'
      } else {
        return 'var(--paper-item-icon-color, #44739e)'
      }
    }
    return '';
  }

  get iconRotateSpeed(): string {
    return '0s';
  }

  get sliderFilter(): string {
    if (!this._config.slider?.use_percentage_bg_opacity || this.percentage === 0 || this._config.slider.background === SliderBackground.GRADIENT) {
      return 'brightness(100%)';
    }
    return `brightness(${(this.percentage + 100) / 2}%)`;
  }

  get sliderColor(): string {
    if (this._config.slider?.use_state_color) {
      if (this.stateObj.attributes.hs_color) {
        const [hue, sat] = this.stateObj.attributes.hs_color;
        if (sat > 10) {
          const color = `hsl(${hue}, 100%, ${100 - sat / 2}%)`;
          this._sliderPrevColor = color;
          return color;
        }
      } else  if (
        this.stateObj.attributes.color_temp &&
        this.stateObj.attributes.min_mireds &&
        this.stateObj.attributes.max_mireds
      ) {
        const color = getLightColorBasedOnTemperature(
          this.stateObj.attributes.color_temp,
          this.stateObj.attributes.min_mireds,
          this.stateObj.attributes.max_mireds,
        );
        this._sliderPrevColor = color;
        return color;
      } else if (this._sliderPrevColor.startsWith('hsl') || this._sliderPrevColor.startsWith('rgb')) {
        return this._sliderPrevColor;
      }
    }
    return 'inherit';
  }
  
  get actionIcon(): string {
    return '';
  }
  
  // TODO: Wire up default action for all controller types
  get defaultAction(): Parameters<typeof handleAction>[2] | undefined {
    return undefined;
  }

  get secondaryActionIcon(): string {
    return '';
  }

  // TODO: Wire up default secondary action for all controller types
  get defaultSecondaryAction(): Parameters<typeof handleAction>[2] | undefined {
    return undefined;
  }

  moveSlider(event: any, {left, top, width, height}): number {
    let percentage = this.calcMovementPercentage(event, {left, top, width, height});
    percentage = this.applyStep(percentage);
    percentage = normalize(percentage, 0, 100);
    if (!this.isValuePercentage) {
      percentage = percentageToValue(percentage, this.min, this.max);
    }
    return percentage;
  }

  calcMovementPercentage(event: any, {left, top, width, height}): number {
    let percentage;
    switch(this._config.slider?.direction) {
      case SliderDirections.LEFT_RIGHT:
        percentage = toPercentage(
          event.clientX,
          left,
          width
        );
        if (this.invert) {
          percentage = 100 - percentage;
        }
        break
      case SliderDirections.RIGHT_LEFT:
        percentage = toPercentage(
          event.clientX,
          left,
          width
        );
        if (!this.invert) {
          percentage = 100 - percentage;
        }
        break
      case SliderDirections.TOP_BOTTOM:
        percentage = toPercentage(
          event.clientY,
          top,
          height
        );
        if (this.invert) {
          percentage = 100 - percentage;
        }
        break
      case SliderDirections.BOTTOM_TOP:
        percentage = toPercentage(
          event.clientY,
          top,
          height
        );
        if (!this.invert) {
          percentage = 100 - percentage;
        }
        break

    }
    return percentage;
  }

  hasPendingPromises(): boolean {
    return this._pendingPromises.size > 0;
  }

  checkSelfEmitted(): boolean {
    return this._emittedContexts.popContext(this.stateObj?.context?.id);
  }

  applyStep(value: number): number {
    return  Math.round(value / this.step) * this.step;
  }

  callService(domain: string, service: string, data: object): void {
    const promiseID = ++this._lastPromiseID;
    this._pendingPromises.add(promiseID);
    this._hass.callService(domain, service, data).then((val) => {
      this._emittedContexts.addContext(val?.context?.id);
      this._pendingPromises.delete(promiseID);
    });
  }

  log(name = '', value: string | number | object = '', force = false): void {
    if (this._config.debug || force) {
      console.log(`${this._config.entity}: ${name}`, value)
    }
  }

  get isSliderDragging(): boolean {
    return this._isSliderDragging;
  }

  set isSliderDragging(value: boolean) {
    this._isSliderDragging = value;
  }
}

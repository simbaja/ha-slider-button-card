import { TimerController } from '../timer-controller';
import { HomeAssistant } from 'custom-card-helpers';
import { ReactiveControllerHost } from 'lit';
import { SliderButtonCardConfig } from '../../types';

// Create a test-specific class to access the protected constructor
class TestTimerController extends TimerController {
  constructor(config: SliderButtonCardConfig, host: ReactiveControllerHost) {
    super(config, host);
  }
}

describe('TimerController', () => {
  let controller: TestTimerController;
  let mockHass: Partial<HomeAssistant>;
  let mockConfig: SliderButtonCardConfig;
  let mockStateObj: any;
  let mockHost: ReactiveControllerHost;

  beforeEach(() => {
    // Mock Home Assistant instance
    mockHass = {
      callService: jest.fn(),
      localize: jest.fn(),
      states: {},
    };

    // Mock config
    mockConfig = {
      entity: 'timer.test_timer',
      type: 'custom:slider-button-card',
    };

    // Mock state object
    mockStateObj = {
      state: 'idle',
      attributes: {
        duration: '00:30:00',
        remaining: '00:30:00',
        finishes_at: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
      },
    };

    // Mock host
    mockHost = {
      addController: jest.fn(),
      removeController: jest.fn(),
      requestUpdate: jest.fn(),
      updateComplete: Promise.resolve(true),
    };

    // Create controller instance
    controller = new TestTimerController(mockConfig, mockHost);
    controller._hass = mockHass as HomeAssistant;
    (mockHass.states as any)[mockConfig.entity] = mockStateObj;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('hostConnected and hostDisconnected', () => {
    it('should clear interval on disconnect', () => {
      const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
      controller['_startInterval'](); // Ensure interval is set
      controller.hostDisconnected();
      expect(clearIntervalSpy).toHaveBeenCalled();
    });
  });

  describe('hostUpdated', () => {
    it('should start interval when state is active', () => {
      const setIntervalSpy = jest.spyOn(window, 'setInterval');
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      controller.hostUpdated();
      expect(setIntervalSpy).toHaveBeenCalled();
    });

    it('should clear interval when state is not active', () => {
      const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
      controller['_startInterval'](); // Ensure interval is set
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'idle',
      };
      controller.hostUpdated();
      expect(clearIntervalSpy).toHaveBeenCalled();
    });
  });

  describe('_value getter', () => {
    it('should return 0 when no state object exists', () => {
      (mockHass.states as any)[mockConfig.entity] = undefined;
      expect(controller._value).toBe(0);
    });

    it('should calculate correct value for active state', () => {
      const now = Date.now();
      const endsAt = new Date(now + 15 * 60 * 1000).toISOString();
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
        attributes: {
          ...mockStateObj.attributes,
          finishes_at: endsAt,
        },
      };
      expect(controller._value).toBeGreaterThan(0);
    });

    it('should calculate correct value for paused state', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'paused',
        attributes: {
          ...mockStateObj.attributes,
          remaining: '00:15:00',
        },
      };
      expect(controller._value).toBeGreaterThan(0);
    });
  });

  describe('_value setter', () => {
    it('should call finish service when target value is 0 and timer is active', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      controller._value = controller._max; // This will make targetValue = 0
      expect(mockHass.callService).toHaveBeenCalledWith('timer', 'finish', {
        entity_id: mockConfig.entity,
      });
    });

    it('should handle value changes for active timer', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      controller._value = 5000; // 50%
      expect(mockHass.callService).toHaveBeenCalledWith('timer', 'change', expect.any(Object));
    });

    it('should handle value changes for paused timer', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'paused',
      };
      controller._value = 5000; // 50%
      expect(mockHass.callService).toHaveBeenCalledWith('timer', 'start', expect.any(Object));
      expect(mockHass.callService).toHaveBeenCalledWith('timer', 'change', expect.any(Object));
      expect(mockHass.callService).toHaveBeenCalledWith('timer', 'pause', expect.any(Object));
    });
  });

  describe('label', () => {
    it('should return idle state label when timer is idle', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'idle',
      };
      (mockHass.localize as jest.Mock).mockReturnValue('Idle');
      expect(controller.label).toBe('Idle');
    });

    it('should return remaining time for active timer', () => {
      const now = Date.now();
      const endsAt = new Date(now + 15 * 60 * 1000).toISOString();
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
        attributes: {
          ...mockStateObj.attributes,
          finishes_at: endsAt,
        },
      };
      expect(controller.label).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });

    it('should return remaining time for paused timer', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'paused',
        attributes: {
          ...mockStateObj.attributes,
          remaining: '00:15:00',
        },
      };
      expect(controller.label).toBe('00:15:00');
    });
  });

  describe('action handling', () => {
    it('should return correct action icon for active state', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      expect(controller.actionIcon).toBe('mdi:pause');
    });

    it('should return correct action icon for idle/paused state', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'idle',
      };
      expect(controller.actionIcon).toBe('mdi:play');
    });

    it('should return correct default action for active state', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      const action = controller.defaultAction;
      expect(action?.tap_action).toMatchObject({
        action: 'call-service',
        service: 'timer.pause',
      });
    });

    it('should return correct default action for idle state', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'idle',
      };
      const action = controller.defaultAction;
      expect(action?.tap_action).toMatchObject({
        action: 'call-service',
        service: 'timer.start',
      });
    });

    it('should return correct secondary action icon', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      expect(controller.secondaryActionIcon).toBe('mdi:refresh');
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'idle',
      };
      expect(controller.secondaryActionIcon).toBe('');
    });

    it('should return correct default secondary action', () => {
      (mockHass.states as any)[mockConfig.entity] = {
        ...mockStateObj,
        state: 'active',
      };
      const action = controller.defaultSecondaryAction;
      expect(action?.tap_action).toMatchObject({
        action: 'call-service',
        service: 'timer.cancel',
      });
    });
  });

  describe('helper methods', () => {
    it('should convert time string to milliseconds', () => {
      expect(controller['_timeToMs']('01:30:00')).toBe(5400000);
    });

    it('should convert milliseconds to time string', () => {
      expect(controller['_msToTime'](5400000)).toBe('01:30:00');
    });

    it('should handle negative milliseconds', () => {
      expect(controller['_msToTime'](-5400000)).toBe('-01:30:00');
    });
  });
}); 
import {
  getEnumValues,
  applyPatch,
  normalize,
  toPercentage,
  percentageToValue,
  capitalizeFirst,
} from '../utils';

describe('Utility Functions', () => {
  describe('getEnumValues', () => {
    it('should return array of string values from enum', () => {
      enum TestEnum {
        A = 'a',
        B = 'b',
        C = 'c',
      }
      expect(getEnumValues(TestEnum)).toEqual(['a', 'b', 'c']);
    });
  });

  describe('applyPatch', () => {
    it('should apply patch to nested object', () => {
      const data = { a: { b: { c: 1 } } };
      applyPatch(data, ['a', 'b', 'c'], 2);
      expect(data.a.b.c).toBe(2);
    });

    it('should create nested structure if it does not exist', () => {
      const data = {};
      applyPatch(data, ['a', 'b', 'c'], 1);
      expect(data).toEqual({ a: { b: { c: 1 } } });
    });
  });

  describe('normalize', () => {
    it('should return value within min and max bounds', () => {
      expect(normalize(5, 0, 10)).toBe(5);
      expect(normalize(-1, 0, 10)).toBe(0);
      expect(normalize(11, 0, 10)).toBe(10);
    });

    it('should return 0 for NaN inputs', () => {
      expect(normalize(NaN, 0, 10)).toBe(0);
      expect(normalize(5, NaN, 10)).toBe(0);
      expect(normalize(5, 0, NaN)).toBe(0);
    });
  });

  describe('toPercentage', () => {
    it('should convert value to percentage', () => {
      expect(toPercentage(50, 0, 100)).toBe(50);
      expect(toPercentage(25, 0, 100)).toBe(25);
      expect(toPercentage(75, 0, 100)).toBe(75);
    });
  });

  describe('percentageToValue', () => {
    it('should convert percentage to value', () => {
      expect(percentageToValue(50, 0, 100)).toBe(50);
      expect(percentageToValue(25, 0, 100)).toBe(25);
      expect(percentageToValue(75, 0, 100)).toBe(75);
    });
  });

  describe('capitalizeFirst', () => {
    it('should capitalize first letter of string', () => {
      expect(capitalizeFirst('hello')).toBe('Hello');
      expect(capitalizeFirst('world')).toBe('World');
    });

    it('should handle empty string', () => {
      expect(capitalizeFirst('')).toBe('');
    });
  });
}); 
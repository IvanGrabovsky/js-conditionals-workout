import { describe, it, expect } from 'vitest';
import { formatUserStatus, calculateDiscount, chainTaxCalculator } from '../src/05-ternary.js';

describe('Модуль 5: Тернарний оператор', () => {
  describe('5.1: formatUserStatus', () => {
    it('повертає статус користувача через тернарник', () => {
      expect(formatUserStatus(true)).toBe('В мережі');
      expect(formatUserStatus(false)).toBe('Не в мережі');
    });
  });

  describe('5.2: calculateDiscount', () => {
    it('розраховує знижку за сумою або промокодом', () => {
      expect(calculateDiscount(1500, false)).toBe(15);
      expect(calculateDiscount(400, true)).toBe(15);
      expect(calculateDiscount(400, false)).toBe(0);
    });
  });

  describe('5.3: chainTaxCalculator', () => {
    it('визначає шкалу податку через ланцюжок тернарників', () => {
      expect(chainTaxCalculator(5000)).toBe(5);
      expect(chainTaxCalculator(10000)).toBe(5);
      expect(chainTaxCalculator(30000)).toBe(10);
      expect(chainTaxCalculator(50000)).toBe(10);
      expect(chainTaxCalculator(75000)).toBe(15);
      expect(chainTaxCalculator(100000)).toBe(15);
      expect(chainTaxCalculator(200000)).toBe(20);
      expect(chainTaxCalculator(-100)).toBe(0);
      expect(chainTaxCalculator('invalid')).toBe(0);
    });
  });
});

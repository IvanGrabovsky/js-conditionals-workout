import { describe, it, expect } from 'vitest';
import { applyBonus, guardAccess, logWarningTemperature } from '../src/01-if-basic.js';

describe('Модуль 1: Базовий if та Guard Clauses', () => {
  describe('1.1: applyBonus', () => {
    it('додає 100 балів для VIP-клієнта', () => {
      expect(applyBonus(250, true)).toBe(350);
    });

    it('залишає баланс без змін для звичайного клієнта', () => {
      expect(applyBonus(250, false)).toBe(250);
    });
  });

  describe('1.2: guardAccess', () => {
    it('дозволяє доступ активному верифікованому користувачу', () => {
      expect(guardAccess({ id: 1, isBlocked: false, isVerified: true })).toBe(true);
    });

    it('блокує якщо користувач null або undefined', () => {
      expect(guardAccess(null)).toBe(false);
      expect(guardAccess(undefined)).toBe(false);
    });

    it('блокує якщо isBlocked === true', () => {
      expect(guardAccess({ id: 2, isBlocked: true, isVerified: true })).toBe(false);
    });

    it('блокує якщо isVerified === false', () => {
      expect(guardAccess({ id: 3, isBlocked: false, isVerified: false })).toBe(false);
    });
  });

  describe('1.3: logWarningTemperature', () => {
    it('додає запис про перегрів, якщо температура > 85°C', () => {
      const logs = [];
      const res = logWarningTemperature(90, logs);
      expect(res).toEqual(['УВАГА: Перегрів 90°C!']);
    });

    it('не додає запис, якщо температура в межах норми', () => {
      const logs = [];
      const res = logWarningTemperature(75, logs);
      expect(res).toEqual([]);
    });
  });
});

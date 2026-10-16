import { describe, it, expect } from 'vitest';
import { flowchartNumberSign, flowchartAtmWithdraw, flowchartLeapYear } from '../src/04-flowcharts-logic.js';

describe('Модуль 4: Алгоритми за блок-схемами', () => {
  describe('4.1: flowchartNumberSign', () => {
    it('визначає знак числа за схемою', () => {
      expect(flowchartNumberSign(15)).toBe('positive');
      expect(flowchartNumberSign(-8)).toBe('negative');
      expect(flowchartNumberSign(0)).toBe('zero');
    });
  });

  describe('4.2: flowchartAtmWithdraw', () => {
    it('успішно видає суму при дотриманні всіх умов', () => {
      const res = flowchartAtmWithdraw(400, 1000, 2000);
      expect(res).toEqual({
        success: true,
        error: null,
        newBalance: 600
      });
    });

    it('помилка при некратності 50', () => {
      const res = flowchartAtmWithdraw(125, 1000, 2000);
      expect(res).toEqual({
        success: false,
        error: 'INVALID_DENOMINATION',
        newBalance: 1000
      });
    });

    it('помилка при перевищенні балансу', () => {
      const res = flowchartAtmWithdraw(600, 500, 2000);
      expect(res).toEqual({
        success: false,
        error: 'INSUFFICIENT_FUNDS',
        newBalance: 500
      });
    });

    it('помилка при перевищенні ліміту дня', () => {
      const res = flowchartAtmWithdraw(1500, 3000, 1000);
      expect(res).toEqual({
        success: false,
        error: 'EXCEEDED_DAILY_LIMIT',
        newBalance: 3000
      });
    });
  });

  describe('4.3: flowchartLeapYear', () => {
    it('перевіряє високосні роки за правилами григоріанського календаря', () => {
      expect(flowchartLeapYear(2024)).toBe(true);  // ділиться на 4
      expect(flowchartLeapYear(2000)).toBe(true);  // ділиться на 400
      expect(flowchartLeapYear(1900)).toBe(false); // ділиться на 100, але не на 400
      expect(flowchartLeapYear(2023)).toBe(false); // звичайний
    });
  });
});

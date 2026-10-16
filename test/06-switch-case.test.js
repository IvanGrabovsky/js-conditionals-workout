import { describe, it, expect } from 'vitest';
import { getDayType, handleHttpStatus, executeCalculator } from '../src/06-switch-case.js';

describe('Модуль 6: Оператор switch (switch, case, break, default)', () => {
  describe('6.1: getDayType', () => {
    it('визначає робочі дні (1..5)', () => {
      expect(getDayType(1)).toBe('WORKDAY');
      expect(getDayType(3)).toBe('WORKDAY');
      expect(getDayType(5)).toBe('WORKDAY');
    });

    it('визначає вихідні (6..7)', () => {
      expect(getDayType(6)).toBe('WEEKEND');
      expect(getDayType(7)).toBe('WEEKEND');
    });

    it('повертає INVALID_DAY у блоці default', () => {
      expect(getDayType(0)).toBe('INVALID_DAY');
      expect(getDayType(8)).toBe('INVALID_DAY');
      expect(getDayType('Monday')).toBe('INVALID_DAY');
    });
  });

  describe('6.2: handleHttpStatus', () => {
    it('розшифровує базові статус-коди HTTP', () => {
      expect(handleHttpStatus(200)).toBe('OK — Запит успішно виконано');
      expect(handleHttpStatus(201)).toBe('CREATED — Ресурс успішно створено');
      expect(handleHttpStatus(400)).toBe('BAD_REQUEST — Помилка у параметрах запиту');
      expect(handleHttpStatus(401)).toBe('UNAUTHORIZED — Потрібна авторизація');
      expect(handleHttpStatus(403)).toBe('FORBIDDEN — Доступ заборонено');
      expect(handleHttpStatus(404)).toBe('NOT_FOUND — Ресурс не знайдено');
      expect(handleHttpStatus(500)).toBe('INTERNAL_SERVER_ERROR — Внутрішня помилка сервера');
      expect(handleHttpStatus(999)).toBe('UNKNOWN_STATUS_CODE — Невідомий код статусу');
    });
  });

  describe('6.3: executeCalculator', () => {
    it('виконує базові операції', () => {
      expect(executeCalculator(10, 4, '+')).toBe(14);
      expect(executeCalculator(10, 4, '-')).toBe(6);
      expect(executeCalculator(10, 4, '*')).toBe(40);
      expect(executeCalculator(10, 4, '/')).toBe(2.5);
      expect(executeCalculator(10, 4, '%')).toBe(2);
      expect(executeCalculator(2, 4, '^')).toBe(16);
    });

    it('обробляє ділення на нуль', () => {
      expect(executeCalculator(10, 0, '/')).toBe('ERROR: Division by zero');
      expect(executeCalculator(10, 0, '%')).toBe('ERROR: Division by zero');
    });

    it('помилка при невідомому операторі', () => {
      expect(executeCalculator(5, 5, '&')).toBe('ERROR: Unsupported operator');
    });
  });
});

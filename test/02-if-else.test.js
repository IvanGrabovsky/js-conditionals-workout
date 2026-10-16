import { describe, it, expect } from 'vitest';
import { checkEvenOdd, validatePasswordStrength, calculateTicketPrice } from '../src/02-if-else.js';

describe('Модуль 2: Оператор if - else', () => {
  describe('2.1: checkEvenOdd', () => {
    it('визначає парні та непарні числа', () => {
      expect(checkEvenOdd(4)).toBe('even');
      expect(checkEvenOdd(7)).toBe('odd');
      expect(checkEvenOdd(0)).toBe('even');
      expect(checkEvenOdd(-2)).toBe('even');
      expect(checkEvenOdd(-5)).toBe('odd');
    });
  });

  describe('2.2: validatePasswordStrength', () => {
    it('валідує пароль довжиною від 8 символів', () => {
      expect(validatePasswordStrength('superCode2026')).toEqual({
        isValid: true,
        message: 'Пароль прийнято.'
      });
    });

    it('відхиляє короткі паролі та не-рядки', () => {
      expect(validatePasswordStrength('12345')).toEqual({
        isValid: false,
        message: 'Пароль занадто короткий (мінімум 8 символів).'
      });
      expect(validatePasswordStrength(null)).toEqual({
        isValid: false,
        message: 'Пароль занадто короткий (мінімум 8 символів).'
      });
    });
  });

  describe('2.3: calculateTicketPrice', () => {
    it('надає пільгову ціну неповнолітнім або студентам', () => {
      expect(calculateTicketPrice(15, false)).toBe(100);
      expect(calculateTicketPrice(21, true)).toBe(100);
      expect(calculateTicketPrice(17, true)).toBe(100);
    });

    it('стягує повну вартість з дорослих не-студентів', () => {
      expect(calculateTicketPrice(25, false)).toBe(200);
    });
  });
});

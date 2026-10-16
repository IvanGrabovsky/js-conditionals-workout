import { describe, it, expect } from 'vitest';
import { classifyGrade, getDeliveryTariff, resolveTrafficAction } from '../src/03-if-else-if.js';

describe('Модуль 3: Сходи розгалужень if - else if - else', () => {
  describe('3.1: classifyGrade', () => {
    it('класифікує бали від 0 до 100', () => {
      expect(classifyGrade(95)).toBe('Відмінно');
      expect(classifyGrade(90)).toBe('Відмінно');
      expect(classifyGrade(85)).toBe('Добре');
      expect(classifyGrade(75)).toBe('Добре');
      expect(classifyGrade(70)).toBe('Задовільно');
      expect(classifyGrade(60)).toBe('Задовільно');
      expect(classifyGrade(45)).toBe('Незадовільно');
      expect(classifyGrade(0)).toBe('Незадовільно');
    });

    it('повертає помилку для некоректних балів', () => {
      expect(classifyGrade(105)).toBe('Некоректний бал');
      expect(classifyGrade(-5)).toBe('Некоректний бал');
      expect(classifyGrade('90')).toBe('Некоректний бал');
    });
  });

  describe('3.2: getDeliveryTariff', () => {
    it('розраховує вартість за вагою та відстанню', () => {
      expect(getDeliveryTariff(0.5, 30)).toBe(50);
      expect(getDeliveryTariff(3, 100)).toBe(130);
      expect(getDeliveryTariff(10, 250)).toBe(230);
      expect(getDeliveryTariff(20, 250)).toBe(300);
    });

    it('повертає null для відʼємних або нульових значень', () => {
      expect(getDeliveryTariff(0, 50)).toBeNull();
      expect(getDeliveryTariff(5, -10)).toBeNull();
    });
  });

  describe('3.3: resolveTrafficAction', () => {
    it('надає абсолютний пріоритет спецтранспорту', () => {
      expect(resolveTrafficAction('green', true)).toBe('GIVE_WAY');
      expect(resolveTrafficAction('red', true)).toBe('GIVE_WAY');
    });

    it('керує діями за кольорами світлофора для звичайних авто', () => {
      expect(resolveTrafficAction('green', false)).toBe('DRIVE');
      expect(resolveTrafficAction('yellow', false)).toBe('PREPARE_TO_STOP');
      expect(resolveTrafficAction('red', false)).toBe('STOP');
      expect(resolveTrafficAction('blue', false)).toBe('CAUTION_MALFUNCTION');
    });
  });
});

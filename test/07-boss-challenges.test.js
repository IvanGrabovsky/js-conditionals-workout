import { describe, it, expect } from 'vitest';
import { smartThermostat, subscriptionBilling, questDecisionTree } from '../src/07-boss-challenges.js';

describe('Модуль 7: Boss Challenges — Комплексні системи логічного вибору', () => {
  describe('7.1: smartThermostat', () => {
    it('вимикається в режимі off', () => {
      expect(smartThermostat(20, 22, 'off')).toEqual({ action: 'STANDBY', powerPercent: 0 });
    });

    it('вмикає обігрів при потребі', () => {
      // effectiveTarget = 22, current = 19 -> різниця 3 -> power = 60
      const res = smartThermostat(19, 22, 'heat', false);
      expect(res).toEqual({ action: 'HEATING', powerPercent: 60 });
    });

    it('враховує еко-режим для опалення', () => {
      // effectiveTarget = 22 - 2 = 20, current = 19 -> різниця 1 -> power = 20
      const res = smartThermostat(19, 22, 'heat', true);
      expect(res).toEqual({ action: 'HEATING', powerPercent: 20 });
    });

    it('переходить у режим підтримки температури в auto', () => {
      const res = smartThermostat(22, 22, 'auto');
      expect(res).toEqual({ action: 'MAINTAIN', powerPercent: 10 });
    });
  });

  describe('7.2: subscriptionBilling', () => {
    it('розраховує базовий місячний тариф', () => {
      expect(subscriptionBilling('pro', 'monthly')).toEqual({
        plan: 'pro',
        billingCycle: 'monthly',
        totalUsd: 25,
        discountApplied: false
      });
    });

    it('застосовує річну знижку 20% та промокод CAMP2026 (-10%)', () => {
      // pro = 25 * 12 * 0.8 = 240, зі знижкою 10% = 216
      expect(subscriptionBilling('pro', 'yearly', 'CAMP2026')).toEqual({
        plan: 'pro',
        billingCycle: 'yearly',
        totalUsd: 216,
        discountApplied: true
      });
    });

    it('повертає null для невідомого плану', () => {
      expect(subscriptionBilling('unknown_tier')).toBeNull();
    });
  });

  describe('7.3: questDecisionTree', () => {
    it('використовує зілля здоровʼя при критичному рівні здоровʼя (<= 20)', () => {
      expect(questDecisionTree('warrior', 15, 100, 'dragon')).toBe('USE_HEALING_POTION');
      expect(questDecisionTree('mage', 20, 50, 'undead')).toBe('USE_HEALING_POTION');
    });

    it('обирає тактику для воїна', () => {
      expect(questDecisionTree('warrior', 80, 0, 'beast')).toBe('BERSERK_STRIKE');
      expect(questDecisionTree('warrior', 50, 0, 'dragon')).toBe('DEFENSIVE_STANCE');
      expect(questDecisionTree('warrior', 50, 0, 'undead')).toBe('SWORD_SLASH');
    });

    it('обирає тактику для мага', () => {
      expect(questDecisionTree('mage', 100, 40, 'undead')).toBe('HOLY_FIRE');
      expect(questDecisionTree('mage', 100, 40, 'dragon')).toBe('FIREBALL');
      expect(questDecisionTree('mage', 100, 10, 'dragon')).toBe('STAFF_ATTACK');
    });

    it('обирає тактику для розбійника', () => {
      expect(questDecisionTree('rogue', 100, 0, 'beast')).toBe('POISON_DART');
      expect(questDecisionTree('rogue', 100, 0, 'dragon')).toBe('BACKSTAB');
    });

    it('тікає з бою, якщо клас невідомий', () => {
      expect(questDecisionTree('bard', 100, 100, 'dragon')).toBe('FLEE');
    });
  });
});

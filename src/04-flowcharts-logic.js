/**
 * МОДУЛЬ 4: Алгоритми за блок-схемами (Flowcharts into Code)
 * =========================================================
 * 
 * Теорія позначень у блок-схемах:
 * 1. [Еліпс / Скруглений прямокутник] — Початок / Кінець алгоритму.
 * 2. [Прямокутник] — Блок дії / оператора (наприклад: let x = 5).
 * 3. <Ромб> — Блок умови / розгалуження (Condition Diamond). Має два виходи: ТАК (+) та НІ (-).
 * 4. (Коло / Точка) — Вузол об'єднання гілок (Merge Point), де розгалужені шляхи сходяться разом.
 */

/**
 * ЗАВДАННЯ 4.1: flowchartNumberSign — Блок-схема знаку числа
 * 
 * 📊 Блок-схема алгоритму:
 *             [ Початок: n ]
 *                    │
 *             < Чи n > 0 ? >
 *             /             \
 *       (ТАК)               (НІ)
 *        │                    │
 *   ['positive']       < Чи n < 0 ? >
 *        │             /             \
 *        │       (ТАК)               (НІ)
 *        │        │                    │
 *        │   ['negative']         ['zero']
 *        │        │                    │
 *        └───┬────┴────────────────────┘ (Вузол об'єднання гілок)
 *            ▼
 *      [ Повернути результат ]
 *
 * 📋 Вимоги:
 * - Повернути 'positive', 'negative' або 'zero'.
 * - Точно відтворити логіку перевірок блоків за блок-схемою.
 */
export function flowchartNumberSign(n) {
  // TODO: Напиши свій розв'язок
  return '';
}

/**
 * ЗАВДАННЯ 4.2: flowchartAtmWithdraw — Блок-схема видачі готівки в банкоматі
 * 
 * 📊 Блок-схема алгоритму:
 *                    [ Вхід: amount, balance, dailyLimit ]
 *                                     │
 *                       < Чи amount % 50 === 0 ? >
 *                       /                        \
 *                 (ТАК)                          (НІ)
 *                  │                               │
 *      < Чи amount <= balance ? >             [ error: 'INVALID_DENOMINATION' ]
 *      /                        \                  │
 * (ТАК)                         (НІ)               │
 *   │                             │                │
 * < Чи amount <= dailyLimit ? > [ error: 'INSUFFICIENT_FUNDS' ]
 * /                           \   │                │
 * (ТАК)                       (НІ)│                │
 *   │                           │ │                │
 * [ success: true,              [ error: 'EXCEEDED_DAILY_LIMIT' ]
 *   newBalance: balance-amount] │ │                │
 *   │                           │ │                │
 *   └─────────────┬─────────────┴─┴────────────────┘ (Вузол об'єднання)
 *                 ▼
 *          [ Повернути результат ]
 *
 * 📋 Вимоги:
 * - Купюри банкомату кратні 50 грн (`amount % 50 === 0`).
 * - Якщо сума не кратна: `{ success: false, error: 'INVALID_DENOMINATION', newBalance: balance }`.
 * - Якщо сума більша за баланс: `{ success: false, error: 'INSUFFICIENT_FUNDS', newBalance: balance }`.
 * - Якщо сума перевищує ліміт дня: `{ success: false, error: 'EXCEEDED_DAILY_LIMIT', newBalance: balance }`.
 * - Якщо все ок: `{ success: true, error: null, newBalance: balance - amount }`.
 */
export function flowchartAtmWithdraw(amount, balance, dailyLimit) {
  // TODO: Напиши свій розв'язок
  return { success: false, error: null, newBalance: balance };
}

/**
 * ЗАВДАННЯ 4.3: flowchartLeapYear — Блок-схема визначення високосного року
 * 
 * 📊 Блок-схема:
 *               [ Вхід: year ]
 *                     │
 *          < year % 400 === 0 ? >
 *          /                    \
 *    (ТАК)                      (НІ)
 *      │                          │
 *   [ true ]           < year % 100 === 0 ? >
 *      │               /                    \
 *      │         (ТАК)                      (НІ)
 *      │           │                          │
 *      │       [ false ]            < year % 4 === 0 ? >
 *      │           │                /                  \
 *      │           │          (ТАК)                    (НІ)
 *      │           │            │                        │
 *      │           │         [ true ]                 [ false ]
 *      │           │            │                        │
 *      └───────────┴────────────┴────────────────────────┘ (Вузол об'єднання)
 *                               │
 *                        [ Повернути результат ]
 *
 * 📋 Вимоги:
 * - Рік є високосним (true), якщо:
 *   - ділиться на 400 без залишку,
 *   - АБО ділиться на 4, але НЕ ділиться на 100.
 * - Повернути булеве значення: true або false.
 */
export function flowchartLeapYear(year) {
  // TODO: Напиши свій розв'язок
  return false;
}

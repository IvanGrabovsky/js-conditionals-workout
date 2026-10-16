/**
 * МОДУЛЬ 1: Базовий оператор розгалуження if та Guard Clauses
 * ==========================================================
 */

/**
 * ЗАВДАННЯ 1.1: applyBonus — Нарахування вітального бонусу
 * 
 * 🎯 Суть завдання:
 * Користувачеві нараховується базовий баланс. Якщо він є VIP-клієнтом (`isVip === true`),
 * до балансу додається бонусний депозит у розмірі 100 балів.
 *
 * 📋 Вимоги:
 * - Приймає: `balance` (число) та `isVip` (булеве значення).
 * - Використовуйте простий оператор `if`.
 * - Повернути підсумковий баланс.
 *
 * 💡 Приклад:
 * applyBonus(250, true)  // => 350
 * applyBonus(250, false) // => 250
 */
export function applyBonus(balance, isVip) {
  // TODO: Напиши свій розв'язок
  return balance;
}

/**
 * ЗАВДАННЯ 1.2: guardAccess — Захисний бар'єр доступу (Guard Clause)
 * 
 * 🎯 Суть завдання:
 * Перевірити об'єкт користувача перед виконанням операцій. Якщо користувач відсутній,
 * заблокований (`isBlocked === true`) або не підтвердив пошту (`isVerified === false`),
 * функція повинна негайно припинити роботу та повернути `false`.
 *
 * 📋 Вимоги:
 * - Приймає: `user` (об'єкт { id, isBlocked, isVerified } або null/undefined).
 * - Якщо `!user`, `user.isBlocked` або `!user.isVerified` — повернути false через ранній if-return.
 * - Якщо всі перевірки пройдено — повернути true.
 *
 * 💡 Приклад:
 * guardAccess(null) // => false
 * guardAccess({ isBlocked: false, isVerified: true }) // => true
 */
export function guardAccess(user) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 1.3: logWarningTemperature — Фіксація температурної аномалії
 * 
 * 🎯 Суть завдання:
 * Серверний датчик фіксує температуру процесора. Якщо температура перевищує критичну межу 85°C,
 * необхідно додати запис у масив журналів тривоги.
 *
 * 📋 Вимоги:
 * - Приймає: `tempCelsius` (число) та `alertLogs` (масив рядків).
 * - Якщо `tempCelsius > 85`: додати у масив рядок `УВАГА: Перегрів [tempCelsius]°C!`.
 * - Функція повертає змінений масив `alertLogs`.
 *
 * 💡 Приклад:
 * logWarningTemperature(92, []) // => ['УВАГА: Перегрів 92°C!']
 * logWarningTemperature(70, []) // => []
 */
export function logWarningTemperature(tempCelsius, alertLogs = []) {
  // TODO: Напиши свій розв'язок
  return alertLogs;
}

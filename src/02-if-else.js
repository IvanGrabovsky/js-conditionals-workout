/**
 * МОДУЛЬ 2: Оператор розгалуження if - else (Дві взаємовиключні гілки)
 * ====================================================================
 */

/**
 * ЗАВДАННЯ 2.1: checkEvenOdd — Визначення парності числа
 * 
 * 🎯 Суть завдання:
 * Визначити, чи є передане ціле число парним або непарним за допомогою оператора if - else.
 *
 * 📋 Вимоги:
 * - Приймає: `number` (ціле число).
 * - Якщо число ділиться на 2 без залишку (`number % 2 === 0`) — повернути 'even' (парне).
 * - В іншому випадку — повернути 'odd' (непарне).
 *
 * 💡 Приклад:
 * checkEvenOdd(4)  // => 'even'
 * checkEvenOdd(7)  // => 'odd'
 * checkEvenOdd(0)  // => 'even'
 * checkEvenOdd(-3) // => 'odd'
 */
export function checkEvenOdd(number) {
  // TODO: Напиши свій розв'язок
  return '';
}

/**
 * ЗАВДАННЯ 2.2: validatePasswordStrength — Базова валідація пароля
 * 
 * 🎯 Суть завдання:
 * Перевірити, чи довжина пароля є достатньою (від 8 символів і більше).
 * Повернути інформативний об'єкт з булевим статусом та повідомленням для користувача.
 *
 * 📋 Вимоги:
 * - Приймає: `password` (рядок або будь-який тип даних).
 * - Якщо `typeof password !== 'string'` або `password.length < 8`:
 *   повернути { isValid: false, message: 'Пароль занадто короткий (мінімум 8 символів).' }.
 * - В іншому випадку:
 *   повернути { isValid: true, message: 'Пароль прийнято.' }.
 *
 * 💡 Приклад:
 * validatePasswordStrength('qwerty') // => { isValid: false, message: '...' }
 * validatePasswordStrength('superSecret2026') // => { isValid: true, message: '...' }
 */
export function validatePasswordStrength(password) {
  // TODO: Напиши свій розв'язок
  return { isValid: false, message: '' };
}

/**
 * ЗАВДАННЯ 2.3: calculateTicketPrice — Розрахунок вартості квитка
 * 
 * 🎯 Суть завдання:
 * Базова ціна квитка на виставку становить 200 грн. Якщо відвідувач є студентом АБО його вік менше 18 років,
 * діє пільгова ціна 100 грн, інакше сплачується повна вартість.
 *
 * 📋 Вимоги:
 * - Приймає: `age` (число) та `isStudent` (булеве значення).
 * - Використовуйте конструкцію `if - else`.
 * - Повернути числову ціну квитка (100 або 200).
 *
 * 💡 Приклад:
 * calculateTicketPrice(16, false) // => 100 (бо вік < 18)
 * calculateTicketPrice(22, true)  // => 100 (бо студент)
 * calculateTicketPrice(30, false) // => 200 (повна вартість)
 */
export function calculateTicketPrice(age, isStudent) {
  // TODO: Напиши свій розв'язок
  return 0;
}

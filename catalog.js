/**
 * КАТАЛОГ ЗАВДАНЬ: JS Conditionals & Branching Mastery
 * ====================================================
 */

export const modulesCatalog = [
  {
    id: 1,
    title: 'Модуль 1: Оператор if та Guard Clauses',
    slug: '01-if-basic',
    tasks: [
      {
        id: '1.1',
        name: 'applyBonus',
        title: 'Нарахування вітального бонусу клієнту',
        level: 'Легкий рівень',
        goal: 'Додати 100 балів до балансу, якщо клієнт має статус VIP.',
        requirements: [
          'Якщо isVip === true — додати 100 до balance.',
          'В іншому випадку — повернути початковий баланс без змін.',
          'Використати простий оператор if.'
        ],
        examples: 'applyBonus(250, true) => 350; applyBonus(250, false) => 250',
        theoryHint: '💡 <b>Базовий if:</b> Тіло <code>if (умова) { ... }</code> виконується тільки тоді, коли вираз в дужках приводиться до true.',
        starterCode: `export function applyBonus(balance, isVip) {\n  // TODO: Напиши свій розв'язок\n  return balance;\n}`
      },
      {
        id: '1.2',
        name: 'guardAccess',
        title: 'Захисний барʼєр доступу (Guard Clause)',
        level: 'Легкий рівень',
        goal: 'Перевірити валідність обʼєкта користувача та негайно зупинити виконання при порушенні умов.',
        requirements: [
          'Якщо user відсутній (null/undefined) — повернути false.',
          'Якщо user.isBlocked === true — повернути false.',
          'Якщо user.isVerified === false — повернути false.',
          'Якщо всі умови пройдені — повернути true.'
        ],
        examples: 'guardAccess(null) => false; guardAccess({ isBlocked: false, isVerified: true }) => true',
        theoryHint: '💡 <b>Guard Clauses (Захисні умови):</b> Замість глибоких вкладених if краще перевірити негативні умови на самому початку функції та зробити ранній <code>return false;</code>.',
        starterCode: `export function guardAccess(user) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`
      },
      {
        id: '1.3',
        name: 'logWarningTemperature',
        title: 'Фіксація температурної аномалії',
        level: 'Легкий рівень',
        goal: 'Додати запис у масив тривог при перевищенні безпечної температури процесора (> 85°C).',
        requirements: [
          'Якщо tempCelsius > 85 — додати у масив рядок "УВАГА: Перегрів [tempCelsius]°C!".',
          'Повернути переданий масив alertLogs.'
        ],
        examples: 'logWarningTemperature(90, []) => ["УВАГА: Перегрів 90°C!"]',
        theoryHint: '💡 <b>Побічний ефект розгалуження:</b> Використовуйте метод <code>alertLogs.push(...)</code> всередині блоку if для оновлення масиву.',
        starterCode: `export function logWarningTemperature(tempCelsius, alertLogs = []) {\n  // TODO: Напиши свій розв'язок\n  return alertLogs;\n}`
      }
    ]
  },
  {
    id: 2,
    title: 'Модуль 2: Оператор if - else (Дві альтернативи)',
    slug: '02-if-else',
    tasks: [
      {
        id: '2.1',
        name: 'checkEvenOdd',
        title: 'Визначення парності числа',
        level: 'Легкий рівень',
        goal: 'Визначити, чи число є парним або непарним за допомогою оператора if - else.',
        requirements: [
          'Якщо залишок від ділення на 2 дорівнює 0 — повернути "even".',
          'Інакше — повернути "odd".'
        ],
        examples: 'checkEvenOdd(4) => "even"; checkEvenOdd(7) => "odd"',
        theoryHint: '💡 <b>Оператор if-else:</b> Гарантує виконання рівно однієї з двох взаємовиключних гілок коду. Перевірку залишку робіть через <code>number % 2 === 0</code>.',
        starterCode: `export function checkEvenOdd(number) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`
      },
      {
        id: '2.2',
        name: 'validatePasswordStrength',
        title: 'Базова валідація довжини пароля',
        level: 'Легкий рівень',
        goal: 'Перевірити пароль на мінімальну довжину 8 символів та повернути статусний обʼєкт.',
        requirements: [
          'Якщо пароль не є рядком або довжина < 8 — повернути { isValid: false, message: "Пароль занадто короткий (мінімум 8 символів)." }.',
          'В іншому випадку — { isValid: true, message: "Пароль прийнято." }.'
        ],
        examples: 'validatePasswordStrength("qwerty") => { isValid: false, ... }',
        theoryHint: '💡 <b>Перевірка типу та довжини:</b> Використовуйте <code>typeof password !== "string" || password.length < 8</code> у гілці if.',
        starterCode: `export function validatePasswordStrength(password) {\n  // TODO: Напиши свій розв'язок\n  return { isValid: false, message: '' };\n}`
      },
      {
        id: '2.3',
        name: 'calculateTicketPrice',
        title: 'Розрахунок пільгової вартості квитка',
        level: 'Легкий рівень',
        goal: 'Встановити ціну квитка: 100 грн для студентів або неповнолітніх, 200 грн для інших.',
        requirements: [
          'Якщо age < 18 або isStudent === true — вартість 100.',
          'В іншому випадку — 200.'
        ],
        examples: 'calculateTicketPrice(16, false) => 100; calculateTicketPrice(30, false) => 200',
        theoryHint: '💡 <b>Логічне АБО (||):</b> Обʼєднайте умови через <code>age < 18 || isStudent</code> у виразі if.',
        starterCode: `export function calculateTicketPrice(age, isStudent) {\n  // TODO: Напиши свій розв'язок\n  return 0;\n}`
      }
    ]
  },
  {
    id: 3,
    title: 'Модуль 3: Сходи розгалужень if - else if - else',
    slug: '03-if-else-if',
    tasks: [
      {
        id: '3.1',
        name: 'classifyGrade',
        title: 'Класифікатор результатів тестування',
        level: 'Середній рівень',
        goal: 'Розподілити бали від 0 до 100 за текстовими категоріями успішності.',
        requirements: [
          'Некоректні бали (< 0, > 100 або не число) — "Некоректний бал".',
          '90..100: "Відмінно", 75..89: "Добре", 60..74: "Задовільно", 0..59: "Незадовільно".'
        ],
        examples: 'classifyGrade(95) => "Відмінно"; classifyGrade(45) => "Незадовільно"',
        theoryHint: '💡 <b>Порядок перевірки в сходах:</b> Завжди перевіряйте граничні помилкові умови першими, а потім спускайтеся від найвищого діапазону (>= 90) до нижчих.',
        starterCode: `export function classifyGrade(score) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`
      },
      {
        id: '3.2',
        name: 'getDeliveryTariff',
        title: 'Багаторівневий тариф поштової доставки',
        level: 'Середній рівень',
        goal: 'Розрахувати фінальну вартість за вагою та додатковою відстанню.',
        requirements: [
          'Вага: <= 1 кг: 50 грн; <= 5 кг: 80 грн; <= 15 кг: 130 грн; > 15 кг: 200 грн.',
          'Дистанція: <= 50 км: +0; <= 200 км: +50; > 200 км: +100 грн.',
          'Якщо вага або дистанція <= 0 — повернути null.'
        ],
        examples: 'getDeliveryTariff(3, 120) => 80 + 50 = 130',
        theoryHint: '💡 <b>Двоетапний розрахунок:</b> Спочатку через сходи визначте базову ставку ваги, потім окремими сходами надбавку за кілометраж, і складіть їх.',
        starterCode: `export function getDeliveryTariff(weightKg, distanceKm) {\n  // TODO: Напиши свій розв'язок\n  return 0;\n}`
      },
      {
        id: '3.3',
        name: 'resolveTrafficAction',
        title: 'Розумний автопілот світлофора',
        level: 'Середній рівень',
        goal: 'Визначити дію безпілотного авто на перехресті з урахуванням сигналів світлофора та спецтранспорту.',
        requirements: [
          'Якщо isEmergencyVehicle === true — завжди "GIVE_WAY".',
          'green -> "DRIVE", yellow -> "PREPARE_TO_STOP", red -> "STOP".',
          'Будь-який інший сигнал -> "CAUTION_MALFUNCTION".'
        ],
        examples: 'resolveTrafficAction("green", false) => "DRIVE"; resolveTrafficAction("red", true) => "GIVE_WAY"',
        theoryHint: '💡 <b>Пріоритетні перевірки:</b> Спецтранспорт перевіряється першим у ланцюжку if; якщо його немає — вступають у дію блоки else if для світлофора.',
        starterCode: `export function resolveTrafficAction(lightColor, isEmergencyVehicle) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`
      }
    ]
  },
  {
    id: 4,
    title: 'Модуль 4: Блок-схеми в коді (Flowcharts)',
    slug: '04-flowcharts-logic',
    tasks: [
      {
        id: '4.1',
        name: 'flowchartNumberSign',
        title: 'Реалізація блок-схеми знаку числа',
        level: 'Легкий рівень',
        goal: 'Перевести блок-схему з ромбами умов у чистий програмний код.',
        requirements: [
          'n > 0 -> "positive".',
          'n < 0 -> "negative".',
          'n === 0 -> "zero".'
        ],
        examples: 'flowchartNumberSign(10) => "positive"; flowchartNumberSign(-5) => "negative"',
        theoryHint: '💡 <b>Блок умови (ромб):</b> Кожен ромб блок-схеми відповідає одній інструкції if. Лінії виходу "Так" та "Ні" відповідають гілкам true та false.',
        starterCode: `export function flowchartNumberSign(n) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`
      },
      {
        id: '4.2',
        name: 'flowchartAtmWithdraw',
        title: 'Блок-схема банкомату (Кратність, Баланс, Ліміт)',
        level: 'Середній-Важкий рівень',
        goal: 'Відтворити багаторівневу блок-схему перевірок видачі готівки в банкоматі.',
        requirements: [
          'amount % 50 !== 0 -> error: "INVALID_DENOMINATION".',
          'amount > balance -> error: "INSUFFICIENT_FUNDS".',
          'amount > dailyLimit -> error: "EXCEEDED_DAILY_LIMIT".',
          'Успіх -> success: true, error: null, newBalance: balance - amount.'
        ],
        examples: 'flowchartAtmWithdraw(400, 1000, 2000) => { success: true, newBalance: 600 }',
        theoryHint: '💡 <b>Послідовні ромби:</b> У блок-схемі відхилення перевіряються крок за кроком; якщо хоча б одна умова не виконана — потік веде до блоку помилки.',
        starterCode: `export function flowchartAtmWithdraw(amount, balance, dailyLimit) {\n  // TODO: Напиши свій розв'язок\n  return { success: false, error: null, newBalance: balance };\n}`
      },
      {
        id: '4.3',
        name: 'flowchartLeapYear',
        title: 'Блок-схема визначення високосного року',
        level: 'Середній рівень',
        goal: 'Реалізувати алгоритм високосного року точно за кроками блок-схеми з обʼєднанням гілок.',
        requirements: [
          'year % 400 === 0 -> true.',
          'year % 100 === 0 -> false.',
          'year % 4 === 0 -> true.',
          'інакше -> false.'
        ],
        examples: 'flowchartLeapYear(2024) => true; flowchartLeapYear(1900) => false',
        theoryHint: '💡 <b>Злиття гілок:</b> Усі кінцеві виходи блок-схеми сходяться в одну точку повернення значення (вузол обʼєднання потоків).',
        starterCode: `export function flowchartLeapYear(year) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`
      }
    ]
  },
  {
    id: 5,
    title: 'Модуль 5: Тернарний оператор',
    slug: '05-ternary',
    tasks: [
      {
        id: '5.1',
        name: 'formatUserStatus',
        title: 'Статус підключення користувача',
        level: 'Легкий рівень',
        goal: 'Повернути статус "В мережі" або "Не в мережі" за допомогою одинарного тернарного оператора.',
        requirements: [
          'Використовувати синтаксис умова ? вираз_1 : вираз_2.',
          'isOnline ? "В мережі" : "Не в мережі".'
        ],
        examples: 'formatUserStatus(true) => "В мережі"; formatUserStatus(false) => "Не в мережі"',
        theoryHint: '💡 <b>Тернарний синтаксис:</b> Єдиний оператор у JS з трьома операндами: <code>умова ? якщо_істина : якщо_хиба</code>. Ідеальний для присвоєння та return.',
        starterCode: `export function formatUserStatus(isOnline) {\n  // TODO: Напиши свій розв'язок через тернарний оператор\n  return '';\n}`
      },
      {
        id: '5.2',
        name: 'calculateDiscount',
        title: 'Розрахунок знижки через тернарник',
        level: 'Легкий рівень',
        goal: 'Повернути 15% знижки, якщо сума >= 1000 або є промокод, інакше 0%.',
        requirements: [
          'Реалізувати в один рядок через тернарний оператор.',
          'Повернути число 15 або 0.'
        ],
        examples: 'calculateDiscount(1500, false) => 15; calculateDiscount(500, false) => 0',
        theoryHint: '💡 <b>Умова з логічним оператором:</b> У виразі перед знаком <code>?</code> можна використовувати звʼязки: <code>(total >= 1000 || hasPromo) ? ... : ...</code>.',
        starterCode: `export function calculateDiscount(total, hasPromo) {\n  // TODO: Напиши свій розв'язок через тернарний оператор\n  return 0;\n}`
      },
      {
        id: '5.3',
        name: 'chainTaxCalculator',
        title: 'Каскадний ланцюжок тернарних операторів',
        level: 'Середній рівень',
        goal: 'Визначити ставку податку через ланцюжковий каскад тернарних операторів.',
        requirements: [
          '<= 10000: 5%, <= 50000: 10%, <= 100000: 15%, > 100000: 20%.',
          'Відʼємні значення або не числа: 0%.',
          'Застосувати ланцюжок: a ? b : c ? d : e.'
        ],
        examples: 'chainTaxCalculator(25000) => 10; chainTaxCalculator(150000) => 20',
        theoryHint: '💡 <b>Ланцюговий тернарник:</b> Дозволяє компактно замінити драбину else if, переносячи наступну умову у гілку другого двокрапки <code>:</code>.',
        starterCode: `export function chainTaxCalculator(income) {\n  // TODO: Напиши свій розв'язок через ланцюжковий тернарний оператор\n  return 0;\n}`
      }
    ]
  },
  {
    id: 6,
    title: 'Модуль 6: Оператор множинного вибору switch',
    slug: '06-switch-case',
    tasks: [
      {
        id: '6.1',
        name: 'getDayType',
        title: 'Тип дня тижня (Групування case)',
        level: 'Легкий рівень',
        goal: 'Використати switch для визначення робочих (1..5) та вихідних (6..7) днів.',
        requirements: [
          '1..5: "WORKDAY", 6..7: "WEEKEND".',
          'Будь-яке інше значення: блок default повертає "INVALID_DAY".',
          'Згрупувати case без break між ними для уникнення дублювання коду.'
        ],
        examples: 'getDayType(1) => "WORKDAY"; getDayType(6) => "WEEKEND"; getDayType(9) => "INVALID_DAY"',
        theoryHint: '💡 <b>Групування case:</b> Якщо кілька значень виконують одну дію, записуйте їх підряд: <code>case 1: case 2: return "WORKDAY";</code>.',
        starterCode: `export function getDayType(dayNumber) {\n  // TODO: Напиши свій розв'язок через switch\n  return '';\n}`
      },
      {
        id: '6.2',
        name: 'handleHttpStatus',
        title: 'Обробка статус-кодів HTTP (break & default)',
        level: 'Середній рівень',
        goal: 'Розшифрувати статус-код сервера через switch-case з обовʼязковим використанням default.',
        requirements: [
          '200, 201, 400, 401, 403, 404, 500 розшифровуються відповідними повідомленнями.',
          'Будь-які інші коди у default: "UNKNOWN_STATUS_CODE — Невідомий код статусу".'
        ],
        examples: 'handleHttpStatus(200) => "OK — Запит успішно виконано"',
        theoryHint: '💡 <b>Призначення default:</b> Блок default спрацьовує тоді, коли жодна з міток case не збіглася зі значенням виразу у switch.',
        starterCode: `export function handleHttpStatus(statusCode) {\n  // TODO: Напиши свій розв'язок через switch\n  return '';\n}`
      },
      {
        id: '6.3',
        name: 'executeCalculator',
        title: 'Арифметичний калькулятор операцій',
        level: 'Середній рівень',
        goal: 'Реалізувати калькулятор над двома числами для операторів +, -, *, /, %, ^.',
        requirements: [
          'Використати switch(operator).',
          'При діленні (/ та %): якщо b === 0, повернути "ERROR: Division by zero".',
          'Невідомий оператор у default: "ERROR: Unsupported operator".'
        ],
        examples: 'executeCalculator(10, 5, "+") => 15; executeCalculator(10, 0, "/") => "ERROR: Division by zero"',
        theoryHint: '💡 <b>Строге порівняння switch:</b> Значення оператора порівнюється строго за рядком ("+" === operator). Не забувайте вкладену перевірку для нуля.',
        starterCode: `export function executeCalculator(a, b, operator) {\n  // TODO: Напиши свій розв'язок через switch\n  return 0;\n}`
      }
    ]
  },
  {
    id: 7,
    title: 'Модуль 7: Boss Challenges — Комплексні системи вибору',
    slug: '07-boss-challenges',
    tasks: [
      {
        id: '7.1',
        name: 'smartThermostat',
        title: 'Розумний клімат-контроль (if + switch + eco)',
        level: 'Важкий рівень',
        goal: 'Створити алгоритм керування опаленням і кондиціонером з підтримкою еко-режиму.',
        requirements: [
          'mode: "heat", "cool", "auto", "off".',
          'Враховувати isEcoActive (+/- 2°C до цільової температури).',
          'Розрахувати потужність powerPercent та дію (HEATING, COOLING, MAINTAIN, STANDBY).'
        ],
        examples: 'smartThermostat(19, 22, "heat", false) => { action: "HEATING", powerPercent: 60 }',
        theoryHint: '💡 <b>Декомпозиція режимів:</b> Спочатку перевірте стан "off", для "auto" визначте потрібний напрямок, а потім розрахуйте потужність пропорційно різниці температур.',
        starterCode: `export function smartThermostat(currentTemp, targetTemp, mode, isEcoActive = false) {\n  // TODO: Напиши свій розв'язок\n  return { action: 'STANDBY', powerPercent: 0 };\n}`
      },
      {
        id: '7.2',
        name: 'subscriptionBilling',
        title: 'Калькулятор тарифів хмарної SaaS-платформи',
        level: 'Важкий рівень',
        goal: 'Розрахувати фінальну вартість підписки з урахуванням періоду, річної знижки та промокодів.',
        requirements: [
          'starter: 10$, pro: 25$, enterprise: 80$ на місяць.',
          'yearly: знижка 20% від 12 місяців (base * 12 * 0.8).',
          'Промокод CAMP2026 (-10%), SUPER50 (-50%). Округлити до 2 знаків.'
        ],
        examples: 'subscriptionBilling("pro", "yearly", "CAMP2026") => { totalUsd: 216, discountApplied: true }',
        theoryHint: '💡 <b>Покрокова модифікація ціни:</b> Використайте switch для базової ціни, потім if для перевірки річного плану, та окремий if для промокодів.',
        starterCode: `export function subscriptionBilling(plan, billingCycle = 'monthly', couponCode = null) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`
      },
      {
        id: '7.3',
        name: 'questDecisionTree',
        title: 'Дерево рішень у бойовій системі RPG',
        level: 'Важкий рівень (Бос)',
        goal: 'Реалізувати тактичне дерево рішень для персонажа на основі здоровʼя, мани та ворога.',
        requirements: [
          'Критичне здоровʼя <= 20: завжди "USE_HEALING_POTION".',
          'Розподіл дій за класами: warrior, mage, rogue, default: "FLEE".',
          'Враховувати тип ворога (dragon, undead, beast).'
        ],
        examples: 'questDecisionTree("warrior", 80, 0, "dragon") => "DEFENSIVE_STANCE"',
        theoryHint: '💡 <b>Ієрархія умов:</b> Найвищий пріоритет — виживання (health <= 20). Далі перемикач switch(playerClass), а всередині — вкладені перевірки мани та типу ворога.',
        starterCode: `export function questDecisionTree(playerClass, health, mana, enemyType) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`
      }
    ]
  }
];

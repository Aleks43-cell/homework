// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену (basePrice) товара, процент скидки (discountPercentage) и  налог (taxRate) . 
// Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.


// function calculateFinalPrice(basePrice, discountPercentage, taxRate){
//     const discont = basePrice * (1 - discountPercentage / 100)
//     const finalPrice = discont * (1 + taxRate)
//     return finalPrice;
//     // return ((basePrice - discountPercentage) + taxRate) 
// }
// console.log(calculateFinalPrice(100, 10, 0)); // 90


// console.log(calculateFinalPrice(100, 10, 0.2)); // 108

// Пример работы:

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", 
// функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// function checkAccess (name , pass) {
//     if (name === "admin" && String(pass) === "123456")
//     {
//         console.log ("Доступ разрешен")
//     } else {
//         console.log ("Доступ запрещен")
//     }
// }
// console.log (checkAccess("admin", 123456))

// const checkAccess = (name, pass) => name ==="admin" && String(pass) === "123456" ? "Доступ разрешен" : "Доступ запрещен"

// console.log(checkAccess("admin", 123456))

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// function getTimeOfDay(time) {
//     switch (true) {
//         case time <= 5:
//             return "Ночь"
//         case time <= 11:
//             return "Утро"
//         case time <= 17:
//             return "День"
//         case time <= 23:
//             return "Вечер"
//         default:
//             return ("Некорректное время")
//     } 
// }
// console.log(getTimeOfDay(5))
// console.log(getTimeOfDay(11))
// console.log(getTimeOfDay(13))
// console.log(getTimeOfDay(23))
// console.log(getTimeOfDay(25))


// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// function findFirstEven (start, end ) {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 ===0 ) return i;
//     }
//     return "Четных чисел нет";
// }
// console.log (findFirstEven(3, 10))
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"



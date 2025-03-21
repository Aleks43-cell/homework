

function calculate(num1, num2, operator) {
    const operations = {
        plus: (a, b) => a + b,
        minus: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => (b === 0 ? 'Ошибка: Деление на ноль' : a / b)
    };

    return operations[operator] ? operations[operator](num1, num2) : 'Ошибка: Неизвестный оператор';
}

// Пример вызова функции
const result = calculate(2, 3, 'minus');
console.log(result); // Выводит: -1
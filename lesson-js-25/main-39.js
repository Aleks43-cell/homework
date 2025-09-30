// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
// const person = {
//     name: "Иван",
//     surname: "Пупукин",
//     age: 22,
//     profession: "Программист"
// }

// console.log(person)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
// const myObject = {};

// function isEmpty(obj) {
//     if (obj == null) return true;
//     // console.log("true")
//     return Object.keys(obj).length === 0 && obj.constructor === Object
// }

// console.log(isEmpty(myObject));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию 
// объекта и применяет изменения из объекта modifications.
// // Затем с помощью цикла for in выведите все свойства полученного объекта.
// const task = {
//     title: "Большой отчет",
//     description: "Подготовить финансовый отчет за квартал",
//     isCompleted: false
// };

// function cloneAndModify(Object, modifications){
//     return {...Object, ...modifications}
// }

// const modifieTask = cloneAndModify(task, {isCompleted: true, title: "Написать фин. отчет"});

// for(const key in modifieTask) {
//     if (Object.prototype.hasOwnProperty.call(modifieTask, key)){
//         console.log(`${key}: ${modifieTask[key]}`)
//     }
// }

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };


// function callAllMethods(obj) {
//     if (obj == null || typeof obj !== 'object') return;

//     for (const key of Object.keys(obj)) {
//         const val = obj[key];
//         if (typeof val === 'function') {
//             try {
//                 // Вызываем метод с контекстом obj, чтобы this внутри был корректным
//                 val.call(obj);
//             } catch (err) {
//                 console.error(`Ошибка при вызове метода "${key}":`, err);
//             }
//         }
//     }
// }

// // Вызов
// callAllMethods(myObject); 
// Задание 1.
// Дан массив пользователей:
// const users = [
//     { name: 'Alex', age: 24, isAdmin: false },
//     { name: 'Bob', age: 13, isAdmin: false },
//     { name: 'John', age: 31, isAdmin: true },
//     { name: 'Jane', age: 20, isAdmin: false },
// ]
// console.log(users)

// users.push({ name: 'Ann', age: 19, isAdmin: false },
//     { name: 'Jack', age: 43, isAdmin: true })

// console.log(users)



// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, 
// напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// const users = [
//     { name: 'Alex', age: 24, isAdmin: false },
//     { name: 'Bob', age: 13, isAdmin: false },
//     { name: 'John', age: 31, isAdmin: true },
//     { name: 'Jane', age: 20, isAdmin: false }
// ]
// function getUserAverageAge(users) {
//     if (users.length === 0) return 0;

//     const totalAge = users.reduce((sum, user) => sum + (Number(user.age)|| 0), 0);
    
//     const averAge = totalAge / users.length;
    
//     return averAge;
// }
// const average = +getUserAverageAge(users).toFixed(2);
// console.log(`Средний возраст: ${average}`);


// Задание 3.
// Используя массив пользователей users из предыдущего задания, 
// напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// const users = [
//     { name: 'Alex', age: 24, isAdmin: false },
//     { name: 'Bob', age: 13, isAdmin: false },
//     { name: 'John', age: 31, isAdmin: true },
//     { name: 'Jane', age: 20, isAdmin: false }
// ]

// function getAllAdmins(users) { 
//     return users.filter(user => Boolean(user && user.isAdmin))
// }

// const admin = getAllAdmins (users);

// console.log(admin)


// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n 
// элементов массива. Если n == 0, возвращается пустой массив [], 
// если n == undefined, то возвращается массив с первым элементом.

// const a = [ 10, 20, 30, 40]

// const first = (arr, n) => 
//     Array.isArray(arr) ? arr.slice(0, n == null ? 1: Math.max(0, n)) : [];

// console.log(first([10,20,30]));        
// console.log(first([10,20,30], 2));
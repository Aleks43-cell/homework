const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Tot',
        age: 25,
        isAdmin: true
    },

    {
        name: 'lili',
        age: 23,
        isAdmin: false
    },
    {
        name: 'tom',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 25,
        isAdmin: true
    }
]

let ordinaryUsers = 0

for (const user of users){
    if(!user.isAdmin) {
        ordinaryUsers++
    }
}
console.log(`Количество простых пользователей: ${ordinaryUsers}`)
    





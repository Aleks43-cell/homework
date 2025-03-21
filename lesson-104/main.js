const user = {
    alex: {
        age: 21,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(user.alex)
user.alex.sayHello('Alex')
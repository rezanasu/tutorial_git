const prompt = require("prompt-sync")();

const userLogin = (username, password) => {

    if(username === "admin" && password === "admin") {
        console.log("Authenticated")
    } else {
        console.log("Wrong password or username")
    }
}

let userName = prompt("Insert your username: ")
console.log(`Username = ${userName}`)

let password = prompt("Insert your password: ")
console.log(`Password = ${password}`)

userLogin(userName, password)

const prompt = require("prompt-sync")();

const userRegister = (userName, password, birthYear) => {
    
    console.log("======================================")
    console.log(`New user registered`)
    console.log(`username : ${userName}`)
    console.log(`password : ${password}`)
    console.log(`birthYear: ${birthYear}`)
    console.log("======================================")
}

let userName = prompt("Input username: ")
let password = prompt("Input password: ")
let birthYear = prompt("Input birthYear: ")
userRegister(userName, password, birthYear);

console.log("Hello, world!\n" +
    "This message is from console.log command in app.js")

function sum (num1, num2){
    return num1 + num2;
}

const result1 = sum(3,4)
console.log(`3 + 4 = ${result1}`)


function toPower(num, power= 2){
    return Math.pow(num, power)
}

const result2 = toPower(2)
console.log(`2 to power of 2 = ${result2}`)

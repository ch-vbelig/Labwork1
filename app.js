function sum (num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function toPower(num, power= 2){
    return Math.pow(num, power)
}

console.log("Hello, world!\n" +
    "This message is from console.log command in app.js")

const resultOfSumming = sum(3,4)
console.log(`3 + 4 = ${resultOfSumming}`)

const resultOfSubtraction = subtract(20, 13)
console.log(`20 - 13 = ${resultOfSubtraction}`)

const resultOfSuPowering = toPower(2)
console.log(`2 to power of 2 = ${resultOfSuPowering}`)
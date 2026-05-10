// ......N 1 

let num1 = Number( prompt("please enter any number : "))
let result = 0
while(num1 !== 0) {
    result = result + num1
    num1 = Number(prompt("add number : "))
}
console.log(result)


// ......N 2

let userNum = 7

for(let i =1;i<=10;i++){
    console.log(i*userNum)
}


// ......N 3

let secret = "12345" 


do {
    userPass = prompt("please enter solid password:")
}while(userPass !== secret);

console.log("congrats")


// ......N 4

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")

    } else if (i % 3 === 0) {
        console.log("Fizz")

    } else if (i % 5 === 0) {
        console.log("Buzz")

    } else {
        console.log(i)
    }
}
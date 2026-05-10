const { use } = require("react")

// N1
const numbers = [15, 2, 8, 33, 20, 7, 44, 11]
for(i = 0 ; i<=numbers.length;i++){
    if(numbers[i]>10){
        console.log(numbers[i])
    }
}



const secret = 17

let userNum = prompt("enter any number :")

while(userNum !==secret) {
    console.log("try again")
}
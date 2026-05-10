// დავალება N 1
let numbers = []
for (let i = 10 ; i>=0 ;i--) {
    numbers.push(i)
}
console.log(numbers)
//დავალება N 2
let numbers1=[]
for(let k = 0 ; k<=20 ; k+=2) {
    numbers1.push(k)
}
console.log(numbers1)

//დავალება N 3

let fruits = ['apple', 'peach', 'grape', 'banana']

for (i= 0;i<=fruits.length;i++){
    console.log(fruits[i])
}

//დავალება N 4

let result= 0
for(i=0 ; i<=50;i++){
    result= result+i
}
console.log(result)

//დავალება N 5

let colors = [];

let favoriteColors = ["black", "green", "blue"];

for (let i = 0; i < favoriteColors.length; i++) {
    colors.push(favoriteColors[i]);
}

console.log(colors);

//დავალება N 6

let numbers2=[1, 2, 3, 4, 5]

let removedNumber = numbers2.pop()
console.log(removedNumber)


const name={
    user : "Giorgi",
    age : 18,
}

for (i in name) {
    console.log(name[i])
}
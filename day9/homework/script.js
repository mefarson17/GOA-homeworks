/*1)შექმენი სია სადაც შეინახავთ ნებისმიერ მონაცემთა ტიპის ელემენტს, შენი დავალებაა ამოიღო სიიდან 
ერთი რანმომული ელემენტი და გამოიტანო კონსოლში, მინიშნება: Math.random()
*/
console.log("davaleba 1")
let list = ['giorgi',1,2,4.5,true,false,'luka']

let randomIndex = Math.floor(Math.random() * list.length)

let randomItem = list[randomIndex]

console.log(randomItem)


console.log("davaleba 2")

/* დავალების შინაარსი არის შემდეგ ნაირი: უნდა შევამოწმოთ რენდომულად არჩეული რიცხვი ლუწი არის თუ კენტი 
*/
let randomNumber = Math.floor(Math.random()*100) + 1

function check (randomNumber) {
    if (randomNumber % 2 === 0 ){
        return "even"
    }
    else {
        return "odd"
    }
}

console.log(check(randomNumber) )
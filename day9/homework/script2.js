// დავალება N 2

let myAge = 18 ; 
const birthYear = 2007 ;

console.log(myAge)
console.log(birthYear)


myAge = 20 
// birthYear = 2006

console.log(myAge)
console.log(birthYear)

// დავალება N 3

let balance = 100 ;
console.log(`your balace is: ${balance} GEL. `)
// ჩარიცხვა 
balance += 50 ;
console.log(`You have been credited with 50 GEL and your balace is: ${balance} GEL. `)
// მაღაზია
balance -= 30 ;
console.log(`You have spent 30 GEL and your balace is : ${balance} GEL. `)
balance *= 2;
console.log(`You get bonus  and your balace is: ${balance} GEL. `)


// დავალება N 4

let likes = 15;
console.log(`current likes ${likes}`)
// ვიღაცამ მოიწონა 
likes ++ ;
console.log(`someone liked your post : ${likes}`)
// ვიღაცამ  ამოშალა მოიწონება
likes -- 
console.log(`someone disliked your post : ${likes}`)

// დავალება N 5

let firstName = "Giorgi" ; 
let lastName = "Meparishvili" ; 
let city = "Kutaisi"

let greeting1 = "გამარჯობა, მე ვარ " + firstName +" "+ lastName + " და ვცხოვრობ ქალაქ " + city + "-ში.";
console.log(greeting1)

let greeting2 = `გამარჯობა, მე ვარ ${firstName} ${lastName} და ვცხოვრობ ქალაქ ${city}-ში."` ; 

console.log(greeting2)

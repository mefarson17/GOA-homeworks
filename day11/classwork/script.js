/*arrow funtcion და regular function განსხვავდებიან რამდენიმე ნიშნით რომელთაგან ერთ ერთია syntax
arrow funtcion ეს გაცილებით მოკლე და მარტივად გამოსაყენებელია მისი გამოყენება კოდს უფრო მიმზიოდველს
და მარტივად აღსაქმელს ხდის. ასევე arrow ფუნქციაში შეგვიძლია არ გამოვიყენოთ return და დავწეროთ ერთ ხაზში */

// number 1
const add = number => number + number ;

console.log(add(5))

//number 2
const square = num => num**2;

console.log(square(5))

//number 3
const  halfPrice = price => price / 2 ;

console.log(halfPrice(5))

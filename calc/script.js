const monitor = document.getElementById("monitor"); //00 is yuti
const mainCalc = document.getElementById("mainbuttons");//qvemot yvela
const result = document.querySelector("h1");//00
const del = document.getElementById("DEl");//delete
const C = document.getElementById("Clear");//clear
const percent = document.getElementById("percent");//%
const divide = document.getElementById("divide");// /
const x = document.getElementById("X");// *
const minus = document.getElementById("minus");// - 
const plus = document.getElementById("plus");// +
const equals = document.getElementById("equals");// =
const seven = document.getElementById("seven");//7
const eight = document.getElementById("eight");//8
const nine = document.getElementById("nine");//9
const four = document.getElementById("four");//4
const five = document.getElementById("five");//5
const six = document.getElementById("six");//6
const one = document.getElementById("one");//1
const two = document.getElementById("two");//2
const three = document.getElementById("three");//3
const change = document.getElementById("change");//-()
const zero = document.getElementById("zero");//0
const flot = document.getElementById("flot");// ,
let showing = [];

equals.addEventListener("click",()=>{
    const total = showing.join("");
    const answer = eval(total);
    showing = [String(answer)];
    update()
})
function update(){
    result.innerHTML = showing.join("") || "00"
    console.log(total)
}
C.addEventListener("click",()=>{
    showing = []
    update()
})
del.addEventListener("click",()=>{
    showing.pop()
    update()
})
plus.addEventListener("click",()=>{
    showing.push("+")
    update()
})
minus.addEventListener("click",()=>{
    showing.push("-")
    update()
})
x.addEventListener("click",()=>{
    showing.push("*")
    update()
})
divide.addEventListener("click",()=>{
    showing.push("/")
    update()
})
one.addEventListener("click",()=>{
    showing.push("1");
    update();
})
two.addEventListener("click",()=>{
    showing.push("2");
    update();
})
three.addEventListener("click",()=>{
    showing.push("3");
    update();
})
four.addEventListener("click",()=>{
    showing.push("4");
    update();
})
five.addEventListener("click",()=>{
    showing.push("5");
    update();
})
six.addEventListener("click",()=>{
    showing.push("6");
    update();
})
seven.addEventListener("click",()=>{
    showing.push("7");
    update();
})
eight.addEventListener("click",()=>{
    showing.push("8");
    update();
})
nine.addEventListener("click",()=>{
    showing.push("9");
    update();
})

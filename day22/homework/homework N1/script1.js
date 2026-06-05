const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const result =document.querySelector("h1")
let total = 0
plus.addEventListener("click",()=>{
    total += 1
    result.innerHTML = total 
})
minus.addEventListener("click",()=>{
    if(total > 0){
    total -= 1
    result.innerHTML = total
    }
})
const box = document.getElementById("blackbox")
const makeGreen = document.getElementById("green")
const makeRed = document.getElementById("red")
const makeBlack = document.getElementById("black")

makeGreen.addEventListener("click" , ()=>{
    box.style.backgroundColor = "green"
})
makeRed.addEventListener("click" , ()=>{
    box.style.backgroundColor = "red"
})
makeBlack.addEventListener("click" , ()=>{
    box.style.backgroundColor = "black"
})
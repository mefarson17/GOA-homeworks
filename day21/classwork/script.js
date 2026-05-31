const p = document.getElementById("hello")
const button = document.getElementById("press")

const change = () => {
    p.innerHTML = "how are you";
    button.innerHTML = "😊";
    p.style.color = "red";
}

button.onclick = change

const box = document.getElementById("box")
const newBtn = document.getElementById("newBtn")

const changeBoxSize = () => {
    box.style.width = "300px";
    box.style.backgroundColor = "green";
}

newBtn.onclick = changeBoxSize;


const p_1 = document.getElementById("num")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
let total = 0

const changeValueMinus = () =>{
    if (total >0){
        total --
    }

    p_1.innerHTML = total
}
minus.onclick =changeValueMinus

const changeValuePlus = () =>{
    total ++
    p_1.innerHTML = total
}

plus.onclick = changeValuePlus
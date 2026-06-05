const dark = document.getElementById("nightMode")
const body = document.getElementById("main")
const buttons = document.getElementsByClassName("btn")
const navi = document.getElementById("nav")
let value = dark.innerHTML

dark.addEventListener("click",()=>{
    if(value =="🌙" ){
        body.style.backgroundColor ="#082866"
        navi.style.backgroundColor = "#969E9E"
        dark.style.backgroundColor ="#969E9E"
        for (let btn of buttons) { 
            btn.style.backgroundColor = "#969E9E"
        }
        value = "☀️"
    }else {
        body.style.backgroundColor = "#284B82"
        navi.style.backgroundColor = "#E0E5E5"
        dark.style.backgroundColor = "#E0E5E5"
        for (let btn of buttons) { 
            btn.style.backgroundColor = "#E0E5E5"
        }
        value="🌙"
    }
})

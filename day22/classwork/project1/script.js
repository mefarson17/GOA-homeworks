// movlena aris nebismieri moqmedeba romelsac asrulebs klienti saitze iqneba es mousit daklikva tu gadatareba xolo movlenis msmeneli aris is funqcia 
//rac unda shesruldes movlenis pasuxad 


const mainCard = document.querySelector("div")
const button = document.querySelector("button")
const text = document.querySelector("p")

mainCard.addEventListener("mouseover",() => {
    mainCard.style.width = "400px",
    mainCard.style.height ="400px"
})

button.addEventListener("click",() => {
    text.style.color = "blue",
    text.innerHTML ="გააკეთეთ საიტი სადაც გექნებათ ერთი div მისი სიგანე უნდა იყოს თავდაპირველად width:200px, height:200 px , როდესაც მაუსის კურსორს მიიტანთ div თან უნდა გაიზარდოს ის როგორც სიგანეში ასევე სიმაღლეში, გამოიყენეთ mouseover მოვლენა"
})
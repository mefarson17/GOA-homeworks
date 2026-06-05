const addBtn = document.getElementById("sub");
const inputText = document.getElementById("task");
const lists = document.querySelectorAll("li");
const buttons = document.querySelectorAll(".circle");
const listText = document.querySelectorAll(".listText");
const del = document.querySelectorAll(".x");
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "") {
      btn.style.backgroundColor = "#d5633f";
      btn.innerHTML = "👌";
      listText[index].style.textDecoration = "line-through";
      listText[index].style.color = "#d3dad8";
    } else {
      btn.style.backgroundColor = "white";
      btn.innerHTML = "";
      listText[index].style.textDecoration = "none";
      listText[index].style.color = "black";
    }
  });
});

del.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    lists[index].innerHTML = "";
  });
});
// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const value = inputText.value.trim();
//   if (!value) return;
//   const ul = document.querySelectorAll("ul");
//   const li = document.querySelectorAll("li");
//   li.innerHTML = `   
//     <button class="circle"></button>
//     <p class="listText">${value}</p>
//     <button class="x">X</button>`;
  
//   ul.appendChild(li)
//   inputText.value =""
//   const newCircle = li.querySelector(".circle")
//   const newText = li.querySelector(".listText")
//   const newDel = li.querySelector(".x")

//   newCircle.addEventListener("click", () => toggleDone(newCircle, newText))
//   newDel.addEventListener("click", () => li.remove())
// });

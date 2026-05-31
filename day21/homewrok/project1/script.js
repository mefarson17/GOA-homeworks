let actionRate = "დეტალურად";
const mainTitle = document.getElementById("main-title");
const action = document.getElementById("action-btn");
const info = document.getElementById("info-text");
const image = document.getElementById("fridge");
const mainBox = document.getElementById("card");
const starter = document.getElementById("starter");

const whenClickedStarter = () => {
  mainBox.style.display = "flex";
  mainBox.style.flexDirection = "column";
  mainBox.style.justifyContent = "center";
  mainBox.style.alignItems = "center";
  starter.style.display = "none";
  mainTitle.style.display = "none";
};

starter.onclick = whenClickedStarter;

const details = () => {
  mainBox.style.width = "2000px";
  mainBox.style.backgroundColor = "#2B2855";
  info.innerHTML =
    "სრული აღწერა: ეს პროდუქტი დამზადებულია უმაღლესი ხარისხის მასალისგან და აქვს 2 წლიანი გარანტია!";
  info.style.color = "white";
  action.innerHTML = "დახურვა";
};
const closing = () => {
  mainBox.style.width = "250px";
  mainBox.style.backgroundColor = "white";
  info.innerHTML = "მოკლე აღწერა: ეს არის სტანდარტული პროდუქტი.";
  info.style.color = "black";
  action.innerHTML = "დეტალურად";
};

action.onclick = () => {
  if (actionRate == "დეტალურად") {
    details();
    actionRate = "დახურვა";
  } else {
    closing();
    actionRate = "დეტალურად";
  }
};

// if (action.innerHTML = "დეტალურად"){
//      action.onclick = details;
// }else if (action.innerHTML = "დახურვა"){
//      action.onclick = closing;
// }

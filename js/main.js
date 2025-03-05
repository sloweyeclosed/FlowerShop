let modal = document.getElementById("modal");
let body = document.getElementById("html");
let rose = document.getElementsByClassName("rose");
let buket = document.getElementsByClassName("buket");
let comp = document.getElementsByClassName("comp");
let buketbtn = document.getElementById("buketbtn");
let rosebtn = document.getElementById("rosebtn");
let compbtn = document.getElementById("compbtn");
let allbtn = document.getElementById("allbtn");

function openmodal() {
  modal.style.display = "flex";
  body.style.overflowY = "hidden";
}
function closemodal() {
  modal.style.display = "none";
  body.style.overflowY = "scroll";
}
function buketonly() {
  for (let i = 0; i < rose.length; i++) {
    rose[i].style.display = "none";
  }
  for (let i = 0; i < comp.length; i++) {
    comp[i].style.display = "none";
  }

  for (let i = 0; i < buket.length; i++) {
    buket[i].style.display = "block";
  }
  buketbtn.style.color = "#ffffff";
  buketbtn.style.backgroundColor = "#bd82df";
  buketbtn.style.border = "none";

  rosebtn.style.background = "transparent";
  rosebtn.style.color = "#212121";
  rosebtn.style.border = "1px solid black";
  compbtn.style.background = "transparent";
  compbtn.style.color = "#212121";
  compbtn.style.border = "1px solid black";
  allbtn.style.background = "transparent";
  allbtn.style.color = "#212121";
  allbtn.style.border = "1px solid black";
}
function roseonly() {
  for (let i = 0; i < buket.length; i++) {
    buket[i].style.display = "none";
  }
  for (let i = 0; i < comp.length; i++) {
    comp[i].style.display = "none";
  }

  for (let i = 0; i < rose.length; i++) {
    rose[i].style.display = "block";
  }
  rosebtn.style.color = "#ffffff";
  rosebtn.style.backgroundColor = "#bd82df";
  rosebtn.style.border = "none";

  buketbtn.style.background = "transparent";
  buketbtn.style.color = "#212121";
  buketbtn.style.border = "1px solid black";
  compbtn.style.background = "transparent";
  compbtn.style.color = "#212121";
  compbtn.style.border = "1px solid black";
  allbtn.style.background = "transparent";
  allbtn.style.color = "#212121";
  allbtn.style.border = "1px solid black";
}
function componly() {
  for (let i = 0; i < buket.length; i++) {
    buket[i].style.display = "none";
  }
  for (let i = 0; i < rose.length; i++) {
    rose[i].style.display = "none";
  }

  for (let i = 0; i < comp.length; i++) {
    comp[i].style.display = "block";
  }
  compbtn.style.color = "#ffffff";
  compbtn.style.backgroundColor = "#bd82df";
  compbtn.style.border = "none";

  buketbtn.style.background = "transparent";
  buketbtn.style.color = "#212121";
  buketbtn.style.border = "1px solid black";
  rosebtn.style.background = "transparent";
  rosebtn.style.color = "#212121";
  rosebtn.style.border = "1px solid black";
  allbtn.style.background = "transparent";
  allbtn.style.color = "#212121";
  allbtn.style.border = "1px solid black";
}
function allshow() {
  for (let i = 0; i < comp.length; i++) {
    comp[i].style.display = "block";
  }
  for (let i = 0; i < rose.length; i++) {
    rose[i].style.display = "block";
  }
  for (let i = 0; i < buket.length; i++) {
    buket[i].style.display = "block";
  }

  allbtn.style.color = "#ffffff";
  allbtn.style.backgroundColor = "#bd82df";
  allbtn.style.border = "none";

  buketbtn.style.background = "transparent";
  buketbtn.style.color = "#212121";
  buketbtn.style.border = "1px solid black";

  rosebtn.style.background = "transparent";
  rosebtn.style.color = "#212121";
  rosebtn.style.border = "1px solid black";

  compbtn.style.background = "transparent";
  compbtn.style.color = "#212121";
  compbtn.style.border = "1px solid black";
}

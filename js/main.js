function openmodal() {
  let modal = document.getElementById("modal");
  let body = document.getElementById("html");
  modal.style.display = "flex";
  body.style.overflowY = "hidden";
}
function closemodal() {
  let modal = document.getElementById("modal");
  let body = document.getElementById("html");
  modal.style.display = "none";
  body.style.overflowY = "scroll";
}

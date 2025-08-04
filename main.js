let burgerBtn = document.querySelector(".burger-button");
let modalCloseBtn = document.querySelector(".modal__close-button");
let modalWindow = document.querySelector(".modal");
burgerBtn.addEventListener("click", () => {
  modalWindow.style.display = "block";
});
modalCloseBtn.addEventListener("click", () => {
  modalWindow.style.display = "none";
});
function widthResizer() {
  let width = window.innerWidth;
  if (width == 1100) {
    modalWindow.style.display = "none";
  }
}
window.addEventListener("resize", widthResizer);

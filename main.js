const showBtnEl = document.getElementById("showBtn");
const closeBtnEl = document.getElementById("closeBtn");

const popupEl = document.getElementById("popup");

showBtnEl.addEventListener("click", () => {
  togglePopup("hide", "show");
});

closeBtnEl.addEventListener("click", () => {
  togglePopup("show", "hide");
});

function togglePopup(removeClassName, addClassName) {
  popupEl.classList.remove(removeClassName);
  popupEl.classList.add(addClassName);
}

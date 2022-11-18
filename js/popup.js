// создание переменной
let btns = document.querySelectorAll("*[data-modal-btn]");
let backgroundForCart = document.querySelector('.backgroundForCart');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let name = btns[i].getAttribute("data-modal-btn");
    // для роботи, коли модальних вікон больше ніж 1
    let modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.classList.toggle("active");
    backgroundForCart.classList.toggle('active');
    let close = modal.querySelector(".close-modal");
    close.addEventListener("click", function (e) {
      modal.classList.remove("active");
      backgroundForCart.classList.remove('active');
    });
  });
}

window.onclick = function (e) {
  if (e.target.hasAttribute("data-modal-window")) {
    let modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove("_active");
    }
  }
};

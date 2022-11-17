$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger, .menu-nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: true,
  speed: 800,
  // бесконечность слайда
  loop: true,
});

/*=============================================================================================================*/
document.querySelector("#elastic").oninput = function () {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll(".card .new-info");
  if (val != "") {
    elasticItems.forEach(function (elem) {
      if (elem.innerText.search(RegExp(val, "gi")) == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    elasticItems.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};
/*=============================================================================================================*/
let sideBartitle = document.querySelector('.sideBar__title');
let checkboxPoll = document.querySelectorAll('.checkbox-poll');
for (let index = 0; index < checkboxPoll.length; index++) {
  const checkboxPol = checkboxPoll[index];
  checkboxPol.addEventListener("change", function (e) {
    checkboxPol.classList.toggle('_active');

    let checkboxActivePol = document.querySelectorAll('.checkbox-poll._active');

    if (checkboxActivePol.length > 0) {
      sideBartitle.classList.add('_chekpol');
      let chekQuantity = sideBartitle.querySelector('.sideBar__title-quantity');
      chekQuantity.innerHTML = chekQuantity.getAttribute('data-text') + '' + checkboxActivePol.length;
    } else {
      sideBartitle.classList.remove('_chekpol');
    }
  }); 
}
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



//Функция теста email
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


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

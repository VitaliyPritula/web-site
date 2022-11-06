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

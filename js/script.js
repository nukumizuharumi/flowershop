document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const navmenu = document.getElementById("navmenu");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    navmenu.classList.toggle("show");
  });
});

window.addEventListener("load", () => {
  AOS.init({
    initClassName: "abc",
  });
});

AOS.init();

$(".top-img").slick({
  autoplay: true ,
  autoplaySpeed:2000,
  infinite:true,
  fade:true,
});

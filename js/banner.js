const btns = document.querySelectorAll(".btn-banner");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content-banner");

var sliderNav = function (manual) {
   btns.forEach((btn) => {
      btn.classList.remove("active");
   });

   slides.forEach((slide) => {
      slide.classList.remove("active");
   });

   contents.forEach((content) => {
      content.classList.remove("active");
   });

   btns[manual].classList.add("active");
   slides[manual].classList.add("active");
   contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
      sliderNav(i);
   });
});
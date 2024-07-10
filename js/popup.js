//PopUp automatico
window.addEventListener("load", function () {
   this.setTimeout(
      function open(event) {
         document.querySelector(".slider-popup").style.display = "block";
      },
      1000
   )
});

//Close
document.querySelector("#close").addEventListener("click", function () {
   document.querySelector(".slider-popup").style.display = "none";
});

//Slider
let slider = document.querySelector('.slider-popup .list-popup');
let items = document.querySelectorAll('.slider-popup .list-popup .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider-popup .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
   active = active + 1 <= lengthItems ? active + 1 : 0;
   reloadSlider();
}
prev.onclick = function () {
   active = active - 1 >= 0 ? active - 1 : lengthItems;
   reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
   slider.style.left = -items[active].offsetLeft + 'px';
   // 
   let last_active_dot = document.querySelector('.slider-popup .dots li.active');
   last_active_dot.classList.remove('active');
   dots[active].classList.add('active');

   clearInterval(refreshInterval);
   refreshInterval = setInterval(() => { next.click() }, 3000);


}

dots.forEach((li, key) => {
   li.addEventListener('click', () => {
      active = key;
      reloadSlider();
   })
})
window.onresize = function (event) {
   reloadSlider();
};


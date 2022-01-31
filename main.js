//========= Header ==========
// Add active class to the current button (highlight it)
var header = document.getElementById("topnav");
var btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
//======= Carousel ===========
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');
const carouselWidth = document.querySelector('.carousel-container').offsetWidth;

let index = 0

next.addEventListener('click',() => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if(track.offsetWidth - ((index+1) * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click',() => {
  index--;
  next.classList.remove('hide');
  if(index == 0){
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})






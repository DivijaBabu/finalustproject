                 
const menu = document.querySelector(".hamburgermenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closemenu");
const menuIcon = document.querySelector(".openmenu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carouselcard");
  if (n > slides.length)
   {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length} 
  if (n==1)
  {
   document.getElementById("carosel").style.display="none";
 }  else{
  document.getElementById("carosel").style.display="block";
 } 
 if(n==6){
  document.getElementById("carosel_1").style.display="none";
 }else{
  document.getElementById("carosel_1").style.display="block";
 }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}



function arrows(direction){
  var container = document.getElementById('tabsscroll');
  scrollCompleted = 0;
  var slideVar = setInterval(function(){
      if(direction >= 1){
          container.scrollLeft += 7;
      } if(direction<0) {
          container.scrollLeft -= 7;
      }
      scrollCompleted += 3;
      if(scrollCompleted >= 30)
      {
          window.clearInterval(slideVar);
      }
  }, 17);
}


function searchshipment() {
let input = document.getElementById('searchbar').value
input=input.toLowerCase();
let x = document.getElementsByClassName('card');

for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="bottomcards";             
    }
}
}

function searchshipmentmobile() {
  let input = document.getElementById('searchmobile').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('card');
  
  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="bottomcards";             
      }
  }
  }



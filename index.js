                 
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







// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("overview-card");
//   if (n > slides.length)
//    {slideIndex = 1}  
//   if (n < 1) {slideIndex = slides.length} 
//   if (n==1)
//   {
//    document.getElementById("carousel").style.display="none";
//  }  else{
//   document.getElementById("carousel").style.display="block";
//  } 
//  if(n==6){
//   document.getElementById("carousel1").style.display="none";
//  }else{
//   document.getElementById("carousel1").style.display="block";
//  }
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "flex";  
// }






// const buttons = document.querySelectorAll("[data-carousel-button]")
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
//         const activeslide = slides.querySelector("[data-active]")
//         let newindex = [...slides.children].indexOf(activeslide) + offset
//         if (newindex < 0)
//             newindex = slides.children.length - 1
//         if (newindex >= slides.children.length)
//             newindex = 0
//         slides.children[newindex].dataset.active = true
//         delete activeslide.dataset.active
//     })
// })

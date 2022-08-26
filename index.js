const overviewcontainer = document.querySelector('.overviewcontainer');
   const scroller = overviewcontainer.querySelector('.scroller');
   const nextBtn = overviewcontainer.querySelector('.btn.next');
   const prevBtn = overviewcontainer.querySelector('.btn.prev');
   const itemWidth = overviewcontainer.querySelector('.overview-card').clientWidth;
 
   nextBtn.addEventListener('click', scrollToNextItem);
   prevBtn.addEventListener('click', scrollToPrevItem);
 
   function scrollToNextItem() {
       scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
   }
   function scrollToPrevItem() {
       scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
   }



   
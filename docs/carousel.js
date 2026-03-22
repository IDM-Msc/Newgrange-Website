const swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  loop: true,

  slidesPerView: 2,  
  spaceBetween: -1100,     

  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: -100,    
    depth: 400,
    modifier: 2,
    slideShadows: false,
  },

  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
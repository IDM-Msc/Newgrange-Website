const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: -120,
  speed: 800,
  grabCursor: true,
  watchSlidesProgress: true,

  effect: "coverflow",
  coverflowEffect: {
    rotate: 8,
    stretch: 0,
    depth: 250,
    modifier: 1.2,
    slideShadows: false
  },

  pagination: {
    el: ".custom-pagination",
    clickable: true
  },

  navigation: {
    nextEl: ".book-carousel .swiper-button-next",
    prevEl: ".book-carousel .swiper-button-prev"
  }
});


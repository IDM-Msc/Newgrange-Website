const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 0,
  speed: 750,
  grabCursor: true,
  watchSlidesProgress: true,
  slideToClickedSlide: false,

  pagination: {
    el: ".custom-pagination",
    clickable: true
  },

  navigation: {
    nextEl: ".book-carousel .swiper-button-next",
    prevEl: ".book-carousel .swiper-button-prev"
  }
});
document.querySelector(".swiper-button-next").onclick = () => swiper.slideNext();
document.querySelector(".swiper-button-prev").onclick = () => swiper.slidePrev();
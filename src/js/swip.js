const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
    autoplay: {
   delay: 5000,
 },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 16
    }
    },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
})

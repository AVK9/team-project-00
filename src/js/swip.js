const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  autoplay: {
  delay: 5000,
 },
    breakpoints: {
        320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
        768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
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

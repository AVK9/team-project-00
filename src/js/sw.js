const swiper = new Swiper('.swiperq', {
  slidesPerView: 3,
  spaceBetween: 32,
  autoplay: {
  delay: 5000,
  },
  loop: true,
  breakpoints: {
      320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      768: {
      slidesPerView: 2,
      spaceBetween: 16
      },
              1280: {
      slidesPerView: 3,
      spaceBetween: 32
    }
    },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
})

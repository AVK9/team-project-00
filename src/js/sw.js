const swiper = new Swiper('.swiperq', {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
  delay: 5000,
  },
  loop: true,
    breakpoints: {
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

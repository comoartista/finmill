function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  const btnRegister = document.querySelector('#modal__btn')

  burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
          menu.classList.add('active')
          burger.classList.add('active')
          body.classList.add('locked')
      } else {
          menu.classList.remove('active')
          burger.classList.remove('active')
          body.classList.remove('locked')
      }
  })

  menu.addEventListener('click', () => {
        if (!event.target.classList.contains('btn') || event.target.id !== 'modal__btn') {
          menu.classList.remove('active');
          burger.classList.remove('active');
          body.classList.remove('locked');
        }
  })
  window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
          menu.classList.remove('active')
          burger.classList.remove('active')
          body.classList.remove('locked')
      }
  })
}
burgerMenu()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },

  768: {
    slidesPerView: 2,
    spaceBetween: 32,
  },

  992: {
    slidesPerView: 3,
    spaceBetween: 32,
  },

},
});

var swiperPrevious = new Swiper(".mySwiper-previous", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },

  768: {
    slidesPerView: 2,
    spaceBetween: 32,
  },

  1200: {
    slidesPerView: 3,
    spaceBetween: 32,
  },
},
});

// Accordion
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion();

// Modal
function modal() {
  const overlay = document.querySelector('.overlay-wrapper');
  const triggerModal = document.querySelectorAll('#modal__btn');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal__close');
  const body = document.body;

  triggerModal.forEach((item) => {
    item.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'block';
      modal.style.opacity = 1;
      overlay.style.display = 'block';
      body.classList.add('locked');
    })
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('locked');
  })

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      overlay.style.display = 'none';
      body.classList.remove('locked')
    }
  })
  }
modal();
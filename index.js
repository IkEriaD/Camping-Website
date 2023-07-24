// =================== SHOW MENU =======================
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');

// ======= MENU SHOW ========
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


// =====MENU HIDDEN =======
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// ============== REMOVE MENU MOBILE ========================

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.querySelector('.nav-menu');
  // When we click on each nav-link, we remove the show-menu class 
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ================ GSAP ANIMATION==================
 gsap.from ('.home-image2', 1.2, {opacity: 0, y: 200, delay: .1})
 gsap.from ('.home-image3', 1.2, {opacity: 0, y: 200, delay: .5})
 gsap.from ('.home-data', 1.2, {opacity: 0, y: -60, delay: .1})
 gsap.from ('.home-bird', 1.2, {opacity: 0, y: -80, delay: 1.1})
 gsap.from ('.home-bird1', 1.2, {opacity: 0, y: 80, delay: 1.2})
 gsap.from ('.home-image1', 1.2, {opacity: 0, y: 200, delay: 1.2})
 gsap.from ('.home-image4', 1.2, {opacity: 0, y: 200, delay: 1.2})
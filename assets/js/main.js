const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// dando click en toggle despliega el menú 1
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// cierra el menú dando click en close 2
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// 5 desaparece el menu
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
// aplicando bucle para recorrer todos los links
//cada vez que hagamos clic en el navegador ejecutar la funcion linkAction
navLink.forEach((item) => item.addEventListener("click", linkAction));

//SWIPER 6
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//7
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});

//Scroll up 8
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Sections active 9
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)
//Scroll reveal 3
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  
});
// 4
sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });

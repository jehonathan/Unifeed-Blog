let header = document.querySelector('.page-header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle('menu-open');
});
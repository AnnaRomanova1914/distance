const menuButton = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu-sidebar");

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
})
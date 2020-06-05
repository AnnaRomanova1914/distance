const
    menuButton = document.querySelector(".mobile-menu"),
    menu = document.querySelector(".menu-sidebar"),
    dotsButton = document.getElementById("dots-button-1"),
    options = document.querySelector(".dots-options");

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})

dotsButton.addEventListener('click', event => {
    const options = event.target.previousElementSibling;
    if (options) {
        options.classList.toggle('active');
    }
})
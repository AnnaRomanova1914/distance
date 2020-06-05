const
    menuButton = document.querySelector(".mobile-menu"),
    menu = document.querySelector(".menu-sidebar"),
    dotsButton = document.getElementById("dots-button-1"),
    shareButton = document.getElementById("share-button-1");

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})

dotsButton.addEventListener('click', event => {
    const options = event.target.previousElementSibling;
    if (options) {
        options.classList.toggle('active');
    }
})

shareButton.addEventListener('click', event => {
    const popover = event.target.closest('.post-button').querySelector(".share-popover");
    if (popover) {
        popover.classList.toggle('active');
    }
})
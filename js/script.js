const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuNav = document.querySelector(".menu-nav-container");
const btnCloseMenu = document.querySelector(".btn-close-menu");

// hamburger menu icon mobile behavior
function openMenu() {
    menuNav.classList.add("is-open");
    hamburgerMenu.setAttribute("aria-expanded", "true");
}

// close hamburger menu icon mobile behavior
function closeMenu() {
    menuNav.classList.remove("is-open");
    hamburgerMenu.setAttribute("aria-expanded", "false");
}

// event listeners
hamburgerMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
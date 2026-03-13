const headerToggle = document.querySelector(".header__toggle");
const menuNav = document.querySelector(".main-nav");
const btnCloseMenu = document.querySelector(".main-nav__close");

// hamburger menu icon mobile behavior
function openMenu() {
    menuNav.classList.add("is-open");
    headerToggle.setAttribute("aria-expanded", "true");
}

// close hamburger menu icon mobile behavior
function closeMenu() {
    menuNav.classList.remove("is-open");
    headerToggle.setAttribute("aria-expanded", "false");
}

// event listeners
headerToggle.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
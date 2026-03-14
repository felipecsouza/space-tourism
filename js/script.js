const headerToggle = document.querySelector(".header__toggle");
const menuNav = document.querySelector(".main-nav");
const btnCloseMenu = document.querySelector(".main-nav__close");
const planetBtns = document.querySelectorAll(".planet-menu__btn");
const planetImage = document.getElementById("planet-image");
const planetName = document.getElementById("planet-name");
const planetResume = document.getElementById("planet-resume");
const planetDistance = document.getElementById("planet-distance");
const planetTime = document.getElementById("planet-time");

async function getDestinationData () {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        return data.destinations;
    } catch (error) {
        console.error("Error trying to catch intergalatic data:", error);
    }
}

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
const headerToggle = document.querySelector('.header__toggle');
const menuNav = document.querySelector('.main-nav');
const btnCloseMenu = document.querySelector('.main-nav__close');
const planetBtns = document.querySelectorAll('.planet-menu__btn');
const planetImage = document.getElementById('planet-image');
const planetName = document.getElementById('planet-name');
const planetResume = document.getElementById('planet-resume');
const planetDistance = document.getElementById('planet-distance');
const planetTime = document.getElementById('planet-time');
const crewBtns = document.querySelectorAll('.dot-menu__btn');
const crewRole = document.getElementById('crew-role');
const crewName = document.getElementById('crew-name');
const crewBio = document.getElementById('crew-bio');
const crewImg = document.getElementById('crew-img');

async function getDestinationData () {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data.destinations;
    } catch (error) {
        console.error('Error trying to catch intergalatic data:', error);
    }
}

async function getCrewData () {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data.crew;
    } catch (error) {
        console.error('Error trying to catch crew data:', error);
    }
}

// hamburger menu icon mobile behavior
function openMenu() {
    menuNav.classList.add('is-open');
    headerToggle.setAttribute('aria-expanded', 'true');
}

// close hamburger menu icon mobile behavior
function closeMenu() {
    menuNav.classList.remove('is-open');
    headerToggle.setAttribute('aria-expanded', 'false');
}

// event listeners
headerToggle.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

// destinations menu behavior
planetBtns.forEach(function(btn) {
    btn.addEventListener('click', async function(event) {
        planetBtns.forEach(function(b) {
            b.classList.remove('is-active');
        });
      
        btn.classList.add('is-active');

        const selectedPlanet = btn.dataset.planet;
        const destinationsArrays = await getDestinationData();
        
        const planetData = destinationsArrays.find(function(dest) {
            return dest.name.toLowerCase() === selectedPlanet.toLowerCase();
        });
        
        if (planetData) {

            const elementsToAnimate = [planetImage, planetName, planetResume, planetDistance, planetTime];

            elementsToAnimate.forEach(function(el) {
                el.classList.remove('fade-in');
                void el.offsetWidth;
            });

            planetName.textContent = planetData.name;
            planetImage.src = planetData.images.webp;
            planetImage.alt = `Picture of ${planetData.name}.`;
            planetResume.textContent = planetData.description;
            planetDistance.textContent = planetData.distance;
            planetTime.textContent = planetData.travel;

            elementsToAnimate.forEach(function(el, index) {
                el.style.animationDelay = `${(index * 0.12)}s`;
                el.classList.add('fade-in');
            });
        };
    });
});

// crew menu behavior
crewBtns.forEach(function(btn) {
    btn.addEventListener('click', async function(event) {
        crewBtns.forEach(function(b) {
            b.classList.remove('is-active');
        });
      
        btn.classList.add('is-active');

        const selectedCrew = btn.dataset.crew;
        const crewArrays = await getCrewData();

        const crewData = crewArrays.find(function(crw) {
            return crw.role.toLowerCase() === selectedCrew.toLowerCase();
        });

        if (crewData) {

            const elementsToAnimate = [crewRole, crewName, crewBio, crewImg];

            elementsToAnimate.forEach(function(el) {
                el.classList.remove('fade-in');
                void el.offsetWidth;
            })

            crewRole.textContent = crewData.role;
            crewName.textContent = crewData.name;
            crewBio.textContent = crewData.bio;
            crewImg.src = crewData.images.webp;
            crewImg.alt = `Picture of ${crewData.name}`;

            elementsToAnimate.forEach(function(el, index) {
                el.style.animationDelay = `${(index * 0.12)}s`;
                el.classList.add('fade-in');
            })
        };
    });
});
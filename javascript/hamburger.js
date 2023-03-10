export function hamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-item");
    const viewportWidth = window.innerWidth;
    const navFlag = document.querySelector('.projectCarousel');

    if (viewportWidth < 576) {
        navFlag.href = '#carousel';
    } else {
        navFlag.href = '#projects';
    }

    window.addEventListener('resize', () => {
        const updatedViewportWidth = window.innerWidth;
        if (updatedViewportWidth < 576) {
            navFlag.href = '#carousel';
        } else {
            navFlag.href = '#projects';
        }
    });

    const mobileMenu = function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const closeMenu = function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    
        hamburger.addEventListener("click", mobileMenu);

        // navLink.forEach(n => n.addEventListener("click", closeMenu));

 };
// export default hamburgerMenu;






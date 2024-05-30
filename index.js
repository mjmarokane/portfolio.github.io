const navbar = document.getElementById("navbar");
const nav = document.getElementById("navbar-links");
const brandName = document.getElementById("brand-name");
const navbarLinks = document.getElementsByClassName("navbar-link");
const menuToggle = document.getElementById("menu");

/*
 *Entry point of the script
 */
const initialize = function() {
    // Start scroll animation
    window.requestAnimationFrame(animateNav);
};

/*
 * Sets the background color of the nav bar depending of the scroll Y value
 */
const animateNav = function() {
    const visibility = nav.getAttribute("data-visible");

    // If the user is at the top of the screen, gradually change background to a more solid color
    if (scrollY < 450) {
        navbar.style = "background-color: rgba(255, 255, 255, " + (scrollY / 450) * 80 + "%);" +
            "backdrop-filter: blur(" + (scrollY / 450) * 0.2 + "rem);";

        let whiteToBlack = 255 - (scrollY / 450) * 255;
        brandName.style = menuToggle.style = "color: rgb(" + whiteToBlack + "," + whiteToBlack + "," + whiteToBlack + ");";
        Array.from(navbarLinks).forEach((navbarLink) => {
            navbarLink.style = "color: rgb(" + whiteToBlack + "," + whiteToBlack + "," + whiteToBlack + ");";
        });
        whiteToBlack = (scrollY / 450) * 255;
        if (visibility == "true") {
            nav.style = "background-color: rgba(" + whiteToBlack + "," + whiteToBlack + "," + whiteToBlack + ", 80%);";
        }
    }
    else { // otherwise make the background fully solid
        navbar.style = "background-color: rgba(255, 255, 255, 80%);" +
            "backdrop-filter: blur(0.2rem);";
        brandName.style = "color: black;";
        Array.from(navbarLinks).forEach((navbarLink) => {
            navbarLink.style = "color: black";
        });
        if (visibility == "true") {
            nav.style = "background-color: rgba(255, 255, 255, 80%";
        }
    }
    // continue animation of nav background based on scrollY
    window.requestAnimationFrame(animateNav);
}

/*
 * On click event handler for the menu toggle
 */
menuToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility == "false") {
        nav.setAttribute("data-visible", "true");
        if (scrollY < 450) {
            const whiteToBlack = (scrollY / 450) * 255;
            nav.style = "background-color: rgba(" + whiteToBlack + "," + whiteToBlack + "," + whiteToBlack + ", 80%);";
        }
        else {
            nav.style = "background-color: rgba(255, 255, 255, 80%";
        }
    }
    else {
        nav.setAttribute("data-visible", "false");
    }
});

// call the entry point of the script
initialize();
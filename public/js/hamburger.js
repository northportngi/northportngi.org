const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const headerLogo = document.querySelector(".header__logo");
const navigationLinks = document.querySelectorAll(".navigation__link, .priority-links__link");

function toggleNavigation() {
    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("navigation--visible");
    document.documentElement.classList.toggle("body--no-scroll");
}

function hideNavigation() {
    hamburger.classList.remove("is-active");
    navigation.classList.remove("navigation--visible");
    document.documentElement.classList.remove("body--no-scroll");
}

function showNavigation() {
    hamburger.classList.add("is-active");
    navigation.classList.add("navigation--visible");
    document.documentElement.classList.add("body--no-scroll");
}

hamburger.addEventListener("click", toggleNavigation);
headerLogo.addEventListener("click", hideNavigation);

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        showNavigation();
    } else {
        hideNavigation();
    }
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", hideNavigation);
});
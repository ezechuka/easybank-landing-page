const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.querySelectorAll(".overlay");
const menuIcon = document.getElementById("menu-icon");
let isOpen = false;

menuBtn.addEventListener("click", () => {
    if (!isOpen) {
        menuIcon.src = "/images/icon-close.svg";
        isOpen = true;
    } else {
        menuIcon.src = "/images/icon-hamburger.svg";
        isOpen = false;
    }
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
    overlay.forEach(element => element.classList.toggle("hidden"));
})
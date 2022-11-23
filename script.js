let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobile-nav");
let shadow = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open-nav")
    shadow.classList.toggle("mobile-nav-shadow")
})

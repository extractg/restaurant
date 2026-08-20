const backToTop = document.getElementById("backToTop");
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const body = document.body;
const html = document.documentElement;


if (backToTop) {
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("scroll", function () {
    const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

    if (window.scrollY > window.innerHeight && !isAtBottom) {
        backToTop.classList.add("is-visible");
    } else {
        backToTop.classList.remove("is-visible");
    }
});
}


burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("no-scroll");
    html.classList.toggle("no-scroll");
});
navLinks.forEach((link) =>{
link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("no-scroll");
    html.classList.remove("no-scroll");
})
});
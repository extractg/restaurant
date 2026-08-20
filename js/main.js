const backToTop = document.getElementById("backToTop");
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

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

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
})
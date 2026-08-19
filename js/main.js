const backToTop = document.getElementById("backToTop");
const burger = document.getElementById("burger");


window.addEventListener("scroll", function () {
    if(window.scrollY > window.innerHeight){
    backToTop.classList.add("is-visible");
    }
    else{
        backToTop.classList.remove("is-visible");
    }
});
    backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    });    
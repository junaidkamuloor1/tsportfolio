const main = document.querySelector(".main");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        main.classList.add("scrolled");
    } else {
        main.classList.remove("scrolled");
    }
});

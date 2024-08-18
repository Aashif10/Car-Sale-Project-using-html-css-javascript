let box = document.querySelector(".search-box")
let search = document.querySelector("#search-icon");

search.addEventListener("click", () => {
    box.classList.toggle('active')
    navbar.classList.remove("active");

})

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle('shadow', window.screenY > 0);
})


let navbar = document.querySelector(".navbar")
let menu = document.querySelector("#menu-icon");
menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
        box.classList.remove('active');

})
window.onscroll= () => {
    navbar.classList.remove("active");
        box.classList.remove("active");

    
}

const headerEl = document.querySelector("header");
const glide = new Glide(".glide");
glide.mount();

//折叠按钮
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click",()=>{
    headerEl.classList.toggle("open");
})
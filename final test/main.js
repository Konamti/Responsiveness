const navToggler = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

const menu = document.querySelector(".menu");
const burgerMenu = document.querySelector(".burger-menu");
const menuLinks = document.querySelectorAll(".menu-item__link");
const closeMenuButton = document.querySelector(".burger-menu__close");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  burgerMenu.classList.remove("active");
});

menuLinks.forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("active");
    burgerMenu.classList.toggle("active");
  })
);

closeMenuButton.addEventListener("click", () => {
  menu.classList.remove("active");
  burgerMenu.classList.toggle("active");
});

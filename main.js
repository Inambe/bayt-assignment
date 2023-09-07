// init the icons
feather.replace();

const mainMenuBtn = document.querySelector("#main-menu-btn");
const mainMenu = document.querySelector("#main-menu");
const toTopBtn = document.querySelector("#to-top");

mainMenuBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("main-menu__open");
});

toTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// init the icons
feather.replace();

const mainMenuBtn = document.querySelector("#main-menu-btn");
const mainMenu = document.querySelector("#main-menu");

mainMenuBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("main-menu__open");
});

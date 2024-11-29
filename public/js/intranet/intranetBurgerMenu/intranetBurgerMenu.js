const burgerMenuIcon = document.querySelector(".burgerMenu");
const xMenuButton = document.querySelector(".xButtonMenu");
const navMenu = document.querySelector(".navContainer ul");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function updateMenuDisplay() {
  navMenu.classList.remove("show", "hide");
  navMenu.style.display = "none";
  main.style.display = "";
  footer.style.display = "";
  burgerMenuIcon.style.display = "block";
  xMenuButton.style.display = "none";
  burgerMenuIcon.style.opacity = "1";
}

updateMenuDisplay();

burgerMenuIcon.addEventListener("click", () => {
  if (navMenu.classList.contains("hide") || navMenu.style.display === "none") {
    navMenu.classList.remove("hide");
    navMenu.classList.add("show");
    navMenu.style.display = "block";
    burgerMenuIcon.style.display = "none";
    xMenuButton.style.display = "block";
    main.style.display = "none";
    footer.style.display = "none";
  }
});

xMenuButton.addEventListener("click", () => {
  navMenu.classList.remove("show");
  navMenu.classList.add("hide");
  navMenu.style.display = "none";
  burgerMenuIcon.style.display = "block";
  xMenuButton.style.display = "none";
  main.style.display = "";
  footer.style.display = "";
});

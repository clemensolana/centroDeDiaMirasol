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
    main.style.display = "none";
    footer.style.display = "none";
    navMenu.style.display = "block";
    burgerMenuIcon.style.opacity = "0";
    setTimeout(() => {
      burgerMenuIcon.style.display = "none";
      xMenuButton.style.display = "block";
      xMenuButton.style.opacity = "1";
    }, 300);
  }
});

xMenuButton.addEventListener("click", () => {
  navMenu.classList.remove("show");
  navMenu.classList.add("hide");
  setTimeout(() => {
    navMenu.style.display = "none";
    main.style.display = "";
    footer.style.display = "";
    main.classList.add("fade-in");
    setTimeout(() => {
      main.classList.remove("fade-in");
    }, 300);
    xMenuButton.style.opacity = "0";
    setTimeout(() => {
      xMenuButton.style.display = "none";
      burgerMenuIcon.style.display = "block";
      burgerMenuIcon.style.opacity = "1";
    }, 300);
  }, 300);
});

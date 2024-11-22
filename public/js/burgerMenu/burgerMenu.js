const burgerMenuIcon = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".navContainer ul");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function updateMenuDisplay() {
  if (window.innerWidth >= 768) {
    navMenu.style.display = "";
    main.style.display = "";
    footer.style.display = "";
  } else {
    if (navMenu.style.display !== "block") {
      navMenu.style.display = "none";
    }
  }
}
updateMenuDisplay();

burgerMenuIcon.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    if (navMenu.style.display === "none") {
      navMenu.style.display = "block";
      main.style.display = "none";
      footer.style.display = "none";
    } else {
      navMenu.style.display = "none";
      main.style.display = "";
      footer.style.display = "";
    }
  }
});

window.addEventListener("resize", updateMenuDisplay);

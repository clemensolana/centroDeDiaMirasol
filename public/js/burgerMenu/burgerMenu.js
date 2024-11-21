const burgerMenuIcon = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".navContainer ul");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

navMenu.style.display = "none";

burgerMenuIcon.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
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

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.style.display = "flex";
    main.style.display = "flex";
    footer.style.display = "flex";
  }
});

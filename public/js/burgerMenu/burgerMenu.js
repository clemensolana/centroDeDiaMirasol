const burgerMenuIcon = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".navContainer ul");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function updateMenuDisplay() {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove("show", "hide");
    navMenu.style.display = "";
    main.style.display = "";
    footer.style.display = "";
  } else {
    if (!navMenu.classList.contains("show")) {
      navMenu.style.display = "none";
    }
  }
}
updateMenuDisplay();

burgerMenuIcon.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    if (
      navMenu.classList.contains("hide") ||
      navMenu.style.display === "none"
    ) {
      navMenu.classList.remove("hide");
      navMenu.classList.add("show");
      navMenu.style.display = "block";
      main.style.display = "none";
      footer.style.display = "none";
    } else if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      navMenu.classList.add("hide");
      setTimeout(() => {
        navMenu.style.display = "none";
        main.style.display = "";
        footer.style.display = "";
      }, 300);
    }
  }
});

window.addEventListener("resize", updateMenuDisplay);

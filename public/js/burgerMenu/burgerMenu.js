const burgerMenuIcon = document.querySelector(".burgerMenu");
const xMenuButton = document.querySelector(".xButtonMenu");
const navMenu = document.querySelector(".navContainer ul");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function updateMenuDisplay() {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove("show", "hide");
    navMenu.style.display = "";
    main.style.display = "";
    footer.style.display = "";
    burgerMenuIcon.style.display = "none";
    xMenuButton.style.display = "none";
    burgerMenuIcon.style.opacity = "1";
  } else {
    if (!navMenu.classList.contains("show")) {
      navMenu.style.display = "none";
      burgerMenuIcon.style.display = "block";
      burgerMenuIcon.style.opacity = "1";
      xMenuButton.style.display = "none";
    } else {
      burgerMenuIcon.style.display = "none";
      xMenuButton.style.display = "block";
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
      burgerMenuIcon.style.opacity = "0";
      setTimeout(() => {
        burgerMenuIcon.style.display = "none";
        xMenuButton.style.display = "block";
        xMenuButton.style.opacity = "1";
      }, 300);
    }
  }
});

xMenuButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    if (navMenu.classList.contains("show")) {
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
    }
  }
});

window.addEventListener("resize", updateMenuDisplay);

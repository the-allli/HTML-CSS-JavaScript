// Bottom Header
const btnHome = document.getElementById("btn-home");
const btnParfum = document.getElementById("btn-parfum");
const mobileMenu = document.getElementById("mobile-menu");
const homeSections = document.querySelectorAll(".drop-down-ul-col.home");
const parfumSections = document.querySelectorAll(".drop-down-ul-col.parfum");
const dropdownMenu = document.querySelector(".drop-down-menu");

btnHome.addEventListener("click", () => {
  btnHome.classList.add("active");
  btnParfum.classList.remove("active");

  dropdownMenu.classList.remove("parfum-active");

  homeSections.forEach((el) => el.classList.remove("hidden"));
  parfumSections.forEach((el) => el.classList.add("hidden"));
});

btnParfum.addEventListener("click", () => {
  btnParfum.classList.add("active");
  btnHome.classList.remove("active");

  dropdownMenu.classList.add("parfum-active");

  homeSections.forEach((el) => el.classList.add("hidden"));
  parfumSections.forEach((el) => el.classList.remove("hidden"));
});

// Menu icon
const menuIcon = document.getElementById("menuIcon");
const body = document.body;
const mediaQuery = window.matchMedia("(min-width: 1100px)");

function handleMediaQuery(e) {
  if (e.matches) {
    mobileMenu.style.display = "none";
    mobileMenu.style.overflow = "auto";
    body.style.overflow = "auto";
  } else {
    mobileMenu.style.display = "";
    body.style.overflow = "";
  }
}

handleMediaQuery(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQuery);

menuIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
  body.classList.toggle("no-scroll");
});

// Press
document.addEventListener("DOMContentLoaded", () => {
  const logoButtons = document.querySelectorAll(".press-logo");
  const contentContainers = document.querySelectorAll(
    ".press-publication-container"
  );
  let activeIndex = -1;
  function showContent(index) {
    if (activeIndex === index) return;

    if (activeIndex !== -1) {
      contentContainers[activeIndex].classList.remove("active");
      contentContainers[activeIndex].setAttribute("aria-hidden", "true");
      contentContainers[activeIndex].style.display = "none";
      logoButtons[activeIndex].classList.remove("active");
    }
    activeIndex = index;
    const activeContent = document.getElementById(`content-${activeIndex}`);
    if (activeContent) {
      activeContent.style.display = "flex";
      setTimeout(() => {
        activeContent.classList.add("active");
        activeContent.setAttribute("aria-hidden", "false");
      }, 10);
    }
    logoButtons[activeIndex].classList.add("active");
  }
  logoButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      const index = parseInt(button.dataset.index);
      showContent(index);
    });
  });
  showContent(0);
});

// Footer
document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".column:not(.logo_form)");

  columns.forEach((column) => {
    const h3 = column.querySelector("h3");
    if (h3) {
      h3.addEventListener("click", function () {
        column.classList.toggle("active");
      });
    }
  });
});

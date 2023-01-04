"use strict";

/*=================================================
    HAMBURGER MENU
===================================================*/
function hamburgerMenu() {
  let navBar = document.querySelector("#nav");
  let hamburgerBtn = document.querySelector(".hamburger");

  if (
    !(
      navBar.classList.contains("active") &&
      hamburgerBtn.classList.contains("active")
    )
  ) {
    navBar.classList.add("active");
    hamburgerBtn.classList.add("active");
  } else {
    navBar.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
}

/*=================================================
    SHOW THE MENU BAR
===================================================*/

const logo = document.getElementsByClassName("logo");
const hamburger = document.getElementsByClassName("hamburger");

window.addEventListener("scroll", () => {
  const currentY = window.pageYOffset;
  if (currentY > 520) {
    setTimeout(function () {
      logo[0].style.display = "block";
      hamburger[0].style.display = "block";
    }, 1);
  } else {
    setTimeout(function () {
      logo[0].style.display = "none";
      hamburger[0].style.display = "none";
    }, 1);
  }
});

/*=================================================
    RESCALING MAIN VISUAL IMAGES
===================================================*/

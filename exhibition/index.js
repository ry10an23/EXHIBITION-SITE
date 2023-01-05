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

window.addEventListener("scroll", () => {
  if (window.innerWidth > 900) {
    const currentY = window.pageYOffset;
    let imgs = document.getElementsByClassName("mainVisImg");
    for (const img of imgs) {
      img.style.width = 100 / 3 + currentY / 10 + "%";
    }
  } else {
    const currentY = window.pageYOffset;
    let imgs = document.getElementsByClassName("mainVisImg");
    for (const img of imgs) {
      img.style.width = 100 - currentY / 10 + "%";
    }
  }
});

/*=================================================
    FADE IN GALLERY IMAGES
===================================================*/
let galleryImgs = document.querySelectorAll(".pic");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY; // Get the scroll area
  let windowHeight = window.innerHeight; //Get the height of window without bookmark bar
  for (let galleryImg of galleryImgs) {
    let targetPos = galleryImg.getBoundingClientRect().top + scroll;
    if (scroll > targetPos - windowHeight) {
      if (galleryImg.classList.contains("fadein")) {
        galleryImg.classList.add("show");
      }
    }
  }
});

/*=================================================
    SHOW THE BACK GROUND IMAGE
===================================================*/

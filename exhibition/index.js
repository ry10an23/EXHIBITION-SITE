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
    SCROLLING EVENT
===================================================*/
window.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  mv_scale(scroll);

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
    FADE IN GALLERY IMAGES
===================================================*/
  let galleryImgs = document.querySelectorAll(".pic");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY; // Get the scroll area
    let windowHeight = window.innerHeight; //Get the height of window without bookmark bar
    for (let galleryImg of galleryImgs) {
      let targetPosImg = galleryImg.getBoundingClientRect().top + scroll;
      if (scroll > targetPosImg - windowHeight) {
        if (galleryImg.classList.contains("fadein")) {
          galleryImg.classList.add("show");
        }
      }
    }
  });

  /*=================================================
    SHOW SIDE BUTTON
===================================================*/
  let gallery = document.getElementById("gallery");
  let gallery_rect = gallery.getBoundingClientRect();
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let gallery_position = gallery_rect.top + scrollTop;

  let access = document.getElementById("access");
  let access_rect = access.getBoundingClientRect();
  let access_position = access_rect.top + scrollTop;

  let sideBtn = document.getElementById("side_btn");

  if (window.innerWidth > 900) {
    if (scroll > gallery_position) {
      if (scroll < access_position) {
        // console.log("hello world");
        sideBtn.setAttribute("id", "side_btn_show");
      } else {
        sideBtn.setAttribute("id", "side_btn");
      }
    }
  } else {
    sideBtn.setAttribute("id", "side_btn");
  }
});

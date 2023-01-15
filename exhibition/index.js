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
    FADE-IN (Title & Info & Gallery)
===================================================*/
let fadeInEles = document.querySelectorAll(".fadein");

fadeInEles.forEach(function (fadeIn) {
  let windowHeight = window.innerHeight;

  window.addEventListener("scroll", () => {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    if (scroll > offset + windowHeight) {
      fadeIn.classList.add("show");
    }
  });
});

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
    LOADING AND RESIZING EVENT
===================================================*/
  window.addEventListener("resize", function (e) {
    let scroll = window.pageYOffset;
    mv_scale(scroll);
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
        sideBtn.style.transform = "rotate(-90deg) translateY(0px)";
      } else {
        sideBtn.style.transform = "rotate(-90deg) translateY(60px)";
      }
    } else {
      sideBtn.style.transform = "rotate(-90deg) translateY(60px)";
    }
  }

  /*=================================================
    ACCESS BACKGROUND IMAGE
===================================================*/

  let contact = document.getElementById("contact");
  let contact_rect = contact.getBoundingClientRect();
  let contact_position = contact_rect.top + scrollTop;

  // if (scroll > access_position) {
  //   if (scroll < contact_position) {
  //     const ms = 500;
  //     let access_bg = document.getElementsByClassName("bg");
  //     access_bg[0].style.transition = "opacity " + ms + "ms";
  //     setTimeout(function () {
  //       access_bg[0].style.opacity = 1;
  //     }, 1);
  //   } else {
  //     const ms = 500;
  //     let access_bg = document.getElementsByClassName("bg");
  //     access_bg[0].style.transition = "opacity " + ms + "ms";
  //     setTimeout(function () {
  //       access_bg[0].style.opacity = 0;
  //     }, 1);
  //     setTimeout(function () {
  //       access_bg[0].style.display = "none";
  //     }, ms + 10);
  //   }
  // } else {
  //   const ms = 500;
  //   let access_bg = document.getElementsByClassName("bg");
  //   access_bg[0].style.transition = "opacity " + ms + "ms";
  //   setTimeout(function () {
  //     access_bg[0].style.opacity = 0;
  //   }, 1);
  //   setTimeout(function () {
  //     access_bg[0].style.display = "none";
  //   }, ms + 10);
  // }
});

/*=================================================
    RESCALING MAIN VISUAL SCALING (COMMON PROCESS)
===================================================*/
const mv_scale = () => {
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
};

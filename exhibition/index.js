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

"use strict";

const navbarBtn = document.querySelector(".navbar__items");

navbarBtn.addEventListener("click", (event) => {
  const mark = event.target.textContent.toLowerCase();
  const findTarget = document.querySelector(`.${mark}`);
  findTarget.scrollIntoView({ behavior: "smooth", block: "center" });
});

const navbar = document.querySelector("#navbar");
const about = document.querySelector(".about");
const aboutRect = about.getBoundingClientRect().top - 4;

document.addEventListener("scroll", () => {
  if (window.scrollY > aboutRect) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});

const skillList = document.querySelector(".skills__list");

skillList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    const span = e.target.parentNode.parentNode.querySelector("span");
    const skillValue = e.target.parentNode.parentNode.querySelector(
      ".skill__value"
    );
    skillValue.style.width = span.textContent;
    span.classList.add("visible");
  }
});

// const skills = document.querySelector(".skills");
// const skillsRect = skills.getBoundingClientRect();

// function onIncreaseValue() {}

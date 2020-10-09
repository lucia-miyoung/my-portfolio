"use strict";

const navbarBtn = document.querySelector(".navbar__items");
const navClick = document.querySelector(".navbar__items");
const skills = document.querySelector(".skills");

navbarBtn.addEventListener("click", (event) => {
  const mark = event.target.textContent.toLowerCase();
  const findTarget = document.querySelector(`.${mark}`);
  findTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  navClick.classList.remove("open");
});

const navbar = document.querySelector("#navbar");
const about = document.querySelector(".about");
const aboutRect = about.getBoundingClientRect().top - 4;
const skillSection = document.querySelector(".skills").getBoundingClientRect()
  .top;

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
    skillValue.style.transition = "all 600ms ease-in";
    span.style.transition = "all 600ms ease-in";
    span.classList.add("visible");
  }
});

navClick.addEventListener("click", (e) => {
  const skillClick = e.target.textContent;
  if (skillClick === "SKILLS") {
    appearValue();
  }
});

function appearValue() {
  const spans = skillList.querySelectorAll("span");
  const skillValues = document.querySelectorAll(".skill__value");
  skillValues.forEach((value, index) => {
    skillValues[index].style.width = spans[index].textContent;
    spans[index].classList.add("visible");
  });
}

/* toggle-button */

const navToggle = document.querySelector(".navbar__toggle");
/* navClick -> ul */

navToggle.addEventListener("click", () => {
  navClick.classList.toggle("open");
});

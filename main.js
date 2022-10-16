"use strict";

import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";

// PAGE PROGRESS AT TOP
scroll(animate(".progress", { scaleY: [0, 1] }));

// Scroll to top feature
const scrollToTopBtn = document.querySelector(".scrollToTop");
scrollToTopBtn.addEventListener("click", scrollToTop);

window.onscroll = function () {
  checkScrollPosition();
};

function checkScrollPosition() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "hidden";
  }
}

function scrollToTop() {
  scrollTo(top);
  console.log("scrolling");
  scrollToTopBtn.style.display = "hidden";
}

/* Paralax Text - klaus inspired*/
document.querySelectorAll(".parallax-scroll-section .parallax-text").forEach((article) => {
  const parralaxText = article.querySelector("p");
  scroll(animate(parralaxText, { y: ["-10vh", "10vh"] }), {
    target: parralaxText,
  });
});

let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navLinks");
let hamburgerLines = hamburger.children;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("showNav");
  for (let line of hamburgerLines) {
    line.classList.toggle("animateLines");
  }
  if (
    hamburgerLines[0].style.backgroundColor == "" ||
    hamburgerLines[0].style.backgroundColor == "rgb(90, 90, 90)"
  ) {
    for (let line of hamburgerLines) {
      line.style.backgroundColor = "white";
    }
  } else {
    for (let line of hamburgerLines) {
      line.style.backgroundColor = "rgb(90, 90, 90)";
    }
  }
});

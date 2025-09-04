let navbarHeight = document.querySelector("nav").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navbarHeight - 1 + "px"
);

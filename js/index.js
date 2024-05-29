// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 4000,
//     animateOut: "animate__fadeOut",
//     animateIn: "animate__fadeOIn",
//   });
// });

//drop-down  add atr to open in hover only in lg screens
function toggleDropdownAttribute() {
  var dropdownButton = document.getElementById("dropdown");
  if (window.innerWidth <= 992) {
    dropdownButton.setAttribute("data-bs-toggle", "dropdown");
  } else {
    dropdownButton.removeAttribute("data-bs-toggle");
  }
}
toggleDropdownAttribute();
window.addEventListener("resize", updateDataToggle);
const elements = document.querySelectorAll(".dropdown-btn");
function updateDataToggle() {
  const windowWidth = window.innerWidth;

  elements.forEach((element) => {
    if (windowWidth <= 992) {
      element.setAttribute("data-bs-toggle", "dropdown");
    } else {
      element.removeAttribute("data-bs-toggle");
    }
  });
}

updateDataToggle();

window.addEventListener("resize", updateDataToggle);

// to make dropdown open in left in lg screens only
function toggleMenuClasses() {
  var menuElements = document.querySelectorAll(".menu");

  if (window.innerWidth < 992) {
    menuElements.forEach(function (element) {
      element.classList.remove("dropend");
      element.classList.add("dropdown");
    });
  } else {
    menuElements.forEach(function (element) {
      element.classList.remove("dropdown");
      element.classList.add("dropend");
    });
  }
}

window.addEventListener("resize", toggleMenuClasses);

toggleMenuClasses();

// to add bg color to dropdown when hover in left dropdown

const itemHoverElements = document.querySelectorAll(".itemHoverOne");
const dropdownBtn = document.querySelector(".btnHoverOne");
itemHoverElements.forEach((itemHover) => {
  itemHover.addEventListener("mouseover", () => {
    dropdownBtn.style.backgroundColor = "rgb(119, 119, 119, 0.2)";
  });

  itemHover.addEventListener("mouseout", () => {
    dropdownBtn.style.backgroundColor = "#eee";
  });
});

const itemHoverTwo = document.querySelectorAll(".itemHoverTwo");
const dropdownBtnTwo = document.querySelector(".btnHoverTwo");
itemHoverTwo.forEach((itemHover) => {
  itemHover.addEventListener("mouseover", () => {
    dropdownBtnTwo.style.backgroundColor = "rgb(119, 119, 119, 0.2)";
  });

  itemHover.addEventListener("mouseout", () => {
    dropdownBtnTwo.style.backgroundColor = "#eee";
  });
});

const itemHoverThree = document.querySelectorAll(".itemHoverThree");
const dropdownBtnThree = document.querySelector(".btnHoverThree");
itemHoverThree.forEach((itemHover) => {
  itemHover.addEventListener("mouseover", () => {
    dropdownBtnThree.style.backgroundColor = "rgb(119, 119, 119, 0.2)";
  });

  itemHover.addEventListener("mouseout", () => {
    dropdownBtnThree.style.backgroundColor = "#eee";
  });
});

const itemHoverFour = document.querySelectorAll(".itemHoverFour");
const dropdownBtnFour = document.querySelector(".btnHoverFour");
itemHoverFour.forEach((itemHover) => {
  itemHover.addEventListener("mouseover", () => {
    dropdownBtnFour.style.backgroundColor = "rgb(119, 119, 119, 0.2)";
  });

  itemHover.addEventListener("mouseout", () => {
    dropdownBtnFour.style.backgroundColor = "#eee";
  });
});

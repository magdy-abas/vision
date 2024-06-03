$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    items: 1,
    loop: true,
    nav: false, // Hide navigation indicators
    dots: true, // Show custom dots
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true, // Pause autoplay when hovering over the slider
    animateOut: "fadeOut", // Fade out animation
    animateIn: "fadeIn", // Fade in animation
    smartSpeed: 1000, // Smooth transition speed
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
});

$(document).ready(function () {
  $(".slider-1").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $(".user-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

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

// modal in contact us

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("thumbnail");
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.classList.add("modal-open"); // Disable body scroll
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
if (span) {
  span.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Enable body scroll
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Enable body scroll
  }
};

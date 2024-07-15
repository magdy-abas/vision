$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    items: 1,
    loop: true,
    nav: false, // Hide navigation indicators
    dots: true, // Show custom dots
    autoplay: true,
    autoplayTimeout: 2000, // 2 seconds
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

//////////////////////// products filter ////////////////////////////

/* $(document).ready(function () {
  // Cache frequently used elements
  const $filterItems = $(".filter-item input");
  const $filterCards = $(".filter-card[data-parent-category]");
  const $items = $(".item");
  const $filterReset = $(".filter-reset");

  // Function to get query parameters
  function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the category from the query parameter
  const category = getQueryParameter("category");

  if (category) {
    // Check the corresponding checkbox
    const checkbox = $(`#${category}`);
    if (checkbox.length) {
      checkbox.prop("checked", true);
      showChildCategories(checkbox.data("category"));
      checkAndShowParentCategories(checkbox);
    }
  }

  // Hide all subcategories initially
  $filterCards.hide();

  // Function to handle reset functionality
  $filterReset.click(function () {
    $filterItems.prop("checked", false);
    $filterCards.hide();
    updateFilteredResults();
  });

  // Function to toggle visibility of filter items
  $(".filter-title").click(function () {
    $(this).next(".filter-items").toggle();
  });

  // Function to show/hide subcategories based on main category selection
  function toggleSubcategories(category, show) {
    const $children = $(`.filter-card[data-parent-category="${category}"]`);
    $children.each(function () {
      const $childCheckbox = $(this).find('input[type="checkbox"]');
      if (show) {
        $(this).show();
      } else {
        $childCheckbox.prop("checked", false);
        $(this).hide();
        // Recursively hide grandchildren
        toggleSubcategories($childCheckbox.data("category"), false);
      }
    });
  }

  // Event delegation for category changes with debounce
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const handleCategoryChange = debounce(function () {
    const category = $(this).data("category");
    if ($(this).is(":checked")) {
      toggleSubcategories(category, true);
      checkAndShowParentCategories($(this));
    } else {
      toggleSubcategories(category, false);
    }
    updateFilteredResults();
  }, 200);

  $(".filter-card").on(
    "change",
    ".main-category, .filter-item input",
    handleCategoryChange
  );

  // Function to handle filtering logic
  function updateFilteredResults() {
    const filters = {
      product: new Set(),
      family: new Set(),
    };

    $filterItems.filter(":checked").each(function () {
      const parentCategory = $(this)
        .closest(".filter-card")
        .data("parent-category");
      const category = $(this).attr("id");
      if (parentCategory) {
        filters.family.add(category);
      } else {
        filters.product.add(category);
      }
    });

    $items.each(function () {
      const productMatch =
        filters.product.size === 0 ||
        filters.product.has($(this).data("product"));
      const familyMatch =
        filters.family.size === 0 || filters.family.has($(this).data("family"));

      if (productMatch && familyMatch) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  }

  // Function to check parent categories and show them
  function checkAndShowParentCategories($checkbox) {
    const parentCategory = $checkbox
      .closest(".filter-card")
      .data("parent-category");
    if (parentCategory) {
      const $parentCheckbox = $(`#${parentCategory}`);
      if ($parentCheckbox.length && !$parentCheckbox.is(":checked")) {
        $parentCheckbox.prop("checked", true);
        toggleSubcategories(parentCategory, true);
        checkAndShowParentCategories($parentCheckbox);
      }
    }
    // Ensure the child checkbox is shown
    $checkbox.closest(".filter-card").show();
  }

  // Ensure all parent categories are shown when a child is selected
  function ensureParentCategoriesVisible($checkbox) {
    const parentCategory = $checkbox
      .closest(".filter-card")
      .data("parent-category");
    if (parentCategory) {
      $checkbox.closest(".filter-card").show();
      const $parentCheckbox = $(`#${parentCategory}`);
      if ($parentCheckbox.length) {
        $parentCheckbox.prop("checked", true);
        ensureParentCategoriesVisible($parentCheckbox);
      }
    }
  }

  // Show child categories for the main category
  function showChildCategories(category) {
    toggleSubcategories(category, true);
  }

  // Initialize with all items visible
  updateFilteredResults();

  // Show children checkboxes based on the initial category query parameter
  if (category) {
    const checkbox = $(`#${category}`);
    if (checkbox.length) {
      ensureParentCategoriesVisible(checkbox);
      showChildCategories(category);
    }
  }
});
 */

$(document).ready(function () {
  // Cache frequently used elements
  const $filterItems = $(".filter-item input");
  const $filterCards = $(".filter-card[data-parent-category]");
  const $items = $(".item");
  const $filterReset = $(".filter-reset");

  // Function to get query parameters
  function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the category from the query parameter
  const category = getQueryParameter("category");

  if (category) {
    // Check the corresponding checkbox
    const checkbox = $(`#${category}`);
    if (checkbox.length) {
      checkbox.prop("checked", true);
      showChildCategories(checkbox.data("category"));
      checkAndShowParentCategories(checkbox);
    }
  }

  // Hide all subcategories initially
  $filterCards.hide();

  // Function to handle reset functionality
  $filterReset.click(function () {
    $filterItems.prop("checked", false);
    $filterCards.hide();
    updateFilteredResults();
  });

  // Function to show/hide subcategories based on main category selection
  function toggleSubcategories(category, show) {
    const $children = $(`.filter-card[data-parent-category="${category}"]`);
    $children.each(function () {
      const $childCheckbox = $(this).find('input[type="checkbox"]');
      if (show) {
        $(this).show();
        $(this).find("label").removeClass("d-none"); // Ensure label is shown
        $(this).find(".filter-items").show(); // Show the filter items container
      } else {
        $childCheckbox.prop("checked", false);
        $(this).hide();
        $(this).find("label").addClass("d-none"); // Ensure label is hidden
        $(this).find(".filter-items").hide(); // Hide the filter items container
        // Recursively hide grandchildren
        toggleSubcategories($childCheckbox.data("category"), false);
      }
    });
  }

  // Event delegation for category changes with debounce
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const handleCategoryChange = debounce(function () {
    const category = $(this).data("category");
    if ($(this).is(":checked")) {
      toggleSubcategories(category, true);
      checkAndShowParentCategories($(this));
    } else {
      toggleSubcategories(category, false);
    }
    updateFilteredResults();
  }, 200);

  $(".filter-card").on(
    "change",
    ".main-category, .filter-item input",
    handleCategoryChange
  );

  // Function to handle filtering logic
  function updateFilteredResults() {
    const filters = {
      product: new Set(),
      family: new Set(),
    };

    $filterItems.filter(":checked").each(function () {
      const parentCategory = $(this)
        .closest(".filter-card")
        .data("parent-category");
      const category = $(this).attr("id");
      if (parentCategory) {
        filters.family.add(category);
      } else {
        filters.product.add(category);
      }
    });

    $items.each(function () {
      const productMatch =
        filters.product.size === 0 ||
        filters.product.has($(this).data("product"));
      const familyMatch =
        filters.family.size === 0 || filters.family.has($(this).data("family"));

      if (productMatch && familyMatch) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  }

  // Function to check parent categories and show them
  function checkAndShowParentCategories($checkbox) {
    const parentCategory = $checkbox
      .closest(".filter-card")
      .data("parent-category");
    if (parentCategory) {
      const $parentCheckbox = $(`#${parentCategory}`);
      if ($parentCheckbox.length && !$parentCheckbox.is(":checked")) {
        $parentCheckbox.prop("checked", true);
        toggleSubcategories(parentCategory, true);
        checkAndShowParentCategories($parentCheckbox);
      }
    }
    // Ensure the child checkbox is shown
    $checkbox.closest(".filter-card").show();
    $checkbox.closest(".filter-card").find(".filter-items").show(); // Show the filter items container
  }

  // Ensure all parent categories are shown when a child is selected
  function ensureParentCategoriesVisible($checkbox) {
    const parentCategory = $checkbox
      .closest(".filter-card")
      .data("parent-category");
    if (parentCategory) {
      $checkbox.closest(".filter-card").show();
      const $parentCheckbox = $(`#${parentCategory}`);
      if ($parentCheckbox.length) {
        $parentCheckbox.prop("checked", true);
        ensureParentCategoriesVisible($parentCheckbox);
      }
    }
  }

  // Show child categories for the main category
  function showChildCategories(category) {
    toggleSubcategories(category, true);
  }

  // Initialize with all items visible
  updateFilteredResults();

  // Show children checkboxes based on the initial category query parameter
  if (category) {
    const checkbox = $(`#${category}`);
    if (checkbox.length) {
      ensureParentCategoriesVisible(checkbox);
      showChildCategories(category);
    }
  }
});

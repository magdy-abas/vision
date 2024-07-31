// Document ready
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
  // Function to show the loading spinner
  function showLoadingSpinner() {
    $("#loading-spinner").fadeIn(2000);
  }

  // Function to hide the loading spinner
  function hideLoadingSpinner() {
    $("#loading-spinner").fadeOut(2000);
  }

  // Function to toggle dropdown attribute based on screen width
  function toggleDropdownAttribute() {
    if ($(window).width() <= 992) {
      $("#dropdown, .dropdown-btn").attr("data-bs-toggle", "dropdown");
    } else {
      $("#dropdown, .dropdown-btn").removeAttr("data-bs-toggle");
    }
  }

  // Function to toggle dropdown classes based on screen width
  function toggleMenuClasses() {
    const windowWidth = $(window).width();
    $(".menu")
      .toggleClass("dropend", windowWidth >= 992)
      .toggleClass("dropdown", windowWidth < 992);
  }

  // Function to add background color on hover
  function addHoverEffect(itemSelector, btnSelector) {
    $(itemSelector).hover(
      function () {
        $(btnSelector).css("backgroundColor", "rgba(119, 119, 119, 0.2)");
      },
      function () {
        $(btnSelector).css("backgroundColor", "#eee");
      }
    );
  }

  // Modal functionality
  $(".thumbnail").click(function () {
    $("#myModal").show();
    $("#img01").attr("src", this.src);
    $("body").addClass("modal-open");
  });

  $(".close").click(function () {
    $("#myModal").hide();
    $("body").removeClass("modal-open");
  });

  $(window).click(function (event) {
    if (event.target.id === "myModal") {
      $("#myModal").hide();
      $("body").removeClass("modal-open");
    }
  });

  // Products filter
  const $filterItems = $(".filter-item input");
  const $filterCards = $(".filter-card[data-parent-category]");
  const $items = $(".item");
  const $filterReset = $(".filter-reset");

  function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const category = getQueryParameter("category");
  if (category) {
    const $checkbox = $(`#${category}`);
    if ($checkbox.length) {
      $checkbox.prop("checked", true);
      showChildCategories($checkbox.data("category"));
      checkAndShowParentCategories($checkbox);
    }
  }

  $filterCards.hide();

  $filterReset.click(function () {
    showLoadingSpinner();
    $filterItems.prop("checked", false);
    $filterCards.hide();
    updateFilteredResults();
    hideLoadingSpinner();
  });

  function toggleSubcategories(category, show) {
    const $children = $(`.filter-card[data-parent-category="${category}"]`);
    $children.each(function () {
      const $childCheckbox = $(this).find('input[type="checkbox"]');
      if (show) {
        $(this).show().find("label").removeClass("d-none");
        $(this).find(".filter-items").show();
      } else {
        $childCheckbox.prop("checked", false);
        $(this).hide().find("label").addClass("d-none");
        $(this).find(".filter-items").hide();
        toggleSubcategories($childCheckbox.data("category"), false);
      }
    });
  }

  const handleCategoryChange = debounce(function () {
    showLoadingSpinner();
    const category = $(this).data("category");
    if ($(this).is(":checked")) {
      toggleSubcategories(category, true);
      checkAndShowParentCategories($(this));
    } else {
      toggleSubcategories(category, false);
    }
    updateFilteredResults();
    hideLoadingSpinner();
  }, 200);

  $(".filter-card").on(
    "change",
    ".main-category, .filter-item input",
    handleCategoryChange
  );

  function updateFilteredResults() {
    const filters = { product: new Set(), family: new Set() };
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
        !filters.product.size || filters.product.has($(this).data("product"));
      const familyMatch =
        !filters.family.size || filters.family.has($(this).data("family"));
      $(this).toggle(productMatch && familyMatch);
    });
  }

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
    $checkbox.closest(".filter-card").show().find(".filter-items").show();
  }

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

  function showChildCategories(category) {
    toggleSubcategories(category, true);
  }

  updateFilteredResults();
  if (category) {
    const $checkbox = $(`#${category}`);
    if ($checkbox.length) {
      ensureParentCategoriesVisible($checkbox);
      showChildCategories(category);
    }
  }

  // Initialize dropdown attribute and classes
  toggleDropdownAttribute();
  toggleMenuClasses();

  $(window).resize(function () {
    toggleDropdownAttribute();
    toggleMenuClasses();
  });

  // Add hover effects
  addHoverEffect(".itemHoverOne", ".btnHoverOne");
  addHoverEffect(".itemHoverTwo", ".btnHoverTwo");
  addHoverEffect(".itemHoverThree", ".btnHoverThree");
  addHoverEffect(".itemHoverFour", ".btnHoverFour");

  // Show loading spinner on nav link click
  $("nav a").click(showLoadingSpinner);
});

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

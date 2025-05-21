// add shadow to navbar on scroll
window.addEventListener("scroll", function () {
  const headerContainer = document.getElementsByClassName("navbar")[0];
  if (window.scrollY > 0) {
    headerContainer.classList.add("scrolled");
  } else {
    headerContainer.classList.remove("scrolled");
  }
});

// feature swiper
var swiper = new Swiper(".feature-swiper", {
  // set current slide to the middle slide
  initialSlide: 2,
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#nav-next",
    prevEl: "#nav-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // make breakpoint at 950px or less (i.e. 949px or less) and set slidesPerView to 1
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // make breakpoint at 600px or less (i.e. 599px or less) and set slidesPerView to 1
    800: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

// testimonial swiper
var swiper = new Swiper(".testimonial-swiper", {
  effect: "cards",
  grabCursor: true,
});

const onPartnersResize = () => {
  const partnersContainer = document.getElementById("partners-container");
  const partnersImage = document.getElementById("partners-image");
  const containerWidth = partnersContainer.clientWidth;
  // set right of partners image to window width - partnersContainer width
  let space = (window.innerWidth - containerWidth + 5) / 2 + "px";
  partnersImage.style.right = "-" + space;
};

const onOverviewResize = () => {
  const container = document.getElementById("overview-container");
  const overviewImage = document.getElementById("overview-image");
  const containerWidth = container.clientWidth;
  let space = (window.innerWidth - containerWidth + 6) / 2 + "px";
  overviewImage.style.right = "-" + space;
};

// resize event listener, run two functions
window.addEventListener("resize", () => {
  onPartnersResize();
  onOverviewResize();
});

window.onload = function () {
  onOverviewResize();
  onPartnersResize();
};

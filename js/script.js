const content = [
  [
    "Movement skills",
    "Formation of interests",
    "Diligence",
    "Emotional literacy",
  ],
  [
    "Development of sport skills",
    "Self-defense skills",
    "Communication skills",
    "Emotional flexibility",
  ],
  [
    "Concentration",
    "Self-control",
    "Emotional intelligence",
    "Self-realization",
    "Strong character",
    "Leadership",
    "Self-defense",
  ],
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; // clear existing content
  list.innerHTML = listContent; // insert new content
  tabContent.append(list);
}

function highlightButton(btn) {
  // Clear all existing styling / highlights
  btnWhyReact.className = "";
  btnCoreFeature.className = "";
  btnResources.className = "";
  btn.className = "active"; // set new style / highlight
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}

displayContent(content[0]); // initially show this content

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

const slider6th = function () {
  const slides = document.querySelectorAll(".slide-6th");
  const btnLeft = document.querySelector(".slider__btn--left-6th");
  const btnRight = document.querySelector(".slider__btn--right-6th");
  const dotContainer = document.querySelector(".dots-6th");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot-6th" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot-6th")
      .forEach((dot) => dot.classList.remove("dots__dot--active-6th"));

    document
      .querySelector(`.dots__dot-6th[data-slide="${slide}"]`)
      .classList.add("dots__dot--active-6th");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot-6th")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider6th();

const sliderMentor = function () {
  const slides = document.querySelectorAll(".mentor-card");
  const btnLeft = document.querySelector(
    ".slider__btn-mentor.slider__btn--left"
  );
  const btnRight = document.querySelector(
    ".slider__btn-mentor.slider__btn--right"
  );

  let curSlide = 0;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      if (slide === 0) {
        s.style.transform = `translateX(${0}%)`;
      } else {
        s.style.transform = `translateX(${-100}%)`;
      }
    });
  };

  const nextSlide = function () {
    curSlide = curSlide === 0 ? 1 : 0;
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    curSlide = curSlide === 0 ? 1 : 0;
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
};

sliderMentor();

// Popup and Overlay Elements
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".popup-overlay");
const closePopupBtn = document.querySelector(".popup-close");
const openPopupBtns = document.querySelectorAll(".btn");

// Function to open the popup
function openPopup() {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Function to close the popup
function closePopup() {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Attach event listeners to buttons to open the popup
openPopupBtns.forEach((btn) => {
  btn.addEventListener("click", openPopup);
});

// Close popup when clicking on overlay
overlay.addEventListener("click", closePopup);

// Optional: Close popup when pressing the Esc key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});

document
  .querySelector(".whatsapp-link")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    window.open("https://wa.me/971505060701", "_blank"); // Open the WhatsApp chat in a new tab
  });

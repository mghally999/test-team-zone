document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phone-number").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value.trim();

  // Debugging - Log the values
  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Phone Number:", phoneNumber);
  console.log("Age:", age);
  console.log("Gender:", gender);

  // Create WhatsApp message URL
  const whatsappMessage = `Name: ${encodeURIComponent(fullName)}%0AEmail: ${encodeURIComponent(email)}%0AMobile Number: ${encodeURIComponent(phoneNumber)}%0AAge: ${encodeURIComponent(age)}%0AGender: ${encodeURIComponent(gender)}`;
  const whatsappURL = `https://wa.me/971562413781?text=${whatsappMessage}`;

  // Debugging - Log the final URL
  console.log("WhatsApp URL:", whatsappURL);

  // Redirect to WhatsApp
  window.open(whatsappURL, "_blank");
});


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
  [
    "Hello",
    "I am the 11-15 Teen",
  ],
  [
    "Hello",
    "White Belt Intro",
  ],
  [
    "Hello",
    "Beginner Classes",
  ],
  [
    "Hello",
    "Advanced Classes",
  ],
  [
    "Hello",
    "Competition Classes",
  ],
  [
    "Hello",
    "Private Classes",
  ],
  [
    "Hello",
    "Nogi Classes",
  ],
];

const kidsTwoThree = document.getElementById("kids-two-three");
const kidsFourSix = document.getElementById("kids-four-six");
const kidsSevenTen = document.getElementById("kids-seven-ten");
const teensElevenFifteen = document.getElementById("teens-eleven-fifteen");
const whiteBeltIntro = document.getElementById("white-belt-intro");
const beginnerClasses = document.getElementById("beginner-classes");
const advancedClasses = document.getElementById("advanced-classes");
const competitionClasses = document.getElementById("competition-classes");
const privateClasses = document.getElementById("private-classes");
const nogiClasses = document.getElementById("nogi-classes");
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
  document.querySelectorAll("menu button").forEach(button => {
    button.className = "";
  });
  btn.className = "active"; // set new style / highlight
}

function handleHover(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "kids-two-three") {
    displayContent(content[0]);
  } else if (btnId === "kids-four-six") {
    displayContent(content[1]);
  } else if (btnId === "kids-seven-ten") {
    displayContent(content[2]);
  } else if (btnId === "teens-eleven-fifteen") {
    displayContent(content[3]);
  } else if (btnId === "white-belt-intro") {
    displayContent(content[4]);
  } else if (btnId === "beginner-classes") {
    displayContent(content[5]);
  } else if (btnId === "advanced-classes") {
    displayContent(content[6]);
  } else if (btnId === "competition-classes") {
    displayContent(content[7]);
  } else if (btnId === "private-classes") {
    displayContent(content[8]);
  } else if (btnId === "nogi-classes") {
    displayContent(content[9]);
  } else {
    displayContent(content[0]);
  }
}

displayContent(content[0]); // initially show this content

// Add event listeners for all buttons to handle hover
kidsTwoThree.addEventListener("mouseover", handleHover);
kidsFourSix.addEventListener("mouseover", handleHover);
kidsSevenTen.addEventListener("mouseover", handleHover);
teensElevenFifteen.addEventListener("mouseover", handleHover);
whiteBeltIntro.addEventListener("mouseover", handleHover);
beginnerClasses.addEventListener("mouseover", handleHover);
advancedClasses.addEventListener("mouseover", handleHover);
competitionClasses.addEventListener("mouseover", handleHover);
privateClasses.addEventListener("mouseover", handleHover);
nogiClasses.addEventListener("mouseover", handleHover);

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

tailwind.config = {
  theme: {
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
        tablet: "600px",
        largetablet: "600px",
        desktop: "1200px",
      },
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      tablet: "640px",
      largetablet: "1000px",
      desktop: "1240px",
    },
    extends: {
      colors: {},
    },
  },
};

const openMObileBtnEl = document.getElementById("open-mobile-btn");
const closeMObileBtnEl = document.getElementById("close-mobile-btn");
const mobileMenuEl = document.querySelector(".nav-mobile-menu");

openMObileBtnEl.addEventListener("click", () => {
  console.log("bosildi");
  mobileMenuEl.classList.add("mobile-visible");
});

closeMObileBtnEl.addEventListener("click", () => {
  console.log("yopildi");
  mobileMenuEl.classList.remove("mobile-visible");
});

const opentabletBtnEl = document.getElementById("open-tablet-btn");
const closetabletBtnEl = document.getElementById("close-tablet-btn");
const tabletMenuEl = document.querySelector(".nav-tablet-menu");

opentabletBtnEl.addEventListener("click", () => {
  console.log("bosildi");
  tabletMenuEl.classList.add("table-visible");
});

closetabletBtnEl.addEventListener("click", () => {
  console.log("yopildi");
  tabletMenuEl.classList.remove("table-visible");
});

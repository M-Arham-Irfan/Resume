// ReadyState Event
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    document.querySelector("#navbari a").classList.add("active");
    initApp();
  }
});

// Mobile Menu Toggle
const toggleMenu = () => {
  var navbar = document.getElementById("mobile-menu");
  if (navbar.classList.contains("flex")) {
    navbar.classList.remove("flex");
    navbar.classList.add("hidden");
  } else {
    navbar.classList.add("flex");
    navbar.classList.remove("hidden");
  }
};

// Transparent Header on Scrolling
const addHeaderBackground = () => {
  if (window.scrollY > 10) {
    header.classList.add("bg-scrolled");
  } else {
    header.classList.remove("bg-scrolled");
  }
};

// Set Links Event Listeners
const setLinks = () => {
  const navbarLinks = document.querySelectorAll("#navbari a");
  navbarLinks.forEach((link) =>
    link.addEventListener("click", (event) => {
      navbarLinks.forEach((link) => link.classList.remove("active"));
      event.currentTarget.classList.add("active");
    })
  );
};
// Work Flow Function
const initApp = () => {
  setLinks();
  const themeToggle = document.getElementById("theme-toggle");
  const thememToggle = document.getElementById("theme-mtoggle");
  const html = document.documentElement;
  document.getElementById("mobile-menu").addEventListener("click", toggleMenu);
  document.getElementById("menu-toggle").addEventListener("click", toggleMenu);

  // Window Event Listener for Transparen Header
  window.addEventListener("scroll", addHeaderBackground);

  // Theme Toggle pc
  themeToggle.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  // Theme Toggle mobile
  thememToggle.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
};

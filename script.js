// ================================
// MOBILE MENU
// ================================

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


// Close menu after clicking a link

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar =
  document.getElementById("navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 10) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year")
  .textContent =
  new Date().getFullYear();


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  observer.observe(element);

});

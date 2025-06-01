document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav li");
  const sections = document.querySelectorAll(".section");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Désactive tout
      navItems.forEach((i) => i.classList.remove("active"));
      sections.forEach((sec) => sec.classList.remove("active"));

      // Active le bon
      item.classList.add("active");
      const target = item.getAttribute("data-section");
      document.getElementById(target).classList.add("active");
    });
  });
});

// Navigation active au scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Modale
const openModalBtns = document.querySelectorAll(".open-modal-btn");
const modalOverlay = document.getElementById("modalOverlay");
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

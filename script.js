// Modale de contact
function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Navigation des sections avec expansion locale

document.querySelectorAll(".section").forEach((section) => {
  section.addEventListener("click", () => {
    const isExpanded = section.classList.contains("fullscreen");

    // Réinitialiser toutes les sections
    document.querySelectorAll(".section").forEach((s) => {
      s.classList.remove("fullscreen");
    });

    // Étendre uniquement si ce n'était pas déjà le cas
    if (!isExpanded) {
      section.classList.add("fullscreen");
    }
  });
});

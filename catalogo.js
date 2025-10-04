// ==== MODALES ====
// Botones "Ver más"
const verMasBtns = document.querySelectorAll(".ver-mas");

verMasBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const modal = document.getElementById(targetId);
    if (modal) {
      modal.style.display = "flex";

      // Reiniciar carrusel al abrir
      const track = modal.querySelector(".carousel-track");
      if (track) {
        track.style.transform = "translateX(0)";
        track.dataset.index = 0;
      }
    }
  });
});

// Cerrar modal
document.querySelectorAll(".modal").forEach(modal => {
  const closeBtn = modal.querySelector(".close");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// ==== CARRUSEL ====
document.querySelectorAll(".modal").forEach(modal => {
  const track = modal.querySelector(".carousel-track");
  const prevBtn = modal.querySelector(".carousel-btn.prev");
  const nextBtn = modal.querySelector(".carousel-btn.next");

  if (!track || !prevBtn || !nextBtn) return;

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    track.dataset.index = index;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % track.children.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + track.children.length) % track.children.length;
    updateCarousel();
  });

  // Autoplay
  setInterval(() => {
    if (modal.style.display === "flex") {
      index = (index + 1) % track.children.length;
      updateCarousel();
    }
  }, 4000);
});

// ==== TABS ====
document.querySelectorAll(".tabs").forEach(tabContainer => {
  const tabs = tabContainer.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const modal = tab.closest(".modal");
      const allTabs = modal.querySelectorAll(".tab");
      const allContents = modal.querySelectorAll(".tab-content");

      allTabs.forEach(t => t.classList.remove("active"));
      allContents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      modal.querySelector("#" + tab.dataset.tab).classList.add("active");
    });
  });
});

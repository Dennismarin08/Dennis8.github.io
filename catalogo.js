const modal = document.getElementById("modal");
const modalClose = modal.querySelector(".close");
const track = modal.querySelector(".carousel-track");
const infoTab = document.getElementById("info");
let currentIndex = 0;

// Abrir modal dinámico
document.querySelectorAll(".ver-mas").forEach(btn => {
  btn.addEventListener("click", () => {
    const raza = btn.dataset.raza;
    const edad = btn.dataset.edad;
    const precio = btn.dataset.precio;
    const desc = btn.dataset.desc;
    const imagenes = btn.dataset.img.split(",");

    // Llenar carrusel
    track.innerHTML = "";
    imagenes.forEach(img => {
      const imgEl = document.createElement("img");
      imgEl.src = img.trim();
      imgEl.alt = raza;
      track.appendChild(imgEl);
    });
    currentIndex = 0;
    track.style.transform = "translateX(0)";

    // Llenar info
    infoTab.innerHTML = `
      <h3>${raza}</h3>
      <p><strong>Edad:</strong> ${edad}</p>
      <p><strong>Desde:</strong> ${precio}</p>
      <p>${desc}</p>
    `;

    modal.style.display = "flex";
  });
});

// Cerrar modal
modalClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

// Carrusel
const prevBtn = modal.querySelector(".carousel-btn.prev");
const nextBtn = modal.querySelector(".carousel-btn.next");

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % track.children.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
  updateCarousel();
});

// Tabs
const tabs = modal.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    modal.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    modal.querySelector("#" + tab.dataset.tab).classList.add("active");
  });
});

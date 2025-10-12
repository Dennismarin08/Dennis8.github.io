const razas = {
  bully: {
    nombre: "American Bully",
    edad: "5 meses",
    precio: "$3.500.000",
    descripcion: "El American Bully es musculoso, leal y muy protector.",
    imagenes: ["razas/AMERICAN-MEDIANO.jpg"],
    consejos: [
      "Entrénalo con firmeza y cariño.",
      "Evita sobreesfuerzos en calor.",
      "Socialízalo desde cachorro."
    ],
    cuidados: [
      "Alimentación balanceada para su musculatura.",
      "Revisar articulaciones y piel.",
      "Paseos diarios moderados."
    ]
  },
  akita: {
    nombre: "Akita Americano",
    edad: "5 meses",
    precio: "$4.200.000",
    descripcion: "El Akita es un perro leal, protector y con gran presencia.",
    imagenes: ["razas/AKITA.jpg"],
    consejos: [
      "Entrénalo desde cachorro.",
      "Dale espacio amplio.",
      "Socialízalo con otros perros."
    ],
    cuidados: [
      "Cepillado frecuente por su pelaje.",
      "Ejercicio diario moderado.",
      "Revisión de cadera."
    ]
  },
  basset: {
    nombre: "Basset Hound",
    edad: "4 meses",
    precio: "$2.900.000",
    descripcion: "El Basset Hound es tranquilo, cariñoso y excelente compañero.",
    imagenes: ["razas/BASSET.jpg"],
    consejos: [
      "Mantén control de su dieta para evitar obesidad.",
      "Evita subir muchas escaleras.",
      "Entrénalo con paciencia."
    ],
    cuidados: [
      "Limpieza frecuente de orejas largas.",
      "Paseos cortos diarios.",
      "Cepillado suave del pelaje."
    ]
  },
  bulldog: {
    nombre: "Bulldog Francés",
    edad: "4 meses",
    precio: "$2.000.000",
    descripcion: "Sociable, cariñoso y perfecto para familias y apartamentos.",
    imagenes: ["razas/RAZAS-MEDIANAS/BULLDOG.jpg", "razas/RAZAS-MEDIANAS/BULLDOG-1.jpg"],
    consejos: [
      "Evita calor excesivo.",
      "Usa arnés en lugar de collar.",
      "Socialízalo desde pequeño."
    ],
    cuidados: [
      "Limpia pliegues faciales a diario.",
      "Cepíllalo 2 veces por semana.",
      "Revisa respiración y piel."
    ]
  },
  border: {
    nombre: "Border Collie",
    edad: "5 meses",
    precio: "$3.000.000",
    descripcion: "Es la raza más inteligente, muy activa y trabajadora.",
    imagenes: ["razas/BORDER.jpg"],
    consejos: [
      "Dale mucho ejercicio diario.",
      "Entrénalo con retos mentales.",
      "Ideal para actividades deportivas."
    ],
    cuidados: [
      "Cepillado frecuente.",
      "Necesita compañía y juegos.",
      "Revisión de cadera."
    ]
  },
  bullterrier: {
    nombre: "Bull Terrier",
    edad: "5 meses",
    precio: "$3.200.000",
    descripcion: "Fuerte, valiente y muy leal a su familia.",
    imagenes: ["razas/BULL-TERRIER.jpg"],
    consejos: [
      "Entrénalo con constancia.",
      "Evita dejarlo solo mucho tiempo.",
      "Socialízalo bien."
    ],
    cuidados: [
      "Ejercicio diario.",
      "Cepillado sencillo del pelaje.",
      "Revisión de piel y alergias."
    ]
  },
  ingles: {
    nombre: "Bulldog Inglés",
    edad: "4 meses",
    precio: "$4.000.000",
    descripcion: "Calmado, tierno y excelente para familias tranquilas.",
    imagenes: ["razas/INGLÉS.jpg"],
    consejos: [
      "Evita calor excesivo.",
      "Dieta controlada para evitar obesidad.",
      "No exige demasiado ejercicio."
    ],
    cuidados: [
      "Revisar pliegues faciales.",
      "Paseos cortos diarios.",
      "Atender problemas respiratorios."
    ]
  },
  springer: {
    nombre: "Cocker Springer",
    edad: "4 meses",
    precio: "$2.800.000",
    descripcion: "Activo, alegre y gran perro de compañía.",
    imagenes: ["razas/SPRINGER.jpg"],
    consejos: [
      "Entrénalo con juegos.",
      "Necesita actividad constante.",
      "Socialízalo con personas."
    ],
    cuidados: [
      "Cepillado regular.",
      "Limpieza de orejas largas.",
      "Ejercicio moderado."
    ]
  },
  shetland: {
    nombre: "Pastor Shetland",
    edad: "5 meses",
    precio: "$3.200.000",
    descripcion: "Muy inteligente, obediente y fiel.",
    imagenes: ["razas/SHETLAND.jpg"],
    consejos: [
      "Entrénalo en obediencia temprana.",
      "Le encanta correr y jugar.",
      "Excelente con niños."
    ],
    cuidados: [
      "Cepillado frecuente.",
      "Necesita compañía familiar.",
      "Revisión de ojos y piel."
    ]
  },
  poodlemed: {
    nombre: "Poodle Mediano",
    edad: "4 meses",
    precio: "$2.500.000",
    descripcion: "Elegante, cariñoso y fácil de entrenar.",
    imagenes: ["razas/POODLE-MED.jpg"],
    consejos: [
      "Dale paseos diarios.",
      "Entrénalo con juegos de inteligencia.",
      "Socialízalo desde pequeño."
    ],
    cuidados: [
      "Corte de pelo regular.",
      "Cepillado frecuente.",
      "Revisión dental."
    ]
  }
};


let currentIndex = 0;
let currentImages = [];

// === Abrir modal ===
document.querySelectorAll(".ver-mas").forEach(btn => {
  btn.addEventListener("click", () => {
    const razaKey = btn.dataset.raza;
    const data = razas[razaKey];
    if (!data) return;

    // Cargar imágenes
    currentImages = data.imagenes;
    currentIndex = 0;
    mostrarImagen();

    // Información
    document.getElementById("info").innerHTML = `
      <h3>${data.nombre}</h3>
      <p><strong>Edad:</strong> ${data.edad}</p>
      <p><strong>Desde:</strong> ${data.precio}</p>
      <p>${data.descripcion}</p>
    `;

    // Consejos
    document.getElementById("consejos").innerHTML = `
      <h4>Consejos</h4>
      <ul>${data.consejos.map(c => `<li>✔️ ${c}</li>`).join("")}</ul>
    `;

    // Cuidados
    document.getElementById("cuidados").innerHTML = `
      <h4>Cuidados</h4>
      <ul>${data.cuidados.map(c => `<li>✔️ ${c}</li>`).join("")}</ul>
    `;

    // ✅ Mostrar modal centrado
    const modal = document.getElementById("modal-general");
    modal.classList.add("show");

    // Reset pestañas
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
    document.querySelector(".tab[data-tab='info']").classList.add("active");
    document.getElementById("info").classList.add("active");
  });
});

// === Cerrar modal ===
document.querySelector("#modal-general .close").addEventListener("click", () => {
  document.getElementById("modal-general").classList.remove("show");
});

// === Cerrar al hacer clic fuera ===
window.addEventListener("click", e => {
  const modal = document.getElementById("modal-general");
  if (e.target === modal) modal.classList.remove("show");
});

// === Carrusel ===
function mostrarImagen() {
  const track = document.getElementById("carousel-images");
  track.innerHTML = `<img src="${currentImages[currentIndex]}" alt="Imagen carrusel">`;
}

document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    mostrarImagen();
  }
});

document.querySelector(".carousel-btn.next").addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    mostrarImagen();
  }
});

// === Tabs ===
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
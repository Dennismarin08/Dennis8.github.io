const razas = {
  boxer: {
    nombre: "Boxer",
    edad: "5 meses",
    precio: "$3.200.000",
    descripcion: "El Boxer es fuerte, enérgico y extremadamente leal. Ideal para familias activas y protectoras.",
    imagenes: ["razas/BOXER.jpg"],
    consejos: [
      "Dale suficiente ejercicio diario.",
      "Enséñale obediencia básica desde cachorro.",
      "Evita dejarlo solo por largos periodos."
    ],
    cuidados: [
      "Revisión dental y de piel regularmente.",
      "Cepillado semanal del pelaje corto.",
      "Buena alimentación para mantener su musculatura."
    ]
  },
  chowchow: {
    nombre: "Chow Chow",
    edad: "5 meses",
    precio: "$3.800.000",
    descripcion: "El Chow Chow es un perro majestuoso y reservado. Su pelaje abundante lo hace único y elegante.",
    imagenes: ["razas/CHOWCHOW.jpg"],
    consejos: [
      "Socialízalo desde pequeño para evitar timidez.",
      "Cepilla su pelaje a diario.",
      "Evita altas temperaturas, es sensible al calor."
    ],
    cuidados: [
      "Baño y cepillado frecuente.",
      "Revisión de piel bajo el pelaje.",
      "Buena hidratación y sombra constante."
    ]
  },
  doberman: {
    nombre: "Dóberman",
    edad: "5 meses",
    precio: "$3.500.000",
    descripcion: "El Dóberman es elegante, protector y muy inteligente. Excelente guardián y compañero leal.",
    imagenes: ["razas/DOBERMAN.jpg"],
    consejos: [
      "Entrénalo con disciplina positiva.",
      "Proporciónale ejercicio intenso diario.",
      "Socialízalo para mantener equilibrio emocional."
    ],
    cuidados: [
      "Cepillado semanal.",
      "Buena dieta rica en proteínas.",
      "Chequeos de cadera y corazón periódicos."
    ]
  },
  dogo: {
    nombre: "Dogo Argentino",
    edad: "6 meses",
    precio: "$4.000.000",
    descripcion: "El Dogo Argentino es fuerte, valiente y protector. Ideal para dueños con experiencia.",
    imagenes: ["razas/DOGO.jpg"],
    consejos: [
      "Entrénalo con autoridad y afecto.",
      "Evita el sedentarismo, necesita actividad física.",
      "Socialízalo con otros perros desde cachorro."
    ],
    cuidados: [
      "Baños mensuales.",
      "Buena alimentación rica en carne magra.",
      "Visitas regulares al veterinario por articulaciones."
    ]
  },
  poodlegrande: {
    nombre: "French Poodle (Grande / Estándar)",
    edad: "4 meses",
    precio: "$3.000.000",
    descripcion: "El Poodle estándar es elegante, inteligente y muy leal. Perfecto para familias y deportes caninos.",
    imagenes: ["razas/POODLE-GRANDE.jpg"],
    consejos: [
      "Cepilla su pelaje rizado a diario.",
      "Entrénalo con juegos de inteligencia.",
      "Mantenlo activo para evitar aburrimiento."
    ],
    cuidados: [
      "Corte de pelo regular.",
      "Limpieza dental frecuente.",
      "Ejercicio diario controlado."
    ]
  },
  golden: {
    nombre: "Golden Retriever",
    edad: "5 meses",
    precio: "$3.400.000",
    descripcion: "El Golden Retriever es amigable, paciente y muy fiel. Ideal para niños y familias.",
    imagenes: ["razas/GOLDEN.jpg"],
    consejos: [
      "Cepilla su pelaje dos veces por semana.",
      "Proporciónale juegos en agua o exteriores.",
      "Entrénalo con refuerzos positivos."
    ],
    cuidados: [
      "Revisión de oídos y piel.",
      "Buena alimentación para su energía.",
      "Ejercicio diario y amor constante."
    ]
  },
  husky: {
    nombre: "Husky Siberiano",
    edad: "5 meses",
    precio: "$3.600.000",
    descripcion: "El Husky es un perro de trabajo resistente, sociable y muy activo. Ama el frío y correr.",
    imagenes: ["razas/HUSKY.jpg"],
    consejos: [
      "Evita el calor extremo.",
      "Dale largas caminatas y ejercicio diario.",
      "No lo dejes solo por largos periodos."
    ],
    cuidados: [
      "Cepillado frecuente para el cambio de pelo.",
      "Buena hidratación.",
      "Revisión de patas y pelaje."
    ]
  },
  labrador: {
    nombre: "Labrador Retriever",
    edad: "4 meses",
    precio: "$3.200.000",
    descripcion: "El Labrador es sociable, obediente y juguetón. Ideal para familias y actividades al aire libre.",
    imagenes: ["razas/LABRADOR.jpg"],
    consejos: [
      "Entrénalo con paciencia y cariño.",
      "Evita el sobrepeso, tiende a engordar.",
      "Bríndale tiempo para jugar al aire libre."
    ],
    cuidados: [
      "Cepillado semanal.",
      "Buena dieta baja en grasa.",
      "Ejercicio constante y controlado."
    ]
  },
  pastoraleman: {
    nombre: "Pastor Alemán",
    edad: "5 meses",
    precio: "$3.500.000",
    descripcion: "El Pastor Alemán es fuerte, inteligente y protector. Excelente para entrenamiento y compañía.",
    imagenes: ["razas/PASTOR-ALEMAN.jpg"],
    consejos: [
      "Entrénalo desde cachorro para obediencia.",
      "Proporciónale tareas o ejercicios mentales.",
      "Socialízalo con otros animales."
    ],
    cuidados: [
      "Cepillado frecuente.",
      "Alimentación rica en proteínas.",
      "Revisión de cadera regularmente."
    ]
  },
  pastoraustraliano: {
    nombre: "Pastor Australiano Ganadero (Blue Heeler / Cattle Dog)",
    edad: "5 meses",
    precio: "$3.300.000",
    descripcion: "El Pastor Australiano es trabajador, activo y muy inteligente. Ama tener tareas y moverse.",
    imagenes: ["razas/PASTOR-AUSTRALIANO.jpg"],
    consejos: [
      "Dale ejercicio intenso diario.",
      "Entrénalo con retos mentales.",
      "Evita tenerlo encerrado mucho tiempo."
    ],
    cuidados: [
      "Cepillado semanal.",
      "Buena hidratación.",
      "Ejercicio estructurado y descanso suficiente."
    ]
  },
  samoyedo: {
    nombre: "Samoyedo",
    edad: "5 meses",
    precio: "$3.800.000",
    descripcion: "El Samoyedo es dulce, sociable y de pelaje blanco impresionante. Ama la compañía humana.",
    imagenes: ["razas/SAMOYEDO.jpg"],
    consejos: [
      "Cepilla su pelaje todos los días.",
      "Evita el calor extremo.",
      "Dale paseos en horas frescas."
    ],
    cuidados: [
      "Limpieza dental frecuente.",
      "Revisión de piel bajo el pelaje.",
      "Buena hidratación diaria."
    ]
  },
  weimaraner: {
    nombre: "Weimaraner",
    edad: "5 meses",
    precio: "$3.600.000",
    descripcion: "El Weimaraner es atlético, fiel y muy cariñoso. Ama correr, jugar y estar con su dueño.",
    imagenes: ["razas/WEIMARANER.jpg"],
    consejos: [
      "Dale ejercicio físico diario.",
      "Entrénalo con actividades al aire libre.",
      "Evita dejarlo solo mucho tiempo."
    ],
    cuidados: [
      "Cepillado corto semanal.",
      "Buena alimentación energética.",
      "Visitas periódicas al veterinario."
    ]
  }
};

// ======= FUNCIONALIDAD MODAL =======
let currentIndex = 0;
let currentImages = [];

document.querySelectorAll(".ver-mas").forEach(btn => {
  btn.addEventListener("click", () => {
    const razaKey = btn.dataset.raza;
    const data = razas[razaKey];
    if (!data) return;

    currentImages = data.imagenes;
    currentIndex = 0;
    mostrarImagen();

    document.getElementById("info").innerHTML = `
      <h3>${data.nombre}</h3>
      <p><strong>Edad:</strong> ${data.edad}</p>
      <p><strong>Desde:</strong> ${data.precio}</p>
      <p>${data.descripcion}</p>
    `;

    document.getElementById("consejos").innerHTML = `
      <h4>Consejos</h4>
      <ul>${data.consejos.map(c => `<li>✔️ ${c}</li>`).join("")}</ul>
    `;

    document.getElementById("cuidados").innerHTML = `
      <h4>Cuidados</h4>
      <ul>${data.cuidados.map(c => `<li>✔️ ${c}</li>`).join("")}</ul>
    `;

    const modal = document.getElementById("modal-general");
    modal.classList.add("show");

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.querySelector(".tab[data-tab='info']").classList.add("active");
    document.getElementById("info").classList.add("active");
  });
});

document.querySelector("#modal-general .close").addEventListener("click", () => {
  document.getElementById("modal-general").classList.remove("show");
});

window.addEventListener("click", e => {
  const modal = document.getElementById("modal-general");
  if (e.target === modal) modal.classList.remove("show");
});

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

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

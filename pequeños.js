document.addEventListener("DOMContentLoaded", () => {
  const razas = {
    beagle: {
      nombre: "Beagle",
      edad: "4 meses",
      precio: "$2.800.000",
      descripcion: "El Beagle es un perro curioso, juguetón y muy sociable. Ideal para familias con niños y espacios abiertos.",
      imagenes: ["razas/RAZAS-PEQUEÑAS/BEAGLE-PORTADA.webp", "razas/RAZAS-PEQUEÑAS/BEAGLE.webp"],
      consejos: [
        "Sácalo a caminar todos los días.",
        "Enséñale obediencia desde pequeño.",
        "Manténlo estimulado mentalmente con juegos."
      ],
      cuidados: [
        "Cepilla su pelaje corto una vez por semana.",
        "Limpia sus orejas regularmente.",
        "Controla su dieta para evitar sobrepeso."
      ]
    },
    chihuahua: {
      nombre: "Chihuahua",
      edad: "3 meses",
      precio: "$2.500.000",
      descripcion: "El Chihuahua es un perro pequeño, valiente y muy leal. Ideal para apartamentos.",
      imagenes: ["razas/RAZAS-PEQUEÑAS/CHIHUAHUA.jpg", "razas/RAZAS-PEQUEÑAS/CHIHUAHUA-2.jpg"],
      consejos: [
        "Socialízalo desde cachorro.",
        "Evita el exceso de ejercicio.",
        "Proporciónale un lugar cálido para descansar."
      ],
      cuidados: [
        "Cepillado semanal.",
        "Revisión dental regular.",
        "Control de temperatura en climas fríos."
      ]
    },
    bichon: {
      nombre: "Bichón Maltés",
      edad: "3 meses",
      precio: "$3.000.000",
      descripcion: "El Bichón Maltés es pequeño, alegre y muy afectuoso. Se adapta perfectamente a la vida en apartamentos.",
      imagenes: ["razas/BICHON.jpg"],
      consejos: [
        "No lo dejes solo por mucho tiempo.",
        "Acostúmbralo al cepillado diario.",
        "Premia su buen comportamiento con juegos."
      ],
      cuidados: [
        "Corte de pelo cada 6 semanas.",
        "Limpieza ocular frecuente.",
        "Alimentación de calidad para su piel blanca."
      ]
    },
    boston: {
      nombre: "Boston Terrier",
      edad: "4 meses",
      precio: "$2.900.000",
      descripcion: "El Boston Terrier es inteligente, activo y cariñoso. Un excelente compañero de interior.",
      imagenes: ["razas/BOSTON.jpg"],
      consejos: [
        "Evita el exceso de calor.",
        "Socialízalo desde cachorro.",
        "Dale juguetes resistentes para morder."
      ],
      cuidados: [
        "Cepillado corto semanal.",
        "Limpieza facial diaria.",
        "Revisión veterinaria periódica de ojos."
      ]
    },
    cocker: {
      nombre: "Cocker (Americano / Inglés pequeño)",
      edad: "4 meses",
      precio: "$2.700.000",
      descripcion: "El Cocker es alegre, juguetón y muy fiel. Le encanta correr y jugar con su familia.",
      imagenes: ["razas/COCKER.jpg"],
      consejos: [
        "Entrénalo con refuerzos positivos.",
        "Cepilla su pelaje cada dos días.",
        "Dale paseos regulares."
      ],
      cuidados: [
        "Limpieza de orejas largas.",
        "Baños cada 3 semanas.",
        "Corte de pelo cada 2 meses."
      ]
    },
    pekines: {
      nombre: "Pekinés",
      edad: "3 meses",
      precio: "$2.500.000",
      descripcion: "El Pekinés es un perro elegante, tranquilo y valiente. Es ideal para espacios pequeños.",
      imagenes: ["razas/PEKINES.jpg"],
      consejos: [
        "Evita el calor extremo.",
        "Cepíllalo a diario para evitar nudos.",
        "Trátalo con suavidad, es muy sensible."
      ],
      cuidados: [
        "Limpieza facial constante.",
        "Cepillado diario.",
        "Visitas regulares al veterinario."
      ]
    },
    pinscher: {
      nombre: "Mini Pinscher",
      edad: "3 meses",
      precio: "$2.200.000",
      descripcion: "El Mini Pinscher es pequeño pero valiente, con una energía increíble y carácter decidido.",
      imagenes: ["razas/PINSCHER.jpg"],
      consejos: [
        "Proporciónale ejercicio diario.",
        "Entrénalo con firmeza pero cariño.",
        "No lo mimes demasiado, es dominante."
      ],
      cuidados: [
        "Evita corrientes de aire.",
        "Cepillado semanal.",
        "Protección ante el frío."
      ]
    },
    pug: {
      nombre: "Pug",
      edad: "4 meses",
      precio: "$2.400.000",
      descripcion: "El Pug es simpático, tierno y un gran compañero de casa. Le encanta estar con su familia.",
      imagenes: ["razas/PUG.jpg"],
      consejos: [
        "Evita el calor excesivo.",
        "Dale paseos cortos y frecuentes.",
        "No lo sobrealimentes."
      ],
      cuidados: [
        "Limpieza de pliegues faciales diaria.",
        "Cepillado ligero cada semana.",
        "Vigilancia de su respiración."
      ]
    },
    shihtzu: {
      nombre: "Shih Tzu",
      edad: "4 meses",
      precio: "$2.900.000",
      descripcion: "El Shih Tzu es un perro dulce, tranquilo y elegante. Ideal para hogares con poco espacio.",
      imagenes: ["razas/SHIHTZU.jpg"],
      consejos: [
        "Cepilla su largo pelaje a diario.",
        "No lo dejes solo mucho tiempo.",
        "Entrénalo con paciencia y dulzura."
      ],
      cuidados: [
        "Baño cada 3 semanas.",
        "Limpieza ocular constante.",
        "Corte de pelo cada 6 semanas."
      ]
    },
    teckel: {
      nombre: "Teckel (Salchicha)",
      edad: "4 meses",
      precio: "$2.600.000",
      descripcion: "El Teckel es curioso, valiente y muy leal. Su forma alargada lo hace inconfundible.",
      imagenes: ["razas/TECKEL.jpg"],
      consejos: [
        "Evita que suba muchas escaleras.",
        "Dale paseos diarios cortos.",
        "Entrénalo con juegos divertidos."
      ],
      cuidados: [
        "Cuida su espalda al cargarlo.",
        "Cepillado semanal.",
        "Revisión de uñas frecuente."
      ]
    },
    westy: {
      nombre: "Westy Terrier",
      edad: "4 meses",
      precio: "$3.000.000",
      descripcion: "El Westy es un perro simpático, valiente y de carácter alegre. Perfecto para familias activas.",
      imagenes: ["razas/WESTY.jpg"],
      consejos: [
        "Dale juegos de búsqueda.",
        "Socialízalo desde cachorro.",
        "Entrénalo con constancia."
      ],
      cuidados: [
        "Cepillado cada dos días.",
        "Limpieza dental frecuente.",
        "Revisión de piel blanca sensible."
      ]
    },
    yorkshire: {
      nombre: "Yorkshire Terrier / Biwer Yorkshire",
      edad: "3 meses",
      precio: "$2.700.000",
      descripcion: "Pequeño, elegante y cariñoso, el Yorkshire es ideal para espacios pequeños y dueños dedicados.",
      imagenes: ["razas/YORKSHIRE.jpg"],
      consejos: [
        "Cepilla su pelaje largo a diario.",
        "No lo sobreprotejas, déjalo explorar.",
        "Acostúmbralo a otros perros."
      ],
      cuidados: [
        "Corte de pelo cada 5 semanas.",
        "Limpieza ocular y dental.",
        "Buena alimentación para su brillo."
      ]
    }
  };

  // ======= FUNCIONALIDAD MODAL =======
  let currentIndex = 0;
  let currentImages = [];

  document.querySelectorAll(".ver-mas").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("✅ Botón presionado:", btn.dataset.raza);
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
});

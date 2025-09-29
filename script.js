// === Inicializar AOS ===
AOS.init({ duration: 1000, once: true });

document.addEventListener("DOMContentLoaded", () => {
  // === Interactividad para cards de razas (Ver más / Ver menos) ===
  document.querySelectorAll('.btn-vermas').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.raza-card');
      if (!card) return;

      // Cierra otras cards abiertas
      document.querySelectorAll('.raza-card.active').forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('active');
          otherCard.querySelector('.btn-vermas').textContent = 'Ver más';
        }
      });

      // Toggle la card actual
      card.classList.toggle('active');
      this.textContent = card.classList.contains('active') ? 'Ver menos' : 'Ver más';

      // Animación suave al abrir
      if (card.classList.contains('active')) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // === Consejos dinámicos ===
  const consejos = [
    "Limpia los dientes de tu perro regularmente para prevenir enfermedades.",
    "Proporciona siempre agua fresca y limpia a tu mascota.",
    "Vacuna a tu mascota siguiendo el calendario recomendado.",
    "Mantén una dieta balanceada para evitar obesidad y problemas digestivos.",
    "Saca a pasear a tu perro al menos 30 minutos al día para ejercitarlo.",
    "Visita al veterinario al menos una vez al año para un chequeo completo.",
    "Desparasita periódicamente a tu mascota para evitar enfermedades.",
    "Cepilla el pelaje de tu perro para mantenerlo saludable y limpio.",
    "Nunca automediques a tu mascota, consulta siempre a un veterinario.",
    "Brinda un espacio cómodo y seguro para que tu mascota descanse."
  ];
  const consejoEl = document.getElementById("consejo");
  function mostrarConsejo() {
    if (consejoEl) {
      consejoEl.textContent = consejos[Math.floor(Math.random() * consejos.length)];
    }
  }
  mostrarConsejo();
  setInterval(mostrarConsejo, 30000);

  // === Contadores Animados ===
  function animateCounter(id, target) {
    let count = 0;
    const speed = target / 100;
    const counter = document.getElementById(id);
    if (!counter) return;
    const interval = setInterval(() => {
      count += speed;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      counter.innerText = Math.floor(count);
    }, 30);
  }
  animateCounter("contador1", 500);
  animateCounter("contador2", 1200);
  animateCounter("contador3", 300);

  // === Base de datos de razas (peso en kg) ===
  const razasData = {
    "Bulldog Inglés": { macho: { min: 23, max: 25 }, hembra: { min: 18, max: 20 } },
    "Golden Retriever": { macho: { min: 30, max: 34 }, hembra: { min: 27, max: 32 } },
    "Pastor Alemán": { macho: { min: 30, max: 40 }, hembra: { min: 22, max: 32 } },
    "Labrador": { macho: { min: 29, max: 36 }, hembra: { min: 25, max: 32 } },
    "Pitbull": { macho: { min: 16, max: 30 }, hembra: { min: 14, max: 27 } },
    "Chihuahua": { macho: { min: 2, max: 3 }, hembra: { min: 1.5, max: 2.7 } },
    "Husky Siberiano": { macho: { min: 20, max: 27 }, hembra: { min: 16, max: 23 } },
    "Dálmata": { macho: { min: 27, max: 32 }, hembra: { min: 24, max: 29 } },
    "Bóxer": { macho: { min: 27, max: 32 }, hembra: { min: 25, max: 29 } },
    "Bulldog Francés": { macho: { min: 9, max: 14 }, hembra: { min: 8, max: 13 } }
  };

  // === Simulador de cuidado ===
  const form = document.getElementById("simulador-form");
  const resultado = document.getElementById("resultado");
  const ctx = document.getElementById("graficoPeso")?.getContext("2d");
  let grafico = null;

  if (form && resultado) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const raza = document.getElementById("raza").value;
      const genero = document.getElementById("genero").value;
      const edad = parseInt(document.getElementById("edad").value);
      const estado = document.getElementById("estado").value;
      const peso = parseFloat(document.getElementById("peso").value);

      // Guardar en localStorage
      localStorage.setItem("mascota", JSON.stringify({ nombre, raza, genero, edad, estado, peso }));

      // Calcular rango según raza y género
      const datosRaza = razasData[raza]?.[genero];
      let alertaMsg = "ℹ️ No hay datos exactos de esta raza.";
      let alertaClass = "verde";

      if (datosRaza) {
        if (peso < datosRaza.min) {
          alertaClass = "rojo";
          alertaMsg = `⚠️ ${nombre} pesa ${peso} kg, está por debajo del rango ideal (${datosRaza.min}–${datosRaza.max} kg).`;
        } else if (peso > datosRaza.max) {
          alertaClass = "amarillo";
          alertaMsg = `⚠️ ${nombre} pesa ${peso} kg, está por encima del rango ideal (${datosRaza.min}–${datosRaza.max} kg).`;
        } else {
          alertaMsg = `✅ ${nombre} está dentro del rango ideal (${datosRaza.min}–${datosRaza.max} kg).`;
        }
      }

      // Comida recomendada
      let comida = estado === "activo" ? peso * 60 : peso * 50;

      // Mostrar resultado
      resultado.innerHTML = `
        <h3>Recomendaciones para ${nombre}</h3>
        <p><strong>Raza:</strong> ${raza}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Peso:</strong> ${peso} kg</p>
        <hr>
        <p>🍖 Debe comer aproximadamente <strong>${comida.toFixed(0)} g</strong> de alimento al día.</p>
        <p class="alerta ${alertaClass}">${alertaMsg}</p>
      `;
      resultado.style.display = "block";

      // === Gráfico comparativo minimalista ===
      if (grafico) grafico.destroy();
      if (ctx) {
        grafico = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Peso actual", "Peso mínimo", "Peso máximo"],
            datasets: [{
              label: "Peso (kg)",
              data: [peso, datosRaza?.min || 0, datosRaza?.max || 0],
              backgroundColor: ["#4a90e2", "#25D366", "#ff5252"],
              borderRadius: 10
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: "Kg" } }
            }
          }
        });
      }
    });

    // Rellenar datos guardados si existen
    const mascotaGuardada = localStorage.getItem("mascota");
    if (mascotaGuardada) {
      const m = JSON.parse(mascotaGuardada);
      document.getElementById("nombre").value = m.nombre;
      document.getElementById("raza").value = m.raza;
      document.getElementById("genero").value = m.genero;
      document.getElementById("edad").value = m.edad;
      document.getElementById("estado").value = m.estado;
      document.getElementById("peso").value = m.peso;
    }
  }
});

// Siempre ir al principio al recargar
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal, .service, .raza-card');
window.addEventListener('scroll', () => {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add('active');
  }
});

// Historias slider
let slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== NAVBAR ACTIVE SECTION =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#main-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 120;
    if (scrollY >= sectionTop) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===== NAVBAR HAMBURGUER ANIMADO =====
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  mainNav.style.display = mainNav.style.display === "flex" ? "none" : "flex";
  navToggle.classList.toggle("open");
});

// ===== HISTORIAS DOTS CONTROL =====
const dots = document.querySelectorAll(".dot");
dots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    let i = e.target.dataset.index;
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    e.target.classList.add("active");
    index = i; // mantener sincronía con autoplay
  });
});

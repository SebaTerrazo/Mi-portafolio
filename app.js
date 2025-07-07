// Modo Oscuro/Claro
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Partículas
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#00d1ff" },
    line_linked: { enable: true, color: "#00d1ff" },
    move: { speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// Scroll Reveal
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 200
});

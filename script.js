document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const projectDetail = document.getElementById("project-detail");
  const detailText = projectDetail.querySelector("p");
   const linkProject = document.getElementById("nombre-proyecto"); // 👈 el link
  const closeDetail = document.getElementById("close-detail");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;



  // Mostrar detalles del proyecto
  projects.forEach((project) => {
    project.addEventListener("click", () => {
      detailText.textContent = project.getAttribute("data-detail");
      linkProject.href = project.getAttribute("data-link"); // 👈 setear link
      projectDetail.classList.remove("hidden");
    });
  });

  // Cerrar el detalle
  closeDetail.addEventListener("click", () => {
    projectDetail.classList.add("hidden");
  });

  // Cambiar tema
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
  });
});



//icono finger icono finger icono finger icono finger icono finger icono finger icono finger icono finger
const icon = document.querySelector('.icon');

const handleScroll = () => {
  // Verificamos si el ancho de la ventana es mayor a 600px
  if (window.innerWidth > 600) {
    if (window.scrollY > 0) {
      icon.style.display = 'none'; // Ocultamos el icono
    } else {
      icon.style.display = 'block'; // Mostramos el icono si vuelve al tope
    }
  }
};

window.addEventListener('scroll', handleScroll);

window.addEventListener('resize', () => {
  if (window.innerWidth <= 600) {
    icon.style.display = 'none'; // Aseguramos que el ícono siga oculto en responsive
  } else {
    handleScroll(); // Aplicamos la lógica de scroll si no está en responsive
  }
});



// modificando el titulo de la presentacion 'hola soy nicolas ruiz

const titulo = document.getElementById('titulo__h2');

function ajustarTitulo() {
  if (window.innerWidth <= 600) {
    // Modificar el título para pantallas pequeñas
    titulo.innerHTML = `Hello<br> I'm Nicolás Ruiz`;
  } else {
    // Restaurar el texto original para pantallas grandes
    titulo.innerHTML = "Hello, I'm Nicolás Ruiz";
  }
}
window.addEventListener('resize', ajustarTitulo);
ajustarTitulo();






//particulas

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.1,
      random: false,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      straight: false,
    },
    // Aquí configuramos correctamente la propiedad de las líneas
    line_linked: {
      enable: true,  
      distance: 150, 
      color: "#1a1a1a",
      opacity: 9,  
      width: 1,      
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});







//Reproduce VIDEO
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".background-video");

  videos.forEach((video) => {
    video.play().catch((error) => {
      console.error("El video no pudo reproducirse automáticamente:", error);
    });
  });
});


//scrollReveal
if (window.innerWidth > 768) {
  const sr = ScrollReveal({
    reset: true,
  });

  sr.reveal(".imagen-1", { origin: 'left', duration: 3000, distance: '300%' });
  sr.reveal(".imagen-2", { origin: 'left', duration: 2500, distance: '300%' });
  sr.reveal(".imagen-3", { origin: 'left', duration: 2000, distance: '300%' });
  sr.reveal(".imagen-4", { origin: 'left', duration: 1500, distance: '300%' });
  sr.reveal('.blandas-content', { origin: 'right', duration: 2000, distance: '300%' });
  sr.reveal('.marquee', { origin: 'right', duration: 2000, distance: '100%' });
  sr.reveal('.prject1', { origin: 'right', duration: 2000, distance: '100%' });
  sr.reveal('.prject2', { origin: 'right', duration: 3000, distance: '100%' });
  sr.reveal('.prject3', { origin: 'right', duration: 4000, distance: '100%' });
} 


//reprducir en todos mobiles
document.querySelectorAll('video').forEach(video => {
  video.muted = true;
  video.playsInline = true;
  video.play().catch(error => {
    console.log("Autoplay falló:", error);
  });
});




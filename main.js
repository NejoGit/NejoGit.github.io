/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'
const svgGradient = document.getElementById('b')
const logoNav = document.getElementById('logoNav');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)

    // Update the SVG gradient color based on current theme
    if (getCurrentTheme() === 'dark') {
      svgGradient.children[2].setAttribute('stop-color', 'rgba(44, 42, 38, 1)');
        svgGradient.children[1].setAttribute('stop-color', 'rgba(44, 42, 38, 1)');
        svgGradient.children[0].setAttribute('stop-color', 'rgba(0, 0, 0, 0)');
      logoNav.src = "assets/img/LogoNejoLight.png";
    } else {
      svgGradient.children[2].setAttribute('stop-color', 'rgba(255, 110, 64, 1)');
      svgGradient.children[1].setAttribute('stop-color', 'rgba(255, 190, 170, 0.1)');
      svgGradient.children[0].setAttribute('stop-color', 'rgba(255, 255, 255, 0)');
      logoNav.src = "assets/img/NejoWithBackground.png";
    }
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Update the SVG gradient color based on current theme
    if (getCurrentTheme() === 'dark') {
        svgGradient.children[2].setAttribute('stop-color', 'rgba(44, 42, 38, 1)');
        svgGradient.children[1].setAttribute('stop-color', 'rgba(44, 42, 38, 1)');
        svgGradient.children[0].setAttribute('stop-color', 'rgba(0, 0, 0, 0)');
        logoNav.src = "assets/img/LogoNejoLight.png";
      } else {
        svgGradient.children[2].setAttribute('stop-color', 'rgba(255, 110, 64, 1)');
        svgGradient.children[1].setAttribute('stop-color', 'rgba(255, 190, 170, 0.1)');
        svgGradient.children[0].setAttribute('stop-color', 'rgba(255, 255, 255, 0)');
        logoNav.src = "assets/img/NejoWithBackground.png";
      }
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


// // Texto Animado de escritura
// const titulo = document.getElementById('titulo-animado');
// const textoOriginal = titulo.textContent;
// const divTitulo = document.getElementById('div-titulo');
// const altura = titulo.offsetHeight; // Obtenemos la altura de elemento1
// // const ancho = titulo.offsetWidth;
// // divTitulo.style.width = ancho + 'px'; // Asignamos la altura a elemento2
// divTitulo.style.height = altura + 'px'; // Asignamos la altura a elemento2
// titulo.textContent = '';
// const cursor = document.createElement('span');

// let ite = 0;
// const intervalo = setInterval(function() {
  
//   if (ite < textoOriginal.length) {
//     titulo.textContent += textoOriginal.charAt(ite);
//     ite++;
//     cursor.classList.add('cursor-blink');
//     titulo.appendChild(cursor);
//   } else {
//     clearInterval(intervalo);
//     titulo.removeChild(cursor);
//     titulo.style.visibility = 'visible';
//   }
// }, 30);





//Entrada Animada

const animacionYaActivada = false;

async function activarAnimacion() {

  if (!animacionYaActivada) {
    
    const elementos = document.querySelectorAll('.move-from-left, .move-from-right');
    console.log(elementos);
    const tamañoPantalla = window.innerHeight / 1.8;
    for (let i = 0; i < elementos.length; i++) {
      const posicion = elementos[i].getBoundingClientRect().top;
      if (posicion < tamañoPantalla) {
        await new Promise(resolve => setTimeout(resolve, 50));
        elementos[i].classList.add('visible');
      }
    }
  } else {
    const elementos = document.querySelectorAll('.move-from-left:not(.visible), .move-from-right:not(.visible)');
    const tamañoPantalla = window.innerHeight / 1.8;
    for (let i = 0; i < elementos.length; i++) {
      const posicion = elementos[i].getBoundingClientRect().top;
      if (posicion < tamañoPantalla) {
        await new Promise(resolve => setTimeout(resolve, 50));
        elementos[i].classList.add('visible');
      }
    }
  }
}

// const animacionYaActivada = false;
// const mq = window.matchMedia('(max-width: 767px)'); // media query para pantallas de celular

// async function activarAnimacion() {
//   if (!mq.matches && !animacionYaActivada) { // verifica que no esté en pantalla de celular
//     const elementos = document.querySelectorAll('.move-from-left, .move-from-right');
//     console.log(elementos);
//     const tamañoPantalla = window.innerHeight / 1.2;
//     for (let i = 0; i < elementos.length; i++) {
//       const posicion = elementos[i].getBoundingClientRect().top;
//       if (posicion < tamañoPantalla) {
//         await new Promise(resolve => setTimeout(resolve, 50));
//         elementos[i].classList.add('visible');
//       }
//     }
//   } else if (!mq.matches) { // verifica que no esté en pantalla de celular
//     const elementos = document.querySelectorAll('.move-from-left:not(.visible), .move-from-right:not(.visible)');
//     const tamañoPantalla = window.innerHeight / 1.2;
//     for (let i = 0; i < elementos.length; i++) {
//       const posicion = elementos[i].getBoundingClientRect().top;
//       if (posicion < tamañoPantalla) {
//         await new Promise(resolve => setTimeout(resolve, 50));
//         elementos[i].classList.add('visible');
//       }
//     }
//   }
// }



window.addEventListener('scroll', function() {
  activarAnimacion();
});

window.addEventListener('load', function() {
  activarAnimacion();
});



var modal = document.getElementById("modal");
var countdownElement = document.getElementById("countdown");
var modalLinks = document.getElementsByClassName("open-modal");
var closeButton = document.getElementById("close-modal");
var suscribeButton = document.getElementById("button-modal");
const href = suscribeButton.getAttribute('href');

// Fecha de finalización de la cuenta regresiva
var countDownDate = new Date().getTime() + (50 * 24 * 60 * 60 * 1000); // 50 días

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualizar el elemento de cuenta regresiva
  countdownElement.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}

// Iniciar la cuenta regresiva
updateCountdown();
setInterval(updateCountdown, 1000);

// Agregar controlador de eventos a todos los enlaces
for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = function() {
    modal.style.display = "block";
    return false;
  }
}


// Cerrar el modal cuando se hace clic en el botón de cerrar
closeButton.onclick = function() {
  modal.style.display = "none";
}

suscribeButton.onclick = function(){
  modal.style.display = "none";
  // window.location.href = href;
}

// Cerrar el modal cuando se hace clic en el fondo
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Evitar que el evento de clic en el fondo se propague al contenido del modal
modalContent.onclick = function(event) {
  event.stopPropagation();
}







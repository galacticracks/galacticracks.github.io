/* ==========================================
   GALACTICRACKS
   JAVASCRIPT
========================================== */


/* ==========================================
   NOTICIAS DE DEMOSTRACIÓN
========================================== */

const noticias = [

    {
        categoria: "LIGA MX",
        icono: "🇲🇽",
        fecha: "Hoy",
        titulo: "La Liga MX entra en una nueva jornada llena de emociones",
        descripcion:
            "Los equipos mexicanos buscan sumar puntos importantes mientras la competencia se intensifica."
    },

    {
        categoria: "INTERNACIONAL",
        icono: "🌎",
        fecha: "Hoy",
        titulo: "Las grandes ligas europeas vuelven a escena",
        descripcion:
            "Los gigantes del fútbol mundial se preparan para otra jornada llena de grandes enfrentamientos."
    },

    {
        categoria: "FICHAJES",
        icono: "🔥",
        fecha: "Hace 2 horas",
        titulo: "El mercado de fichajes vuelve a estar en movimiento",
        descripcion:
            "Los rumores y movimientos comienzan a tomar fuerza alrededor de varios clubes."
    },

    {
        categoria: "CHAMPIONS",
        icono: "🏆",
        fecha: "Ayer",
        titulo: "La batalla europea comienza a calentarse",
        descripcion:
            "Los mejores clubes del continente buscan conquistar nuevamente la máxima competición."
    },

    {
        categoria: "LEYENDAS",
        icono: "👑",
        fecha: "Ayer",
        titulo: "Las grandes leyendas que cambiaron la historia",
        descripcion:
            "Recordamos a algunos de los futbolistas que dejaron una huella imborrable."
    },

    {
        categoria: "CURIOSIDADES",
        icono: "🤯",
        fecha: "Hace 1 día",
        titulo: "Datos del fútbol que probablemente no conocías",
        descripcion:
            "El fútbol está lleno de historias increíbles, estadísticas extrañas y momentos únicos."
    }

];



/* ==========================================
   CURIOSIDADES
========================================== */

const curiosidades = [

    "El fútbol es uno de los deportes más populares del planeta y se juega prácticamente en todos los continentes.",

    "El balón de fútbol moderno ha cambiado muchísimo respecto a los primeros balones utilizados en la historia.",

    "Algunos de los estadios más grandes del mundo pueden recibir a más de 80,000 espectadores.",

    "Existen clubes de fútbol con más de cien años de historia.",

    "La Champions League es una de las competiciones deportivas de clubes más importantes del mundo.",

    "México ha sido sede de la Copa Mundial de la FIFA en más de una ocasión.",

    "El fútbol ha producido algunas de las rivalidades deportivas más famosas de la historia."
];


let currentFact = 0;



/* ==========================================
   CARGAR NOTICIAS
========================================== */

function loadNews() {

    const container =
        document.getElementById("newsGrid");


    container.innerHTML = "";


    noticias.forEach((noticia, index) => {

        const card =
            document.createElement("article");


        card.className = "news-card";


        card.innerHTML = `

            <div class="news-image">

                <span>
                    ${noticia.icono}
                </span>

                <div class="news-category">
                    ${noticia.categoria}
                </div>

            </div>


            <div class="news-body">

                <span class="news-date">
                    ${noticia.fecha}
                </span>

                <h3>
                    ${noticia.titulo}
                </h3>

                <p>
                    ${noticia.descripcion}
                </p>

                <a
                    href="#"
                    class="read-more"
                    onclick="openNews(${index}); return false;"
                >
                    Leer noticia →
                </a>

            </div>

        `;


        container.appendChild(card);

    });

}



/* ==========================================
   ABRIR NOTICIA
========================================== */

function openNews(index) {

    const noticia =
        noticias[index];


    showMessage(
        `Próximamente: ${noticia.titulo}`
    );

}



/* ==========================================
   MENU MOVIL
========================================== */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");


    menu.classList.toggle("active");

}


function closeMenu() {

    const menu =
        document.getElementById("mobileMenu");


    menu.classList.remove("active");

}



/* ==========================================
   SCROLL
========================================== */

function scrollToSection(id) {

    const section =
        document.getElementById(id);


    if (!section) return;


    section.scrollIntoView({
        behavior: "smooth"
    });

}



/* ==========================================
   CATEGORIAS
========================================== */

function filterCategory(category) {

    showMessage(
        `Has seleccionado: ${category}`
    );


    scrollToSection("noticias");

}



/* ==========================================
   CURIOSIDADES
========================================== */

function loadFact() {

    const factText =
        document.getElementById("factText");


    factText.textContent =
        curiosidades[currentFact];

}


function nextFact() {

    currentFact++;


    if (
        currentFact >=
        curiosidades.length
    ) {

        currentFact = 0;

    }


    loadFact();

}



/* ==========================================
   NEWSLETTER
========================================== */

function subscribe(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value;


    if (!email) {

        showMessage(
            "Escribe tu correo electrónico."
        );

        return;

    }


    showMessage(
        "🚀 ¡Listo! Te has suscrito a Galacticracks."
    );


    document
        .getElementById("email")
        .value = "";

}



/* ==========================================
   MENSAJES
========================================== */

let toastTimeout;


function showMessage(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

}



/* ==========================================
   ANIMACIONES AL HACER SCROLL
========================================== */

function setupScrollAnimations() {

    const elements =
        document.querySelectorAll(
            ".news-card, .category-card, .match-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

}



/* ==========================================
   INICIO
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadNews();

        loadFact();

        setupScrollAnimations();

    }
);
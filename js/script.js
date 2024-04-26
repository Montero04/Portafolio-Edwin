
const $form = document.querySelector('#fs-frm')
$form.addEventListener('submit', handleSubmit)//Escucha el evento submit del form y se usa la funcion handleSubmit

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);

    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        let successTitle = '';
        let successText = '';

        
        if (idiomaActual.getElementsByTagName('img')[0].src.includes('usa')) {
            successTitle = 'Message sent';
            successText = 'Thank you for contacting me';
        } else {
            successTitle = 'Mensaje enviado';
            successText = 'Gracias por contactarme';
        }

        Swal.fire({
            title: successTitle,
            text: successText,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        
        this.reset();
    }
}


const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const inicio = document.getElementById('inicionav');
const sobremi = document.getElementById('sobreminav');
const proyectos = document.getElementById('proyectosnav');
const contactame = document.getElementById('contactamenav');
const titulo = document.getElementById('titulo');
const sobremi2 = document.getElementById('sobremi2');
const p1 = document.getElementById('p1');
const lenguajes = document.getElementById('lenguajesh');
const correo = document.getElementById('correo');
const cv = document.getElementById('cv');
const proyectos2 = document.getElementById('proyectos2');
const cenfo = document.getElementById('cenfo');
const p2 = document.getElementById('p2');
const hotel = document.getElementById('hotel');
const p3 = document.getElementById('p3'); const contactame2 = document.getElementById('contactame2');
const nombre = document.getElementById('nombre');
const correo2 = document.getElementById('correo2');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementById('enviar');
const contactame3 = document.getElementById('contactame3');
const servicio = document.getElementById('servicio');
const descripcion = document.getElementById('descripcion');


// Toggle lista idiomas
idiomaActual.addEventListener('click', () => {
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            inicio.textContent = 'Home';
            sobremi.textContent = 'About Me'
            proyectos.textContent = 'Projects'
            contactame.textContent = 'Contact Me'
            titulo.textContent = 'Hello World';
            sobremi2.textContent = 'About Me';
            p1.textContent = 'Software Engineer with knowledge in .NET and Java. Persistent and always willing to face new challenges.';
            lenguajes.textContent = 'Programming languages used';
            correo.textContent = 'Email';
            cv.textContent = 'Download CV'
            cv.href='CV Ingles Edwin Montero CalvoV2 (1).pdf'
            proyectos2.textContent = 'Projects';
            cenfo.textContent = 'Cenfomon';
            p2.textContent = 'Developed in Unity with C#'
            hotel.textContent = 'Pet Hotel adding a device to control temperature, humidity and UV radiation';
            p3.textContent = 'Made with .NET and SQLServer'
            contactame2.textContent = 'Contact Me';
            nombre.textContent = 'Name:';
            correo2.textContent = 'Email:';
            mensaje.textContent = 'Message:';
            enviar.textContent = 'Send';
            contactame3.textContent = 'Contact Me';
            servicio.textContent = 'Customer service'
            descripcion.textContent = 'Talk to me through WhatsApp.'
           
            break;

        case 'español':
            inicio.textContent = 'Inicio';
            sobremi.textContent = 'Sobre Mí';
            proyectos.textContent = 'Proyectos'
            contactame.textContent = 'Contáctame'
            titulo.textContent = 'Hola Mundo';
            sobremi2.textContent = 'Sobre Mí';
            p1.textContent = 'Ingeniero de Software con conocimientos en .NET y Java. Persistente y siempre dispuesto a enfrentar nuevos retos.';
            lenguajes.textContent = 'Lenguajes Utilizados';
            correo.textContent = 'Correo';
            cv.textContent = 'Descargar CV'
            cv.href='CV Espanol Edwin Montero CalvoV2.pdf'
            proyectos2.textContent = 'Proyectos';
            cenfo.textContent = 'Cenfomon';
            p2.textContent = 'Desarrollado en Unity con C#.'
            hotel.textContent = 'Hotel para Mascotas añadiendo un dispositivo para controlar la temperatura, humedad y radiación UV.';
            p3.textContent = 'Realizado con .NET y SQLServer'
            contactame2.textContent = 'Contáctame';
            nombre.textContent = 'Nombre:';
            correo2.textContent = 'Correo Eléctronico:';
            mensaje.textContent = 'Mensaje:';
            enviar.textContent = 'Enviar';
            contactame3.textContent = 'Contáctame';
            servicio.textContent = 'Servicio al cliente'
            descripcion.textContent = 'Habla conmigo por medio de WhatsApp.'
       
            break;

        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;

        default:
            break;
    }
});
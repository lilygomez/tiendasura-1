//pasos para controlar una eqtiqueta desde js

//1. controlando el contenido

let eqtiquetaTitulo=document.getElementById("titulo")

let etiquetaImagen=document.getElementById("foto")
// console.log(eqtiquetaTitulo)

//1.1 manipulando el texto de la equiqueta (elemento) para llamar la etiqueta debo llamar la variable
eqtiquetaTitulo.textContent="¡como estas?"

//1.2 manipular un src
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/baul%20italia.webp?alt=media&token=64f57567-37fb-48af-ac81-167bd0809081"

//2  Controlando el diseño
let parrafo=document.getElementById("parrafo")
parrafo.textContent="El diseño es el proceso previo de configuración mental, «prefiguración», en la búsqueda de una solución en cualquier campo. Se aplica habitualmente en el contexto de la industria, ingeniería, arquitectura, comunicación, marketing y otras disciplinas que requieren creatividad."

//2.1 arregñar un estilo (class)
//text-darger

parrafo.classList.add("text-danger","fs-5", "text-center")

etiquetaImagen.classList.add("d-block","mx-auto")
eqtiquetaTitulo.classList.add("text-center")

//2.2 quitando un estilo (class)
parrafo.classList.remove("text-danger")

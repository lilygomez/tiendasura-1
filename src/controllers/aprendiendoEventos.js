let etiquetaBoton=document.getElementById("boton")


// el tercer tipo de detencion de Eventos
//el eventos son interacion del usuario con la pagina
//pasos para decter eventos
//cuando tengo una funciona anonima se ve asi (){} es para que el evento se hace de inmediato // es una funcion que no tiene nombre y se ejecuta una sola vez

etiquetaBoton.addEventListener("click", function (){
    console.log("estoy haciendo")
    let titulos=document.getElementById("titulos") //crear una variable
    titulos.textContent="hola carola"
    let mensaje=document.getElementById("mensaje") //crear una variable
    mensaje.textContent="vamos a ganar"
    mensaje.classList.add("text-danger")
    let foto=document.getElementById("foto")
    foto.scr="https://firebasestorage.googleapis.com/v0/b/tiendasuralgm.appspot.com/o/PUFF%20VICTORIA%201.webp?alt=media&token=213cc2ba-8c63-40c8-84e7-315a729b19ba"
})


//creando variables
//mecando con el profe

let producto1="arroz"
let producto2="leche"
let producto3="huevo"
let producto4="carane de cerdo"
let producto5="pollo"
let producto6="galletas"
let producto7="panela"
let producto8="cafe"
let producto9="tapa roja"
let producto10="cerveza"
let producto11="tomate"
let producto12="papas"
let producto13="lechuga"
let producto14="frijoles"
let producto15="aceite"

//ARREGLOS DE DATOS : ES UN VARIABLE ESPECIAL QUE  ME DEJA ALLACENAR EN MEMORIA MUCHOS DATOS DEL MISMO TIPO

//1. ARREGLO TRADICIONAL  

//NOTA: TODOS LOS ARREGLOS SE GUARDAN EN PLURAL Y EN MINUSCOLA

let productos=[]  

let numeros=[1,2,8,9,45]

let nombres= ["juan","catalina","mario","carlos"]

let contagios= [true,false,false,false,true]
//1.1 accediendo a todo los datos (elemoento de un arreglo)
console.log(numeros)
//1.2 accediendo a un solo elemento del arreglo se escoge la posicion que empieza desde 0

console.log(numeros[3])

//2. ARREGLOS ORIENTADO A OBEJTOS O ARREGLOS POO

let notas=Array(3.5,2.8,3.9,5)
console.log(notas)
console.log(notas [1])  //para saber la segunda nota es decir 2.8 se busca asi


//3. EXISTEN VARIABLES ESPECIALES PARA GUARDAR VARIOS DATOS DE TIPO DIFERENTE
//LOS OBJETOS SON LAS VARIABLES ESPECIALES QUE NOS PERMITE CREAR ARRELOS DE DIREFENTE TIPO
//OBJETO

let persona={
    nombre:"liliana",
    apellido:["gomez","martinez"],
    edad:33,
    hinchaDelMejor:false
}
//3.1 accediendo a todos los datos
console.log(persona)

//3.2 accediendo a un solo atributo del objeto
console.log(persona.nombre)

//como buscar en el OBJETO persona el ATRIBUTO apellido el ARREGLO (primer apellido)
console.log(persona.apellido[0])

// PROGRAMAR UNA BASE DE DATOS CON 10 PRODUCTOS 

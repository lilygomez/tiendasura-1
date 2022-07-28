//CREANDO FUNCIONES
//Cada lenguaje tendra su propia definion de funcion en js se llama function, las funciones siempre en minuscula y siempre se llaman en infinitivo osea en verbo : ar, er ,ir y las variables van en parentesis y el cuepo va en {}

//los arreglos en plural   una variable es local cuando va entre llaves{}


// asi se declara una funcion:
function sumarDosNumeros(numero1,numero2){
    let suma=numero1+numero2
    return("la suma es:"+suma)
}

//para usar las subrutinas hay que llamarlas
//si una varible se iguala al llamado de una funcion, es por que la funcion devuelve informacion (return)
let resultado=sumarDosNumeros(5,10)
console.log(resultado)
sumarDosNumeros(50,100)


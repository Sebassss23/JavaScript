//tipos de datos 
let nombre = "sebastian"
let edad = 18
let mayorEdad = true
let estatura

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof mayorEdad)
console.log(typeof estatura)
 
// tipos de datos complejos
let frutas = ["pera", "manzana", "melon"]

let auto = {
    modelo: 2024,
    marca: "Chevrolet",
    color: "Blanco",
    cilindraje: 2100,
    tipo: "camioneta"


}

//concatenando variables
console.log("-----------------------")
console.log("bienbenido usuario " + nombre + " su edad es " + edad + " y su fruta favorita es " + frutas[2])
// estructuras de control condicional 
if (edad < 25) {
    console.log("ES un niño")
    
}
else if(edad > 18){
    console.log("es un joven")
}
else if(edad >13){
    console.log("es un pelado")
    
}
else{
    console.log("es un niño")
}

let suscripcion = "platinium"
switch (suscripcion) {
    case "basico":
            console.log("muy suave o pobre")
        break;
    case "Gold":
        console.log("buen plan, pero sigue siendo pobre")
        break;
        case "platinium":
            console.log("el mejor plan")
            break;
    default:
        console.log("este plan no existe")
        break;
}
// estructuras de control de bucles

let contador = 5
while (contador < 11) {
    console.log("Este es el numero " + contador)
    contador = contador + 1
}

for(let i = 100; i > 0; i=i-10){
    console.log(" Contador con for numero " + i)
}

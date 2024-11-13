function saludar() {
    console.log("Hola mundo")
    alert("hello world")
}
// Algoritmo que realiza una suma con dos valores del usuario
    function suma(){
    //1. Declarar las variables necesarias para la funcion 

    let A = 0
    let B = 0
    let suma = 0
    //2. solicitar al usuario los valores
    //y estos se asignan a las variables
    A = parseInt(rompt("Ingrese el primer valor"))
    B = parseInt(prompt("ingrese el segundo valor"))
    //3 realizar el procedimiento
    suma = A + B
    //4. mostrar resultado
    alert("El resultado es: " + suma)
}
//algoritmo que realiza una suma, resta, multiplicacion y division entre dos valores ingresados por el usuario
    function opBasicas(){
        //1. Declarar las variables necesarias para la funcion 

        let n1 = 0
        let n2 = 0
        let suma = 0
        let resta = 0
        let multiplicacion = 0
        let division = 0
        //2. solicitar al usuario los valores
        //y estos se asignan a las variables
        n1= parseInt(prompt("Ingrese el primer valor: "))
        n2 = parseInt(prompt("ingrese el segundo valor: "))
        //3 realizar el procedimiento
        suma = n1 + n2
        resta = n1 - n2
        multiplicacion = n1*n2
        division = n1/n2

        //4. mostrar resultado
        alert("El resultado de la suma es: " + suma)
        alert("El resultado de la resta es: " + resta)
        alert("El resultado de la multiplicacion es: " + multiplicacion)
        alert("El resultado de la division es: " + division)
        



}
//3. algoritmo que determine el cuadrado de un numero 
// cuadrado de un numero//
    function numcuadrado(){
    let  N1 = 0
    let alcuadrado = 2
    N1 = parseInt(prompt(" Ingrese el numero: "))
    alcuadrado = N1 * N1;
    alert("El resultado de elevar al cuadrado " + alcuadrado)

}


//4 boton REALIZAR EL ALGORITMO QUE DETERMINE EL AREA DE UN TRIANGULO A PARTIR DE LA BASE Y LA ALTURA INGRESADO POR EL USUARIO B*H/2//



    function atriangulo(){
        
    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//

    let base = 0
    let altura = 0
    let sobre = 2
    let atriangulo = 0

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    base = parseInt(prompt(" Ingrese la base "))
    altura = parseInt(prompt(" ingrese la altura"))


    //3.REALIZAR EL PROCEDIMIENTO//

    atriangulo = (base * altura) / sobre

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de el area del triangulo es " + atriangulo)


    }
//CONVERSION DE UNIDADES: REALIZAR UN SISTEMA QUE CONVIERTA EN KILOMETROS, METROS UN VALOR DADO EN PULGADAS Y CM//

    function cvunidades(){

    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//

    let kpg = 39370
    let kcm = 100000
    let mpg = 39.37
    let mcm =100
    let pg =0
    let cm = 0
    let conkpg = 0
    let conkcm = 0
    let conmpg = 0
    let conmcm = 0

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    pg = parseInt(prompt(" Ingrese las pulgadas "))
    cm = parseInt(prompt(" Ingrese los cm"))

   //3.REALIZAR EL PROCEDIMIENTO//

    conkpg = pg / kpg
    conkcm = cm / kcm
    conmpg = pg / mpg
    conmcm = cm / mcm

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de pg a km es " + conkpg)
    alert(" El resultado de pg a m es " + conmpg)
    alert(" El resultado de cm a km es " + conkcm)
    alert(" El resultado de cm a m es " + conmcm)


    }
    //6. algoritmo que termine si el numero es par o impar//
    function paroimpar(){

        n1 = 0
        n1= parseInt(prompt("ingrese el numero: "))
        if (n1 % 2 == 0){
            alert(n1 + " es numero par")
        }
        else{
            alert(n1 + " es numero impar")
        }
    }
    



    //7. algoritmo que determine el mayor de dos numeros ingresados por el usuario//
    function nummayor(){
        let n1=0
       let n2=0
        n1 = parseInt(prompt("Ingrese el primer numero: "))
        n2 = parseInt(prompt("Ingrese el segundo  numero: "))
        if(n1>n2){
            alert(n1+ " es mayor ")
        }
        else if(n1==n2){
            alert("los numeros son iguales")
        }
        else{
            alert(n2 +" es mayor")
        }
        
    }
    //8. algorimo que determine el numero menor de tres numeros //
    function nummenor(){

        let n1 = parseInt(prompt("Ingrese el primer numero: "))
        let n2 = parseInt(prompt("Ingrese el segundo  numero: "))
        let n3 = parseInt(prompt("Ingrese el tercer numero: "))
        if((n1<n2)&&(n1<n3)){
            alert(n1 +" es menor que " + n2 + n3)
        }
        else if((n2<n1)&&(n2<n3)){
            alert(n2 +" es menor que " + n1 + n3)

        }
        else if ((n3<n1)&&(n3<n3)){
            alert(n3+ " es menor que " + n1 + n2)

        }
        else{
            alert ("todos son iguales")
        }
    }
    //9. el colegio abc requiere un sistema que capture el nombre del estudiante, materia, y siete calificaciones entre 1 y 10 con esta informacion determinar si el estudiante aprobo o reprobo teniendo en cuenta que aprueba con 6.1// 
    function colegio(){
        let nombre = prompt("Ingrese su nombre:")
        let materia= prompt("Ingrese la materia: ")
        let nota1 = parseInt(prompt("Ingrese una nota de 1-10"))
        let nota2 = parseInt(prompt("Ingrese una nota de 1-10"))
        let nota3 = parseInt(prompt("Ingrese una nota de 1-10"))
        let nota4 = parseInt(prompt("Ingrese una nota de 1-10"))
        let nota5 = parseInt(prompt("Ingrese una nota de 1-10"))
        let nota6 = parseInt(prompt("Ingrese una nota de 1-10"))
        let nota7 = parseInt(prompt("Ingrese una nota de 1-10"))
        let pro=0
        pro=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7
        if(pro >= 6.1){
            alert("el estudiante " + nombre + " aprobo la " + materia + "con promedio de " + pro)

        }
        else{
            alert("el estudiante " + nombre + " aprobo la" + materia + " con promedio de " + pro)
        }
    }
    //10.un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual del 0.7%  //

    function inversion() {
        let capital, tiempo, interesGanancia,totalGanancia
        capital = parseInt(prompt("Por favor ingrese el capital: "))
        tiempo = parseInt(prompt("Por favor ingrese el tiempo en años: "))
        interesGanancia=(capital * 0.084) * tiempo
        totalGanancia=capital+interesGanancia
        alert("Cachon su ganancia es de:" + interesGanancia)
        alert("Cachon su ganancia total es de: " + totalGanancia)
        
    }
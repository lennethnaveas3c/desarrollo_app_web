//creacion de variables
console.log("todo bien");


//ejercicio 1
function MostrarTemperatura(){

let temperatura = 27;      //temperatura
if (temperatura <= 0) {    //si la emperatura es meno o igual a 0
    alert("hace frio");
} else {
    if (temperatura >=0 + 1 && temperatura <=25) {  //si la temperatura es mayor o igual a 0 y menor o igual a 25
        alert("la temperatura es agradable");
    }
    if (temperatura >=25) {   //si la temperatura es mayor o igual a 25
        alert("hace calor");
    }
}
}

//ejercicio 2
function MostrarUsuarioContraseña(){
    let Usuario = "usuario123"; //nombre del usuario
    let Contraseña = "secreto"; //nombre de la contraseña
    let respuesta_Usuario = prompt("Ingrese su nombre de usuario");
    let respuesta_Contraseña = prompt("Ingrese su contraseña");
    if (Usuario == respuesta_Usuario && Contraseña == respuesta_Contraseña) {
        alert("Acceso concedido")
    } else {
            alert("Acceso denegado")
    }
}

//ejercicio 3
function MostrarSigno(){
    let numero = 0;
    if (numero >= +1) {
        alert("El numero es positivo")
    } else {
        if (numero <= -1){
            alert("El numero es negativo")
        } else {
            if (numero = 0){
                alert("El numero es cero")
            }
        }
    }
}

//ejercicio 4
function MostrarPuntuacion(){
    let puntuacion = 
}
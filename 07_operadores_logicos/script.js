//creacion de variables
console.log("todo bien");


//ejercicio 5
function MostrarVerificacion(){
    let 
}

//ejercicio 6
function MostrarDescuento(){
    let Usuario = "usuario123";
    let Contraseña = "secreto"; 
    let respuesta_Usuario = prompt("Ingrese su nombre de usuario");
    let respuesta_Contraseña = prompt("Ingrese su contraseña"); 
    if (Usuario == respuesta_Usuario && Contraseña == respuesta_Contraseña) { 
        alert("Acceso concedido")
    } else {
            alert("Acceso denegado")
    }
}

//ejercicio 7
function MostrarValidacion() {
    let numero = parseInt(prompt("Introduce un numero")); 
    if (numero < 0) {
        alert("El numero es negativo"); 
    } else if (numero > 0) {
        alert("El numero es positivo"); 
    } else {
        alert("El numero es cero"); 
    }
}


//ejercicio 8
function MostrarCondiciones() {
    let puntuacion = parseInt(prompt("Introduce tu puntuación:"));
    if (puntuacion >= 90) {     
        alert("Excelente");
    } else if (puntuacion >= 70 && puntuacion < 90) { 
        alert("Buen trabajo");
    } else {
        alert("Necesitas mejorar");
    }
}


//ejercicio 9
function MostrarRestringido() {

}




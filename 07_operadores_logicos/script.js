//creacion de variables
console.log("todo bien");


//ejercicio 5
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

//ejercicio 6
function MostrarUsuarioContraseña(){
    let Usuario = "usuario123"; //nombre del usuario
    let Contraseña = "secreto"; //nombre de la contraseña
    let respuesta_Usuario = prompt("Ingrese su nombre de usuario");
    let respuesta_Contraseña = prompt("Ingrese su contraseña"); //para poder ingresar un dato
    if (Usuario == respuesta_Usuario && Contraseña == respuesta_Contraseña) { //el dato correspondiente a cada preguna
        alert("Acceso concedido")
    } else {
            alert("Acceso denegado")
    }
}

//ejercicio 7
function MostrarSigno() {
    let numero = parseInt(prompt("Introduce un numero")); //introducir un numero
    if (numero < 0) {
        alert("El numero es negativo"); //alerta numero negativo
    } else if (numero > 0) {
        alert("El numero es positivo"); //alerta numero positivo
    } else {
        alert("El numero es cero"); //alerta numero 0
    }
}


//ejercicio 8
function MostrarPuntuacion() {
    let puntuacion = parseInt(prompt("Introduce tu puntuación:")); //puntuacion
    if (puntuacion >= 90) {     //puntuacin mayor o igual a 90
        alert("Excelente");
    } else if (puntuacion >= 70 && puntuacion < 90) { //puntuacion mayor a 70 y menor a 90
        alert("Buen trabajo");
    } else {
        alert("Necesitas mejorar");
    }
}





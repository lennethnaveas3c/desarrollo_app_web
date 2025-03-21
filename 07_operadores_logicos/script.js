//creacion de variables
console.log("todo bien");


//ejercicio 5
function MostrarVerificacion(){
    let edad = parseInt(prompt("Introduce tu edad:"));
    let aceptaTerminos = confirm("¿Aceptas los terminos y condiciones?");
    if (edad >= 18 && aceptaTerminos) {
        alert("Acceso concedido");
    } else {
        alert("Acceso Denegado");
    }
}


//ejercicio 6
function MostrarDescuento() {
    let edad = parseInt(prompt("Introduce tu edad:"));
    let esEstudiante = confirm("¿Eres estudiante?");
    if (edad >= 60 || esEstudiante) {
            alert("Descuento aplicado");
    } else {
            alert("No tienes descuento");
    }
}


//ejercicio 7
function MostrarValidacion() {
    let usuario = prompt("Introduce tu nombre de usuario:");
    let contraseña = prompt("Introduce tu contraseña:");

    // Verifica si alguna de las dos variables está vacía
    if (!usuario || !contraseña) {
        alert("Error: Debes ingresar usuario y contraseña");
    } else {
        alert("Inicio de sesión exitoso");
    }
}

//ejercicio 8
function MostrarCondiciones() {
    let energiaSuficiente = confirm("¿La máquina tiene suficiente energía?");
    let interruptorEncendido = confirm("¿El interruptor está encendido?");

    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
    }
}


//ejercicio 9
function MostrarRestringido() {
    let bloqueado = confirm("¿Tienes acceso?");
    let tieneCredenciales = confirm("¿Tienes credenciales?");

    if (!bloqueado || tieneCredenciales) {
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado");
    }
}




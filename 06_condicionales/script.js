//creacion de variables
console.log("todo bien");

function MostrarTemperatura(){

let temperatura = 27;
if (temperatura <= 0) {
    alert("hace frio");
} else {
    if (temperatura >=0 + 1 && temperatura <=25) {
        alert("la temperatura es agradable");
    }
    if (temperatura >=25) {
        alert("hace calor");
    }
}
}

function MostrarUsuarioContraseña(){
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
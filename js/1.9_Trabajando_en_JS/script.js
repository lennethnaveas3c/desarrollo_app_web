//creacion de variables
console.log("todo bien");


//ejercicio 1:
function MostrarRegistro() {
    let participantes = [];
    let nombre = prompt("Intoduce un nombre: (escribe 'salir' para terminar el registro")
    while (nombre != "salir"){
        participantes.push(nombre);
        nombre = prompt("Introduce un nombre: (escribe 'salir' para terminar el registro)");
    }
    if (participantes.length > 5) {
        console.log ("tenemos mas de 5 participantes");
    }
    alert(`se han registrado ${participantes.length} participantes`);
    console.log(`participantes: ${participantes.join(", ")}`);
}


//ejercicio 2:
function MostrarCaja() {
}


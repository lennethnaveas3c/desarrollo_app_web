/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = [];
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; //Limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); // Agregar valor al final

    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
    }
    mostrarListaCompra()
}
// ------------------------------------------------------------------------------------
// Ejercicio 3 y 4
let colores = []

function mostrar_lista_colores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";

    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    }; // Agregar valor al final


    colores.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    console.log(colores);
    mostrar_lista_colores()
}
// -------------------------------------------------------------------------------------
let colores2 = []

function mostrar_lista_colores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";

    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    }; // Agregar valor al final


    colores2.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrar_lista_colores2()
}


function eliminar_primer_elemento() {
    if (colores2.length > 0) {
        colores2.shift();
    }
    mostrar_lista_colores2()

}

//ejercicio 5
let numeros = [10, 20, 30];

function mostrar_lista_numeros_ej5() {
    const lista = document.getElementById("resulatado5");
    lista.innerHTML = "";

    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();

    if (valor === "") {
        return;

    };

    numeros.unshift(valor);
    input.value = "";
    input.focus();
    moastrar_lista_numeros()
}

function eliminar_primer_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrar_lista_numeros()
}

function eliminar_ultimo_elemento_ej5() {
    if (numeros.legth > 0) {
        numeros.pop();
    }
    mostrar_lista_numeros()
}

function agregar_ultimo_elemento_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();

    if (valor === "") return;

    numeros.push(valor);

    input.value = "";
    input.focus();

    mostrar_lista_numeros()
}


//ejercicio 6 lo mismo de arriba al aprecer solo cambia el id o eso dijeron yo q se
let numeros = [10, 20, 30];

function mostrar_lista_numeros_ej5() {
    const lista = document.getElementById("resulatado5");
    lista.innerHTML = "";

    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();

    if (valor === "") {
        return;

    };

    numeros.unshift(valor);
    input.value = "";
    input.focus();
    moastrar_lista_numeros()
}

function eliminar_primer_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrar_lista_numeros()
}

function eliminar_ultimo_elemento_ej5() {
    if (numeros.legth > 0) {
        numeros.pop();
    }
    mostrar_lista_numeros()
}

function agregar_ultimo_elemento_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();

    if (valor === "") return;

    numeros.push(valor);

    input.value = "";
    input.focus();

    mostrar_lista_numeros()
}

//ejercicio 7 creo
function agregar_inicio_orden() {
    const input = document.getElementById(lista6);
    const valor = input.value.trim();

    if (valor === "") {
        return;
    }
    ondragend.unshift(valor);
    input.value = "";
    input.focus();
    mostrar_lista_orden()
}

//ejercicio 6 en clase
let orden = [];

function mostrar_lista_orden() {
    const lista = document.getElementById("resultado6");
    lista.innerHTML = "";

    for (let i = 0; i < orden.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${orden[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio_orden() {
    const li = document.createElement("lista6");
    const valor = input.value.trim();

    if (valor === "") {
        return;
    };

    orden.unshift(valor);
    input.value = "";
    input.focus();
    mostrar_lista_orden();
}

// ejercicio 7 en clase

let historial = []; //historial es un arreglo por que almacenara los elementos que se eliminen []
let eliminados = [];
const input = document.getElementById("lista7");

function mostrar_historial() {
    const lista = document.getElementById("resultado7"); //const(tante) es un elemento que no se puede modificar
    lista.innerHTML = "";

    for (let i = 0; i < historial.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${historial[i]}`;
        lista.appendChild(li);
    }
}

function eliminarUltimo() {
    if (historial.length > 0) {
        const borrados = historial.pop();
        eliminados.push(borrados);
    }

    mostrarEliminados();
    mostrarMensajes();
}

function agregarFinal() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim();

    if (valor === "") return;

    historial.push(valor);

    input.value = "";
    input.focus(); //activa el campo como un foco

    mostrarMensajes()
}
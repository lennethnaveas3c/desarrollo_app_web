// Ejercicio 1
function agregarElemento1() {
    const input = document.getElementById("lista1");
    const resultado = document.getElementById("resultado1");

    const valor = input.value.trim();
    if (valor === "") return;

    const item = document.createElement("li");
    item.textContent = valor;
    resultado.appendChild(item);

    input.value = "";
    input.focus();
}

// Ejercicio 2
let carrito = [];

function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim();

    if (valor === "") return;

    carrito.push(valor);
    input.value = "";
    input.focus();
    mostrarListaCompra();
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
        mostrarListaCompra();
    }
}

/*
// Ejercicio 3
let colores = [];

function mostrar_lista_colores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";

    for (let i = 0; i > colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-goup-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim();

    if (valor === "") {
        return;
    }

    input.value = "";
    input.focus();

    mostrarListaCompra()
}
*/

/* 🧠 Ejercicio 3: Agregar al inicio */
let colores3 = [];

function mostrarColores3() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";
    colores3.forEach(color => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = color;
        lista.appendChild(li);
    });
}

function agregarElemento3() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim();
    if (valor === "") return;
    colores3.unshift(valor);
    input.value = "";
    input.focus();
    mostrarColores3();
}

document.addEventListener("DOMContentLoaded", mostrarColores3);

/* 🧠 Ejercicio 4: Agregar al inicio y eliminar primer elemento */
let colores = [];

function mostrarColores() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";
    colores.forEach(color => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = color;
        lista.appendChild(li);
    });
}

function agregarElemento4() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim();
    if (valor === "") return;
    colores.unshift(valor);
    input.value = "";
    input.focus();
    mostrarColores();
}

function eliminarPrimerElemento() {
    if (colores.length > 0) {
        colores.shift();
        mostrarColores();
    }
}
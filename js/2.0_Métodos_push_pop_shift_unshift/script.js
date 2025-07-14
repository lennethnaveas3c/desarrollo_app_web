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

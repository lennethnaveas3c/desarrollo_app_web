//creacion de variables
console.log("todo bien");

//no me resulta
/*
let resultado = [];
function agregarElementoCompra() {
    let elemento = document.gerElementById("lista").value;
    resultado += document.getElementById("resultado").innerHTML = 
    `<li>${elemento}</li>`;
}
*/

/*
//ejemplo 1 

const resultado = document.getElementById("resulado");

function agregarElementoCompra() {
    //valor input
    let elemento = document.getElementById("lista").value;
    //crear elemento html --> createElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--innertext</li>
    resultado.appendChild(item);
}



//ejemplo 2
let carrito = [];
function agregarElemento2() {
    let elemento = document.getElementById("lista2").value;
    carrito.push(elemento)
    documento.getElementById(resultado2).innerTextHTML = Carro: `${carrito.join(" - ")}`;
}
*/

/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// referencia ul

//ejercicio 1
const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}

//ejercicio 2
let carrito = [];
function mostrarListaCompra(){
    const listta = document.getElementById("resultado2");
    lista.innerHTML = ""; //limpiar antes de mostrar

    for (let i = 0; i < carrito.lencht; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `-${carrito[i]}`;
        lista.appendChild(li);
        mostrarListaCompra()
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); //guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); //agregar valor al final
    
    input.value = "";
    input.focus(); //agrega foco hacia el input
    mostrarListaCompra()
}

function eliminarUltimoElemento() {
    if (carrito.length > 0){
        carrito.pop();
        mostrarListaCompra()
    }
}
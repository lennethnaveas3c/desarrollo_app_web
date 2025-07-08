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
//crear funcion de prueba this
function example(elemento){
    console.log("elemento clickeado", elemento);

}

//creacion de funcion turnoff
function turnOff(element){
    if (element.innerText == "On"){
        element.innerText = "Off";
    } else {
    element.innerText = "On";
    }
}

//fuction para eliminar boton
function hide(element) {
    element.remove();
}
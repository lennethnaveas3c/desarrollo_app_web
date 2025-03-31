//creacion de variables
console.log("todo bien");


//ejercicio 1: Tabla de multiplicar personalizada
function MostrarMulti() {
    let num = parseInt(prompt("Ingrese se numero para la tabla de multiplicar:"));
    if (isNaN(num)){
        alert("ingrese un numero valido"); //verifica si es un numero
        return; //si no es un numero valido termina la funcion
    }
    let array = []; //array lista de elementos
    for (let i = 1; i <= 10; i++){
        let resultado = num * i; //multiplicacion
        array.push(resultado); //inserta datos en el array
    }
    alert(`la tabla de multiplicar ${array.join(" - ")}`); // muestra el resultado
}



//ejercicio 2: Sumar N números ingresados por el usuario
function MostrarIngre() {
    let n = parseInt(prompt("Ingrese la cantidad de números a sumar:")); //pide el numero de elementos a sumar
    if (isNaN(n) || n <= 0) {  //verifica si es un numero
        alert("Ingrese una cantidad válida.");
        return; //si no es un numero valido termina la funcion
    }
    let suma = 0; // Variable para almacenar la suma
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        if (isNaN(num)) {
            alert("Ingrese un número válido.");
            i--; // Restamos para que no cuente esta iteración inválida
            continue; //si no es un numero valido vuelve a pedir el mismo numero
        }
        suma += num; // Acumulamos la suma
    }
    alert(`La suma total es: ${suma}`); //muestra el resultado
    console.log(`La suma total es: ${suma}`); //muestra el resultado en la consola
}


//ejercicio 3: Mostrar los números pares entre dos valores dados

function MostrarVal() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    // Validar que los valores ingresados sean números
    if (isNaN(num1) || isNaN(num2)) { 
        alert("Ingrese un número válido.");
        return; // Salir de la función si la entrada no es válida
    }
    // Intercambiar los valores si num1 es mayor que num2
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    let array = []; // Lista de números pares
    // Recorrer el rango y encontrar números pares
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    // Mostrar el resultado fuera del bucle
    if (array.length > 0) {
        alert("Los números pares son: " + array.join(", "));
        console.log("Los números pares son: " + array.join(", "));
    } else {
        alert("No hay números pares en el rango dado.");
    }
}

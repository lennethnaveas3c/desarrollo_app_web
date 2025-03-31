//creacion de variables
console.log("todo bien");


//ejercicio 1: Tabla de multiplicar personalizada
function MostrarMulti() {
    let num = parseInt(prompt("Ingrese se numero para la tabla de multiplicar:"));
    let array = []; //array lista de elementos
    for (let i = 1; i <= 10; i++){
        let resultado = num * i; //multiplicacion
        array.push(resultado); //inserta datos en el array
        alert(`la tabla de multiplicar ${array.join(" - ")}`); // muestra el resultado
    }
}



// Ejercicio 1: Tabla de multiplicar personalizada
function MostrarMulti() {
    let num = parseInt(prompt("Ingrese su número para la tabla de multiplicar:"));
    
    if (isNaN(num)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let array = []; // Array para almacenar los resultados
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i; // Multiplicación
        array.push(resultado); // Inserta datos en el array
    }

    alert(`La tabla de multiplicar: ${array.join(" - ")}`); // Muestra el resultado
}





//ejercicio 2: Sumar N números ingresados por el usuario
function MostrarIngre() {}


//ejercicio 3: Mostrar los números pares entre dos valores dados
function MostrarVal() {}
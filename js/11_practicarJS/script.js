//creacion de variables
console.log("todo bien");


//ejercicio 1:
function MostrarNaturales() {
    let n = parseInt(prompt("Ingrese un numero:"));
    let array = [];
    let suma = 0;
    for(let i = 1; i <= n; i++){
        array.push(i);
        suma += i;
    }
    alert(`La suma de los primeros ${n} numeros naturales es:\n ${suma}`);
    alert(`Los primeros ${n} numeros naturales son:\n ${array.join(" -")}`);
}


//ejercicio 2:
function MostrarPares() {
    let array = [];
    for(let n = 1; n <= 200; n++){
        if(n % 2 == 0){
            array.push(n);
        }
    }
    alert(`Los primeros 100 numeros pares son:\n ${array.join(" -")}`);
}


//ejercicio 3:
    function Mostrarimpares() {
        let array = []; 
        for(let n = 1; n <= 200; n++){ //genera un bucle que llega hasta 200
            if(n % 2 == 1){ 
                array.push(n);  
            } 
        }
        alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
    } 


//ejercicio 4: 
function MostrarTeclado() {
    let array = [];
    let suma = 0;
    let cantidad = 5;

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        while (isNaN(num)) {
            num = parseInt(prompt(`Entrada inválida. Ingrese el número ${i + 1} nuevamente:`));
        }
        array.push(num);
        suma += num;
    }

    alert(`La suma de los 5 números es: ${suma}\nNúmeros ingresados: ${array.join(" - ")}`);
}


//ejercicio 5:
function MostrarSumar() {
    let n = parseInt(prompt("¿Cuántos números desea sumar?"));
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Entrada inválida. Ingrese un número mayor a 0:"));
    }
    let array = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        while (isNaN(num)) {
            num = parseInt(prompt(`Entrada inválida. Ingrese el número ${i + 1} nuevamente:`));
        }
        array.push(num);
        suma += num;
    }
    alert(`La suma de los ${n} números es: ${suma}\nNúmeros ingresados: ${array.join(" - ")}`);
}


//ejercicio 6:
function MostrarNumeros() {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let opcion = prompt("Elija una operación:\n1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno o ambos valores ingresados no son válidos.");
        return;
    }
    let resultado;
    if (opcion === "1") {
        resultado = num1 + num2;
    } else if (opcion === "2") {
        resultado = num1 - num2;
    } else if (opcion === "3") {
        resultado = num1 * num2;
    } else if (opcion === "4") {
        if (num2 === 0) {
            alert("No se puede dividir por cero.");
            return;
        }
        resultado = num1 / num2;
    } else {
        alert("Opción inválida.");
        return;
    }
    alert(`El resultado es: ${resultado}`);
}


//ejercicio 7:
function MostrarNumerosPares() {
    let n = parseInt(prompt("¿Cuantos numeros pares desea ingresar?"));
    let array = [];
    let suma = 0;
    for(let i = 0; i < n; i++){
        let num = parseInt(prompt(`Ingrese el numero ${i + 1}:`));
        while (isNaN(num) || num % 2 !== 0) {
            num = parseInt(prompt(`Entrada ivalida. Ingrese un numero par:`));
        }
        array.push(num);
    }
    alert(`Los numeros pares ingresados son:\n ${array.join(" - ")}`);
    alert(`La suma de los numeros pares ingresados es:\n ${array.reduce((a, b) => a + b, 0)}`);
} //tu lo ingresas todos los numeros pares


//ejercicio 8:
function MostrarLosNumerosPares() {
    let n = parseInt(prompt("¿Cuantos numeros pares desea ingresar?"));
    let sum = 0;
    let array = [];
    for (let i = 1; i <= n; i++){
        if(i % 2 == 0){
            sum += i;
            array.push(i);
        }
    }
    alert(`${array.join(" + ")} = ${sum}`)
} //te da los primeros numeros que tu ingreses


//ejercicio 9:
function MostrarNumerosImpares() {
    let n = parseInt(prompt("¿Cuantos numeros impares desea ingresar?"));
    let array = [];
    let suma = 0;
    for(let i = 0; i < n; i++){
        let num = parseInt(prompt(`Ingrese el numero ${i + 1}:`));
        while (isNaN(num) || num % 2 === 0) {
            num = parseInt(prompt(`Entrada invalida. Ingrese un numero impar:`));
        }
        array.push(num);
    }
    alert(`Los numeros impares ingresados son:\n ${array.join(" - ")}`);
}


//ejercicio 10:
function MostrarLosNumerosImpares() {
    let n = parseInt(prompt("¿Cuantos numeros impares desea ingrear?"));
    let sum = 0;
    let array = [];
    for (let i = 1; i <= n; i++){
        if(i % 2 == 1){
            sum += i;
            array.push(i);
        }
    }
    alert(`${array.join(" +")} = ${sum}`)
}


//ejercicio 11:
function MostrarPrimerosMultiplos() {}


//ejercicio 12:
function MostrarDiagramaDeFlujo() {}


//ejercicio 13:
function MostrarGradosCaF() {}


//ejercicio 14:
function MostrarPalabra() {}


//ejercicio 15
function MostrarNumerosPrimos() {}


//ejercicio 16:
function MostrarCaracteres() {}


//ejercicio 17:
function MostrarValoresImprimir() {}


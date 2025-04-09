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


//ejercicio 4:  //usa un for y luego un while
function MostrarTeclado() {
    let n = parseInt(prompt("Ingrese un numero hasta el 5:"));
    let array = [];
    let cantidad = 5;
    let suma = 0;
    let i = 1;
    for (let i = 1; i < n; i++){
        let num = parseInt(prompt("Ingrese un numero:"));
        array.push(num);
        suma += num;
    }
}


//ejercicio 5:
function MostrarSumar() {}


//ejercicio 6:
function MostrarNumeros() {}


//ejercicio 7:
function MostrarNumerosPares() {} //tu lo ingresas todos los numeros pares


//ejercicio 8:
function MostrarLosNumerosPares() {} //te da los primeros numeros que tu ingreses


//ejercicio 9:
function MostrarNumerosImpares() {}


//ejercicio 10:
function MostrarLosNumerosImpares() {}


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

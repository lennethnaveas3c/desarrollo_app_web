//creacion de variables
console.log("todo bien");


//ejercicio Bucle while: Imprimir del 1 al 5
function MostrarUnoCinco() {
    let i = 1;
    let array = [];
    while (i <= 5){
        array.push(i);
        i++;
    }
    alert(`los numeros son ${array.join(" -")}`);
}


//ejercicio Bucle while: Cuenta regresiva del 10 al 1
function MostrarDies() { //fuction es funcion
    let count = 10;
    let array = []; //array lista de elementos
    while (count >= 1){
        array.push(count); //inserta datos en el array
        count--;
    }
    alert(`los numeros son ${array.join(" - ")}`);
}


//ejercicio Bucle for: Sumar los primeros 5 números
function MostrarCinco() {
    let suma = 0;
    for (let i = 1; i <= 5; i++){
        suma += i;
    }
    alert(`La suma de los primeros 5 numeros es ${suma}`);
}


//ejercicio Bucle for: Imprimir múltiplos de 2 del 1 al 10
function MostrarUnoDies() {}
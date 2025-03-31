//creacion de variables
console.log("todo bien");


//ejercicio Bucle while: Imprimir del 1 al 5
function MostrarUnoCinco() {
    let n = parseInt(prompt("Ingrese un numero"));
    let count = 1;          //count es = a 1
    let array = [];         //array = a lista de elementos o []
    while (count <= n){     //n es = a 5
        array.push(count);  //inserta el valor de count 1 
        count++;
    }
    alert(`los numeros son ${array.join(" - ")}`);
}


//ejercicio Bucle while: Cuenta regresiva del 10 al 1
function MostrarDies() { //fuction es funcion
    let count = 10;
    let array = []; //array lista de elementos
    while (count >= 1){                               //se sigue cumpliendo la condicion por eso se repite el while
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
function MostrarUnoDies() {
    let array = [];
    for (let i = 1; i <= 10; i ++){
        if (i % 2 == 0){
            array.push(i);
            alert(`los numeros son ${array.join(" -")}`);
        }
    }
}
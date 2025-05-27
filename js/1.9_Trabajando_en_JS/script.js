//creacion de variables
console.log("todo bien");


//ejercicio 1:
function MostrarRegistro() {
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
function MostrarCaja() {
    let array = [];
    for(let n = 1; n <= 200; n++){
        if(n % 2 == 0){
            array.push(n);
        }
    }
    alert(`Los primeros 100 numeros pares son:\n ${array.join(" -")}`);
}


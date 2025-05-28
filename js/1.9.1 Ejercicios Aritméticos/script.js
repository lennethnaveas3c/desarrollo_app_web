//creacion de variables
console.log("todo bien");


//ejercicio 1:
function MostrarPromedios() {
    let notas = [];
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt("Introduce una nota: "));
        if (!isNaN(nota) || nota < 1 || nota > 7) {
            notas.push(nota);
            suma += nota;
        } else {
            alert("nota ivalida, porfavor ingrese un numero entre el 1.0 al 7.0")
            i--;
        }
    }
    let promedio = suma / notas.length;
    alert(`La nota promedio es ${promedio.toFixed(2)}`);
    if (promedio >= 4.0) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}


//ejercicio 2:
function MostrarParYInpar() {
    let numeros = [];
    let par = 0;
    let impar = 0;
    for (let i = 0; i < 6; i++) {
        let numero = parseInt(prompt("Introduce un numero: "));
        if (!isNaN(numero)) {
            numeros.push(numero);
            if (numero % 2 === 0) {
                par++;
            }
            else {
                impar++;
            }
        }
    }
    console.log(`cantidad de numeros pares: ${par} \n cantidad de numeros impares: ${impar}`);
}


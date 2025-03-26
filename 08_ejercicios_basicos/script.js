//creacion de variables
console.log("todo bien");


//ejercicio 14
function MostrarParImpar() {
    let numero = parseInt(prompt("Introduce un numero")); 
    if (numero % 2 == 0){
        alert("El numero es par");
    } else {
        alert("El numero es impar");
    }
}


//ejercicio 15
function MostrarIndiceMasa() {
    let peso = parseFloat(prompt("Introduce tu peso en kg"));
    let altura = parseFloat(prompt("introduce tu altura en metros"));
    let imc = peso / (altura * altura);
    if (imc < 18.5){
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc < 24.9){
        alert("Normal");
    } else if (imc >= 25){
        alert("Sobrepeso");
    }
}


//ejercicio 16





function MostrarNotas() {
    let nota1 = parseFloat(prompt("Introduce la nota 1"));
    let nota2 = parseFloat(prompt("Introduce la nota 2"));
    let nota3 = parseFloat(prompt("Introduce la nota 3"));
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 4.0){
        alert ("Reprobado");
    } else if (promedio >= 4.0 )
        alert ("Aprobado");
}
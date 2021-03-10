//NIVELL 1

// Exercici 1
// L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' (per activar la consola ->; F12). Pista: Console.log()

console.log('Hola mundo');

// Exercici 2
// Crea un alert que mostri el teu nom:

alert('!Me llamo Edu!');

// Exercici 3
// Crea una variable que contingui el teu nom i un altre que contingui el teu cognom.

let nom = 'Edu';
let cognom = 'Sanchez';
console.log(nom + ' ' + cognom);

// Exercici 4
// Crea dos variables amb dos números i fes una suma entre ells.

let num1 = 4;
let num2 = 2;
let suma = num1 + num2;
console.log('La suma entre ' + num1 + ' y ' + num2 + ' ' + 'es ' + suma);

// Exercici 5
// Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF)

let nota_examen = 4.6;
if(nota_examen <5) {
    alert('Ohh has suspendido el examen con un ' + nota_examen)
} else {
    alert('Has aprobado el examen con un ' + nota_examen)
}

// Exercici 6
// Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau. Després intenta fer-ho remplaçant les o per les u.

let frase = 'Tinc un cotxe de color blau';
let color = frase.replace('blau','verd');
console.log(color);
let lletra = frase.replace(/o/g,'u');
console.log(lletra);

// Exercici 7
// Donat el seguit llistat d'objectes 'taula', 'cadira', 'ordinador', 'libreta', per un bucle que mostri per pantalla cada objecte i la seva posició al llistat.
    
let array = ['taula', 'cadira','ordinador','libreta'];
for(let i = 0; i < array.length; i++) {
    console.log(`L'objecte ${array[i]} esta a la posicio ${i}`);
}

// Exercici 8
// Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2. 
// Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla.

function calculadora(operador,valor1,valor2) {
    if(operador === 'resta') {
        let res = valor1 - valor2;
        return res;
    } else if(operador === 'suma') {
        let res = valor1 + valor2;
        return res;
    } else if(operador === 'multiplicacio') {
        let res = valor1 * valor2;
        return res;
    }

}
console.log(calculadora('resta', 40, 20));


//NIVELL 2

// Aprofita la funció "calculadora" de l'exercici anterior per crear una calculadora completa amb opcions per sumar, restar, multiplicar i dividir. Hauràs de controlar el Zero com a denominador d'una divisió.

let cal;
document.getElementById('suma').addEventListener('click', () => {cal = 'sumar';});
document.getElementById('resta').addEventListener('click', () => {cal = 'restar';});
document.getElementById('multiplicar').addEventListener('click', () => {cal = 'multiplicar';});
document.getElementById('dividir').addEventListener('click', () => {cal = 'dividir';});


document.getElementById('calcular').addEventListener('click', () =>{
    let valor1 = parseFloat(document.getElementById('valor1').value); 
    let valor2 = parseFloat(document.getElementById('valor2').value); 
    let res= 0;
    if(cal === 'sumar') {
        res = valor1 + valor2;
    } else if(cal === 'restar') {
        res = valor1 - valor2;
    } else if(cal === 'multiplicar') {
        res = valor1 * valor2;
    } else if(cal === 'dividir') {
        if(valor2 === 0){
            res = 'Cannot divide by zero';
        } else {
        res = valor1 / valor2
    }
    }
    document.getElementById('resultado').innerHTML = res;
});


// document.getElementById('suma').addEventListener('click', suma);
// document.getElementById('resta').addEventListener('click', resta);
// document.getElementById('multiplicar').addEventListener('click', multiplicacio)
// document.getElementById('dividir').addEventListener('click', divisio)


// function suma() {
//     let valor1 = parseFloat(document.getElementById('valor1').value); 
//     let valor2 = parseFloat(document.getElementById('valor2').value);
//     let res = valor1 + valor2;
//     return document.getElementById('resultado').innerHTML = res;
// }

// function resta() {
//     let valor1 = parseFloat(document.getElementById('valor1').value); 
//     let valor2 = parseFloat(document.getElementById('valor2').value);
//     let res = valor1 - valor2;
//     return document.getElementById('resultado').innerHTML = res;
// }

// function multiplicacio() {
//     let valor1 = parseFloat(document.getElementById('valor1').value); 
//     let valor2 = parseFloat(document.getElementById('valor2').value);
//     let res = valor1 * valor2;
//     return document.getElementById('resultado').innerHTML = res;
// }

// function divisio() {
//     let valor1 = parseFloat(document.getElementById('valor1').value); 
//     let valor2 = parseFloat(document.getElementById('valor2').value);
//     let res = valor1 / valor2;
//     if(valor2 === 0){
//         res = 'Cannot divide by zero';
//     }
//     return document.getElementById('resultado').innerHTML = res;
// }




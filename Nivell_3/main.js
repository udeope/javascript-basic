

//Obtener caracteres
function show(valor) {
document.getElementById("numero").value += valor;
 }
 
//Obtener valores
function res() {
let val = document.getElementById("numero").value
let valor = eval(val)
document.getElementById("numero").value = valor
}
//limpiar pantalla
document.getElementById('C').addEventListener('click', clear)
function clear() {
document.getElementById("numero").value = ""
}
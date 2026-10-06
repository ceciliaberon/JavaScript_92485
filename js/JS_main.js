///console.log("prueba de correcto enrutado"); 
// variable: es un espcacio de memoria reservado para almacenae informacipon importante de programa
///declaracion
////let cliente;
///asignacion de valores
///cliente = "CARLOS";
///console.log(cliente);
///Inicializacion de las variables
///let edad = 37;
//console.log(edad);
//Const: es ima variable cuyo valor ha sido asignado.
//const nacimiento = 1993;
//console.log(edad);
//alert("Bienvenido al curso de JavaScript");

let nombre = prompt("escribe tu nombre");
let ciudad = prompt("Donde vivis");
const fecha = prompt("Agrega tu fecha de cumpleaños con el siguiente formato DD/MM/YYYY");
alert(nombre + ciudad + fecha);
let productoTexto = prompt("precio");

let producto = parseFloat(productoTexto);
let descuentoTexto = prompt("descuento");
let descuento = parseFloat(descuentoTexto);

let calcularPorc = ((producto * descuento)/100);

//console.log(calcularPorc);
alert(calcularPorc);
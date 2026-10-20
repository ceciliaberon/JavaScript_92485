// condicional: algo que define la condicion //
//let valido = true //estructura de un if
//if(valido) {
//    console.log("variable verdadera")
//}

/*let fruta = "frutilla"
let mes = "octubre"

if(fruta == "frutilla"){
    console.log("me parece que arranco la primavera")
}
*/

/*if (fruta== "melon" && mes == "enero"){
    console.log{"me parece que pasamos al vrrano"}
} */

/*    let edad = 25
    if(edad >= 18){
        console.log("puede comprar en la vinoteca")
    } else {
        console.log("no puede comprar en la vinoteca")
    }
*/

/*for("dese/inicio";"hasta/fin";"actualizaci")
*/

let numero = parseInt(prompt("Ingrese la tabla de multiplicar"))
console.log("tabla de multiplicar del" + numero)
for(let i=1;i<=15;i++){
    let resultado = numero*i
    console.log(numero + "x" + i + ": "+ resultado)
}
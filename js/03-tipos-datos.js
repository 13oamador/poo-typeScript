/*Tipos de datos en TypeScript*/
//String
var cadena = "Master en JS";
//Number
var numero = 13;
//Boolean
var verdadero_falso = true;
//Any - capta cualquier tipo de valor
var cualquiera = "hola";
cualquiera = 2;
//Array
var lenguajes = ["C#", "C++", "VB"];
var years = [13, 5, 8, 14];
// Varios tipos de datos
var cadena_number = "Oscar Amador";
cadena_number = 69;
// Let vs Var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, cadena_number);

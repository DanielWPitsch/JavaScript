import entrada from 'readline-sync';
console.log("Conversor de Celsius para Kelvin");

let celsius = entrada.question("Digite a temperatura em Celsius: ");
let kelvin = Number(celsius) + 273.15;

console.log(celsius+"ºC equivale a "+kelvin+"ºK");
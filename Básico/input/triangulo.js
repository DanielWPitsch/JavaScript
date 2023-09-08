import entrada from 'readline-sync';

console.log("-Área do triangulo-");

let base = entrada.question("Informe a base do triangulo: ");
let altura = entrada.question("Informe a altura do triangulo: ");
let area = (base * altura) / 2;

console.log("A area do triangulo eh: "+area);
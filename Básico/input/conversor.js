import entrada from 'readline-sync';

console.log("Conversor de Milhas para Km \n");

let milhas = entrada.question("Informe as milhas: ");
let km = milhas / 0.62137;

console.log(milhas+"milhas equivale a "+km+"km");
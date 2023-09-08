import entrada from 'readline-sync';

let nome = entrada.question("Digite seu nome: ");
console.log("Olá "+nome);

let n1 = entrada.question("Digite o primeiro numero: ");
let n2 = entrada.question("Digite o segundo numero: ");

let soma = Number(n1)+Number(n2);

console.log("A soma é: "+soma);
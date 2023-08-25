//node

console.log("variaveis:")

var nome_dog = "Piloto"
console.log("O nome do meu cachorro é: " + nome_dog)

var nome = "Daniel"
console.log("Nome: " + nome)

var idade = 35
console.log("Nome: " + idade)

var acessou = true
console.log("Status do site: " + acessou)


function Carro(ano, placa) {
    this.ano = ano;
    this.placa = placa;
    var novoCarro = Math.random() = Carro.cores.length;
    this.cor = Carro.cores[Math.floor(nCor)];
    this.alterarAno = function(novoAno) {
      this.ano = novoAno;
    }
  }
  
  Carro.cores = ["Azul", "Branco", "Vermelho"];
  
  Carro.adicionarCor = function(novaCor){
    Carro.cores.push(novaCor);
  }
  
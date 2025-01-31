//var nome = "Daniel";
//var idade = prompt("Qual sua idade? ");
//document.write("<h2> teste </h2");

document.write("<img src='https://google.com/google.jpg' />");

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if(texto == '' || texto ==null){
        alert("Digite seu nome novamente!");
        area.innerHTML = 'Bem vindo ...';
    }else{
        area.innerHTML='Bem vindo ' + texto + " " + teste;
    }
    
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome: ');

    area.innerHTML = "Bem vindo " + nome + " " + texto;
    
}

function entrar3(nome, sobrenome){
    var area = document.getElementById('area3');
    var idade = prompt('Digite sua idade: ');

    area.innerHTML = "Bem vindo " + nome + " " + sobrenome+ ", sua idade é: " + idade;
    
}

var lista = [ "Mateus", "Daniel", "Elder", "Arthur", 15];

// retorna posicao do array
lista.indexOf("Henrique");
//quando devolve -1 é pq não existe o elemento procurado

//junta elemento separados por virgula
lista.join(", ")

//remove ultimo elemento da lista
lista.pop();

//remove primeiro elemento da lista
lista.shift();

//alterar item
lista.indexOf("Daniel");
lista[0] = "Daniel Warella";

lista.push("Cleber");

/*
if(lista.indexOf("Elder") > -1){
    alert("Esse item está na lista");
}else{
    alert("Não encontrado!");
}
*/
var x =0;

//                             LOOPS

/*
while(x < 10){
    document.write("</br> O valor do x é: " + x);
    x++;
}*/

for (a = 0; a < 10; a++){
    document.write("</br> O valor do a é: " + a);
}

/*
var opc= prompt("Qual a opcao?");

switch(opc){
    case "0":
        alert("A opcao foi 0");
        break;
    case "1":
        alert("A opcao foi 1");
        break;
    case "2":
        alert("A opcao foi 2");
        break;
    default:
        alert("opcao invalida");
}
*/

//                            TEMPORIZADOR

function acao(){
    document.write("Execitando...<br/>");
}

// executa de 1 em 1 segundo
//var timer = setInterval(acao, 1000);
//clearInterval(timer);

//setTimeout(acao, 3000);


//                             WEB STORAGE

//parametros sao chave e valor
localStorage.setItem("nome", "Daniel");

//usando a chave traz o valor
localStorage.getItem("nome");

localStorage.removeItem("nome");

var web= 'oxe';

//localStorage.getItem("webstorage");
if(typeof localStorage.web == 'undefined' || typeof localStorage.web == null){
    localStorage.web = prompt("Digite seu nome: ");
}

web = localStorage.web;

alert(web);

//document.getElementById("web").innerHTML = web;

localStorage.lista2 = ["daniel", 23];

//sessionStorage tem a mesma pegada

// o  let é de escopo local
let sobrenome = "Pitsch";

const pi = 3.14;

let pessoa = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos`;

//                     OBJETOS

const pessoa2 ={
    nome:"Daniel",
    sobrenome: "wp",
    idade: 33,
    cargo: "desenvolvedor"
};

//troca a chave cargo por programador, mas não muda no objeto
let {cargo:programador} = pessoa2;

let nomes = ["daniel", "warella"]

let{1:segundonome} = nomes;
let{0:eu, 1:sNome} = nomes;

let alunos = ["marretinha", "Guts", "Ela"];

//viram as chaves dos respectivos atributos
let[aluno1, aluno2, aluno3] = alunos;

//                          SPREAD OPERATOR

let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 6];

let novapessoa = {
    ...pessoa2,
    anoAtual: 2025,
    cidade: "JP"
};

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: "programador",
        status: 1
    };
    return novosDados;
}

console.log(cadastroPessoa({nome: "Daniel", sobrenome: "wp", anoInicio:2025}));

//                          REST OPERATOR

function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Eu", "Tu", "Ele");

function cadastrar(usuarios, ...novosUsuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalusuarios);
}

let usuarios = ["Eu", "Tu"];
let novosUsuarios = cadastrar(usuarios, "Ele", "Nós");

//                          MAP e REDUCE

const lista2 =[1,2,3,4,5];

const novaLista = lista2.map(function(item){
    return item *5;
});

console.log(novaLista);

const soma = lista2.reduce(function(total, proximo){
    return total + proximo;
});

console.log(soma);

const find = lista2.find(function(item){
    return item === 5;
});

console.log(find);

//                          FUNCOES ANONIMAS

/*
function adicionar(...numeros){
    let total = numeros.reduce(function (total, proximo) {
        return total + proximo;
    });

    console.log(total);
}

function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => {
        return total + proximo;
    });

    console.log(total);
}
*/

function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo);

    console.log(total);
}

adicionar(1,2,3,4,5);

//                          Includes , endsWith, startsWith
// é case sensitive

let nomes2 = ["Eu", "tu", "ele"];

console.log(nomes2.includes("tu"));

let meu = "daniel";
console.log(meu.endsWith("l"));
console.log(meu.startsWith("D"));

//                          metodos some e every

nomes2.some(nomes2 => nomes2 === "Eu");

const pessoa3 =
[
    {nome:"Daniel", sobrenome: "wp", idade: 43,},
    {nome:"Elder", sobrenome: "ot", idade: 33,},
    {nome:"Arthur", sobrenome: "sq", idade: 23,},
    {nome:"Well", sobrenome: "ps", idade: 63,},
];

pessoa3.every(nome => nome.idade >= 18);

if(pessoa3.every(nome => nome.idade >= 18)){
    console.log("Todos sao maiores de 18");
}else{
    console.log("Alguém é de menor")
}
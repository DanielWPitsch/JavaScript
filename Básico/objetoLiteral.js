var cliente = {
    id : 40,
    nome : "jorge",
    telefone : "83 9922-4322"
};

console.log(cliente.id);
console.log(cliente.nome);
console.log("\n-Colections-");

var colecao = [
    "daniel",
    "chefe",
    "potencia"
];

console.log(colecao[1]);

var disciplinas = [
    {id: 1, nome: "POO", CH: 40},
    {id: 2, nome: "ED", CH: 80},
    {id:3, nome: "BD", CH: 60}
];

console.log(disciplinas[1].nome);

var chuck_n = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho = chuck_n.length;

var n = Math.floor(Math.random() * tamanho);
//math.floor arredonda o decimal que o random vai gerar

var escolhida = chuck_n[n];

var titulo = escolhida.titulo;
var conteudo = escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo);
console.log("Conteúdo: " + conteudo);
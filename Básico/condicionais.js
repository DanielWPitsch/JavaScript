var nota = 7;
var status = nota >= 7 ? "Aprovado": "Reprovado";
console.log(status);

var aprovado = true;
aprovado && console.log("Parabéns!");

var status2 = aprovado ? "certo": "errado";
console.log(status2);

var mes = 2;

switch(mes){
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    case 12:
    case 1:
    case 2:
        console.log("Verão");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Novembro");
        break;
    default:
        console.log("Mês inválido!");
}
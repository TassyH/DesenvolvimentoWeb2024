/*alert("somar dois valores");
let numero = prompt("digite um numero")
let numero2 = prompt("digite o 2 numero")
let soma = prompt(Number(numero) + Number(numero2));

console.log(soma)
*/

/*function pegaNumero(){
    let valorPrompt = prompt("Digite um numero")

    while(isNaN(valorPrompt) || valorPrompt.trim()===""){
        alert("Entre com um numero valido")
        valorPrompt = prompt("Digite um valor")
    }
    return Number(valorPrompt);
}



let valor1 = pegaNumero()
let valor2 = pegaNumero()
let soma = valor1 + valor2;
alert (soma)
*/

function pegaNumero(mensagem){
    let valorPrompt = prompt(mensagem)

    while(isNaN(valorPrompt) || valorPrompt.trim()===""){
        alert("Entre com um numero valido")
        valorPrompt = prompt(mensagem)
    }
    return Number(valorPrompt);
}

function realizaCalculo(ope, num1, num2){
    let resultado;
    if(informaOperacao(ope) === "+"){
        resultado =  num1+num2;
    }else if(informaOperacao(ope) === "-"){
        resultado =  num1-num2;
    }else if(informaOperacao(ope) === "*"){
        resultado =  num1*num2;
    }else if(informaOperacao(ope) === "/"){
        resultado =  num1/num2;

    }
    return resultado;
}

function informaOperacao(mensagem){
    let operacaoMath = prompt(mensagem)
    return String(operacaoMath);
}

function executaCalc(){
    let valor1 = pegaNumero("digite o valor 1")
    let valor2 = pegaNumero("digite o valor 2")
    let operacao = informaOperacao("Entre com a operaao");
    let conta = realizaCalculo(valor1,valor2, operacao);
    alert (conta)
}

executaCalc()

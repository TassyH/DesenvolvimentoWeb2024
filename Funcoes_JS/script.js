/*let soma2 = function (valor1, valor2){
    return valor1+valor2;
}

let resultado2 = soma2(1,3);
console.log(resultado2);

let soma3 = (valor1, valor2) =>{
    return valor1+valor2;
}

let resultado3 = soma3(15, 20)
console.log(resultado3);

*/

/* 3 - Crie um script que declare uma variável e verifique se o seu valor é um número.
Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não
é um número".*/



function validaValor(valor1, valor2){

    if (typeof valor1 == "number" && typeof valor2 == "number"){
        console.log(valor1 + " e "+ valor2+" é um numero")
    }else{
        console.log("nao é um numero")    }

}

validaValor(12, 31);


/**4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se
for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é
uma string". */

function validaString(a){
    if(typeof a == "string"){
        console.log("é uma string")
    }else{
        console.log("não é string")
    }
}

validaString("teste")

let funcaoSubtracao = (valor1, valor2)=>{
    return valor1-valor2;
}
console.log(funcaoSubtracao(10,3))


/**6 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação
entre elas. */

function multiplicaNumeros(valor1, valor2){
    return valor1*valor2;
}

//let resultado = multiplicaNumeros(2,6)
console.log(multiplicaNumeros(5,2))

/**
 * Crie um script que declare uma variável e verifique se o seu valor é um número
par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a
mensagem "Não é um número par"
 */

/*let validaPar = (valor)=>{
    if(valor%2==0){
        return "o numero é par"
    }else{
        return "não é par"
    }
}

let resultaodo = validaPar(4);
console.log(resultaodo);

function operacao(a, b, tipo){
    switch(tipo){
        case "+":
            return a +b;
            break;
        case "-":
            return a
    }
}

*/

//document.getElementById("").innerHTML = "Novo conteudo";
//
//var element = document.getElementById("header");
//element.innerHTML = "Novo texto";

let a = 5;



document.getElementById("paragrafo").style.color = "blue";
let paragrafo = document.getElementById("paragrafo")
let novoparagrafo = document.createElement("div");
novoparagrafo.innerHTML = '<strong> Novo Paragrafo </strong>'
paragrafo.appendChild(novoparagrafo);

for (let i = 0; i <a;i++){
let novoElemento = document.createElement("li");
novoElemento.innerText = "Novo Item da Lista "+i;
let lista = document.getElementById("lista");
let primeiroItem = lista.firstChild;
lista.insertBefore(novoElemento, primeiroItem);

}

novoElemento = document.createElement("li");
novoElemento.innerText = "Novo Item da Lista 980";
lista = document.getElementById("lista");
let segundoItem = lista.firstChild;
lista.insertBefore(novoElemento, segundoItem);

let botao = document.getElementById("btn")
botao.addEventListener("click", function(){
    alert("Teste");
})

botao.addEventListener("mouseover")
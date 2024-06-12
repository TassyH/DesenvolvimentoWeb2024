
//document.getElementById("").innerHTML = "Novo conteudo";
//
//var element = document.getElementById("header");
//element.innerHTML = "Novo texto";

document.getElementById("paragrafo").style.color = "blue";
let paragrafo = document.getElementById("paragrafo")
let novoparagrafo = document.createElement("div");
novoparagrafo.innerHTML = '<strong> Novo Paragrafo </strong>'
paragrafo.appendChild(novoparagrafo);

let novoElemento = document.createElement("li");
novoElemento.innerText = "Novo Item da Lista 33";
let lista = document.getElementById("lista");
let primeiroItem = lista.firstChild;
lista.insertBefore(novoElemento, primeiroItem);
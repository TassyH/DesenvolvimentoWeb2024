let elementoPorQuerry = document.querySelector(".h1");
elementoPorQuerry.innerHTML = "tassy vei ver os vinte e um pilotos";

let elementoPai = document.querySelector("#listaId")
console.log(elementoPai);

let elementoUl = elementoPai.querySelector("ul")
console.log(elementoUl);

let filhosImediatos = elementoPai.children
console.log(filhosImediatos);

let novoElemento = document.createElement("li")

novoElemento.innerHTML = "blurryface";
elementoUl.appendChild(novoElemento)

for (let i = 0; i < 10; i++){
    let novoElemento = document.createElement("li")
    novoElemento.innerHTML = i;

elementoUl.appendChild(novoElemento)
}

function clicou(){
    alert("clicou no btn 1")
}

let botao = document.querySelector(".botao2")

//exemplo 1 de evento

botao.addEventListener("click", clicou)

//exemplo 2

botao.addEventListener("click", ()=>{
    alert("alert 2")
})

//exemplo 3
botao.addEventListener("click", function(){
    alert("mod 3 de chamar uma functioon no evento")
})

let pai  = document.querySelector("#pai")
pai.style.backgroundColor = "red";

let botao3 = document.querySelector(".botao3")
botao.addEventListener("mouseover", ()=>{
    let filho = document.querySelector("#filho")
    filho.innerHTML = "<strong>novo elemento</strong>"
    pai.style.backgroundColor = "yellow"
})
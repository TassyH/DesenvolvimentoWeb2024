const form = document.getElementById('formulario');
const nomeInput = document.getElementById("nome");
const anoInput = document.getElementById("anoClique");
const albumSelect = document.querySelector(".albumFav")
const musicaSelect = document.querySelector('.musicaFav')

const erroMensagem = document.getElementById('erro_mensagem');

const itemNomePessoaTabela = document.getElementById("th_nome");
const itemTempodeClique = document.getElementById("th_tempoClique");
const itemNomeAlbum = document.getElementById("th_album");
const itemNomeMusica = document.getElementById("th_musica");



const button = document.querySelector('.btnEnviar');
console.log(form);
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const anoClique = anoInput.value.trim();
    const albumFav = albumSelect.value.trim();
    const musicaFav = musicaSelect.value.trim();

    let dataAtual = new Date();
    let data = dataAtual.getFullYear();

    console.log(nomeInput.value)

    if(nome === '' || anoClique ===''){
        erroMensagem.style.color = "red";
        erroMensagem.textContent = 'Os campos de nome e idade nao pode ficar vazio'
        return;
    }else{
        erroMensagem.style.color = "blue"
        erroMensagem.textContent = "Enviado com sucesso"
        nomeInput.value = '';
        anoClique.value = '';
    }

    const calculoTempoClique = data - anoClique;


     // mostra dados na tabela
    itemNomePessoaTabela.textContent = nome;
    itemNomeAlbum.textContent = albumFav;
    itemNomeMusica.textContent = musicaFav;
    itemTempodeClique.textContent = calculoTempoClique + " anos";

     // Limpa o campo de texto
     musicaSelect.value = '';
     albumSelect.value = '';
 
})



/*form.addEventListener('keypress', (event) =>{
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const telefone = foneInput.value.trim();


    console.log(nomeInput.value)

    if(nome === '' || telefone ===''){
        erroMensagem.style.color = "red";
        erroMensagem.textContent = 'Os campos de nome e telefone nao pode ficar vazio'
        return;
    }else{
        erroMensagem.style.color = "blue"
        erroMensagem.textContent = "Enviado com sucesso"
        nomeInput.value = '';
        foneInput.value = '';
    }


})*/


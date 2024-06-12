const form = document.getElementById('formulario');
const nomeInput = document.getElementById("nome1");
const foneInput = document.getElementById("idade1");
const albumInput = document.querySelector(".album")
const musica = document.querySelector('.musica')
const erroMensagem = document.getElementById('erro_mensagem');


const button = document.querySelector('.btnEnviar');
console.log(form);
form.addEventListener('submit', (event) =>{
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


})

form.addEventListener('keypress', (event) =>{
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


})
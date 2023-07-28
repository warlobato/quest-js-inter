const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    checkInputs()
})

function checkInputs(){
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const mensagemValue = mensagem.value.trim()

    if(nomeValue === ""){
        erroValidation(nome)
    }else{
        sucessoValidation(nome)
    }

    if(emailValue === ""){
        erroValidation(email)
    }else{
        sucessoValidation(email)
    }

    if(telefoneValue === ""){
        erroValidation(telefone)
    }else{
        sucessoValidation(telefone)
    }

    if(mensagemValue === ""){
        erroValidation(mensagem)
    }else{
        sucessoValidation(mensagem)
    }
}

function erroValidation(input){
    const controleForm = input.parentElement;

    controleForm.className = "controle-form erro"
}

function sucessoValidation(input){
    const controleForm = input.parentElement;

    controleForm.className = "controle-form sucesso"
}

console.log(nome);
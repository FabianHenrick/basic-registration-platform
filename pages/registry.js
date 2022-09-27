let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelnome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelusuario')
let validUsuario = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelemail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelsenha')
let validSenha = false

let confsenha = document.querySelector('#confsenha')
let labelConfSenha = document.querySelector('#labelconfsenha')
let validConfSenha = false

/**
 * Criando aqui um aspecto visual para validação de campos,
 * trocando as cores e exibindo as menssagens de forma mais limpa.
 */
// ################# NOME #####################
nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML= '<strong> Nome * Insira no minimo 5 caracteres.</strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML= 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

// ################# USUÁRIO #####################
usuario.addEventListener('keyup', () =>{
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML= '<strong> Usuário * Insira no minimo 4 caracteres.</strong>'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML= 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

// ################# E-MAIL #####################
email.addEventListener('keyup', () =>{
    if(email.value.length <= 15) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML= '<strong> E-mail * Insira no minimo 16 caracteres.</strong>'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    }else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML= 'E-mail'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

// ################# SENHA #####################
senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML= '<strong> Senha * Insira no minimo 8 caracteres.</strong>'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML= 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

// ################# CONFIRMAÇÃO DE SENHA #####################
confsenha.addEventListener('keyup', () =>{
    if(senha.value != confsenha.value) {
        labelConfSenha.setAttribute('style', 'color: red')
        labelConfSenha.innerHTML= '<strong> Confirmar Senha * As senhas devem ser iguais.</strong>'
        confsenha.setAttribute('style', 'border-color: red')
        validConfSenha = false
    }else {
        labelConfSenha.setAttribute('style', 'color: green')
        labelConfSenha.innerHTML= 'Confirmar Senha'
        confsenha.setAttribute('style', 'border-color: green')
        validConfSenha = true
    }
})


function cadastrar(){
if(validNome && validUsuario && validEmail && validSenha && validConfSenha){

    alert('Cadastrado com sucesso')

}else{

    alert('preencha todos os campos para completar o cadastro')

}
}
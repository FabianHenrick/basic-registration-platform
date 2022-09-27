let btn = document.querySelector('.fa-eye')

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')
    let inputConfSenha = document.querySelector('#confsenha')
    if (inputSenha.getAttribute('type')=='password'){
            inputSenha.setAttribute('type', 'text' )
            inputConfSenha.setAttribute('type', 'text' )
            btn.classList.toggle("fa-eye-slash")
    }else {
        inputSenha.setAttribute('type', 'password' )
        inputConfSenha.setAttribute('type', 'password' )
        btn.classList.toggle("fa fa-eye")
    }
})
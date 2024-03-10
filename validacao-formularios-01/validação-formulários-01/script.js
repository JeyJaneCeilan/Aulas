// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', function(){
        usernameLabel.classList.add('required-popup')})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function(){
        usernameLabel.classList.remove('required-popup')})

// Validar valor do input
usernameInput.addEventListener('change', function (evento){
    let valor = evento.target.value

    if (valor.length < 4){
        console.log('Username curto')
        usernameInput.classList.add ('error')
        usernameHelper.classList.add('visible')
        usernameInput.classList.remove('correct')
    } else {
        console.log('Usernamer válido')
        usernameInput.classList.remove ('error')
        usernameHelper.classList.remove ('visible')
        usernameInput.classList.add('correct')
    }
})

// VALIDAR E-MAIL/

let emailImput = document.getElementById ('email')
let emailLabel = document.querySelector ('label[for="email"]')
let emailHelper = document.getElementById ('email-helper')

emailImput.addEventListener('change', function(evento){

    let valor = evento.target.value

    if(valor.includes ('@') && valor.includes('.com')){
        emailImput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailImput.classList.add('correct')
    }else{
        emailImput.classList.add('error')
        emailHelper.classList.add('visible')
        emailImput.classList.remove('correct')
    } 
})
    

function mostrarPopup (input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener('focus', function(){
        label.classList.add('required-popup')
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener('blur', function(){
        label.classList.remove('required-popup')
    })
}

mostrarPopup (usernameInput, usernameLabel)
mostrarPopup (emailImput, emailLabel)

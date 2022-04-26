let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '50%'
email.style.width = '50%'

function validaNome(){
  let txtNome = document.querySelector('#txtNome')
  if(nome.value.length < 3){
    txtNome.innerHTML ='Nome inválido!'
    txtNome.style.color = '#E8031B'
  } else{
    txtNome.innerHTML ='Nome válido!'
    txtNome.style.color = '#37c871'
    nomeOk = true
  }
}

function validaEmail(){
  let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') ==  -1){
    txtEmail.innerHTML = 'Email inválido'
    txtEmail.style.color = '#E8031B'
  } else{
    txtEmail.innerHTML ='Email válido!'
    txtEmail.style.color = '#37c871'
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')
  if(assunto.value.length > 280){
    txtAssunto.style.display = 'block' 
    txtAssunto.innerHTML ='Quantidade de caracteres superior a 280'
    txtAssunto.style.color ='#E8031B'
  } else{
    txtAssunto.style.display = 'none' 
    assuntoOk = true
  }
}

function enviar(){
  if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulário enviado com sucesso!!!')
  } else {
    alert('Preencha o formulário corretamente!!!')
  }
}

function mapaZoom(){
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal(){
  mapa.style.width = '400px'
  mapa.style.height = '250px'
}
// RADIO BUTTONS

let spanRadio1 = document.getElementById('spanRadio1')
let spanRadio2 = document.getElementById('spanRadio2')
let spanRadio3 = document.getElementById('spanRadio3')

function marcarExoticas() {
  spanRadio1.style.backgroundColor = '#F2E5D0';
  spanRadio2.style.backgroundColor = '';
  spanRadio3.style.backgroundColor = '';
}

function marcarTradicionais() {
  spanRadio2.style.backgroundColor = '#F2E5D0';
  spanRadio3.style.backgroundColor = '';
  spanRadio1.style.backgroundColor = '';
}

function marcarAmbas() {
  spanRadio3.style.backgroundColor = '#F2E5D0';
  spanRadio2.style.backgroundColor = '';
  spanRadio1.style.backgroundColor = '';
}

// SELECT

let selectPai = document.getElementById('select')

let select1 = document.getElementById('select1')
let select2 = document.getElementById('select2')
let select3 = document.getElementById('select3')
let select4 = document.getElementById('select4')
let select5 = document.getElementById('select5')

function select(el) {

  for (i = 0; i < selectPai.children.length; i++) {
    selectPai.children[i].classList.toggle('escondido')
    selectPai.children[i].classList.toggle('selecionado')
  }

  el.classList.toggle('escondido')
  el.classList.toggle('selecionado')

  if (select4.classList.contains('selecionado') && select3.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(145 172 191)'
  } else if (select1.classList.contains('selecionado') && select3.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(162 199 181)'
  } else if (select3.classList.contains('selecionado') && select4.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(245 220 141)'
  } else if (select2.classList.contains('selecionado') && select4.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(227 91 91)'
  } else if (select5.classList.contains('selecionado') && select4.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(173 157 191)'
  } else {
    selectPai.style.backgroundColor = '#fff'
  }

}

// CHECKBOX

let boxPai = document.getElementById('boxPai');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');

function marcar(el) {

  if (el == boxPai) {

    if (box1.classList.contains('marcado') || box2.classList.contains('marcado') && boxPai.classList.contains('marcado')) {

      boxPai.classList.remove('marcado');
      box1.classList.remove('marcado');
      box2.classList.remove('marcado');

    } else {

      boxPai.classList.add('marcado');
      box1.classList.add('marcado');
      box2.classList.add('marcado');

    }

  } else {
    boxPai.classList.add('marcado');
    el.classList.toggle('marcado');
  }

  checar();

};

function checar() {

  if (box1.classList.contains('marcado') && box2.classList.contains('marcado')) {

    boxPai.classList.add('marcado')

    check1.classList.remove('displayNone')
    check1.classList.add('display')
    check2.classList.remove('displayNone')
    check2.classList.add('display')

    checkPai.classList.remove('displayNone')
    checkPai.classList.add('display')
    checkInt.classList.remove('display')
    checkInt.classList.add('displayNone')

  } else if (!box1.classList.contains('marcado') && !box2.classList.contains('marcado')) {

    boxPai.classList.remove('marcado')
    checkInt.classList.add('displayNone')
    checkPai.classList.add('displayNone')

    check1.classList.add('displayNone')
    check1.classList.remove('display')
    check2.classList.add('displayNone')
    check2.classList.remove('display')

  } else if (!box1.classList.contains('marcado') && box2.classList.contains('marcado')) {

    boxPai.classList.add('marcado')

    check1.classList.add('displayNone')
    check1.classList.remove('display')
    check2.classList.remove('displayNone')
    check2.classList.add('display')

    checkInt.classList.remove('displayNone')
    checkInt.classList.add('display')
    checkPai.classList.remove('display')
    checkPai.classList.add('displayNone')

  } else if (box1.classList.contains('marcado') && !box2.classList.contains('marcado')) {

    boxPai.classList.add('marcado')

    check1.classList.remove('displayNone')
    check1.classList.add('display')
    check2.classList.add('displayNone')
    check2.classList.remove('display')

    checkInt.classList.remove('displayNone')
    checkInt.classList.add('display')
    checkPai.classList.remove('display')
    checkPai.classList.add('displayNone')

  }

}

// VALIDAÇÃO

let formNome = document.getElementById('formNome')
let formEmail = document.getElementById('formEmail')
let formTel = document.getElementById('formTel')
let mensagem = document.getElementById('mensagem')

function enviar() {

  event.preventDefault()

  if (!nome()) {
    
    // nome
    alert('Preencha o campo "Nome" corretamente. Ele deve conter pelo menos dois nomes.')
    
  } else if (!email()) {
    
    // email
    alert('Preencha o campo "E-mail" corretamente.')
    
  } else if (!telefone()) {
    
    //telefone
    alert('Preencha o campo "Telefone corretamente. Ele deve ter 11 dígitos (telefone e DDD)."')
  } else if (spanRadio1.style.backgroundColor == '' && spanRadio2.style.backgroundColor == '' && spanRadio3.style.backgroundColor == '') {
    
    // radio buttons
    alert('Preencha o campo "Qual a sua preferência de carne?"')
    
  } else if (!box1.classList.contains('marcado') && !box2.classList.contains('marcado') && !boxPai.classList.contains('marcado')) {
    
    // checkbox
    alert('Preencha o campo "Como você prefere ser contatade?"')
    
  } else if (mensagem.value.length < 5) {

    // mensagem
    alert('A sua mensagem deve ter pelo menos 5 caracteres.')
    
  } else {
    // tudo certo
    alert('Obrigado pela mensagem! Entraremos em contato em breve (:')
  }

}

function nome() {
  if (formNome.value.includes(' ') && formNome.value.length > 3) {
    return true
  }
}

function email() {
  if (formEmail.value[0] != '@' && formEmail.value.includes('.', formEmail.value.indexOf('@')) && formEmail.value[formEmail.value.indexOf('@') + 1] != '.') {
    return true
  }
}

function telefone() {
  if (formTel.value.length == 11) {
    return true
  }
}


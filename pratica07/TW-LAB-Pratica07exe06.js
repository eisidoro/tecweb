function register () {
  let provider = []
  let name = document.getElementById('name')
  let phone = document.getElementById('phone')
  let cnpj = document.getElementById('email')
  let out = document.getElementById('out')

  provider.push({name: name.value, phone: phone.value, cnpj: cnpj.value})

  for (var i = 0; i < provider.length; i++) {
    out.innerHTML = out.innerHTML + 'Nome: ' + provider[i].name + ' Telefone: ' + provider[i].phone + ' E-mail: ' + provider[i].cnpj + '</br>'
  }

  if (provider.length) {
    out.style.display = 'block'
  }

  name.value = ''
  phone.value = ''
  cnpj.value = ''
}

function showSpoiler (e) {
  let el = e.target
  let target = el.dataset.toggle
  let inner = document.getElementById(target)
  if (inner.style.display == "none") {
    inner.style.display = "block";
  } else {
    inner.style.display = "none";
  }
}

function init () {
  let buttons = document.querySelectorAll('[data-toggle]')
  for (var i = 0; i < buttons.length; i++) {
    let btn = buttons[i]
    btn.addEventListener("click", showSpoiler)
  }
}

init()

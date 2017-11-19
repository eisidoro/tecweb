  function getData () {
    let name  = document.getElementById('name')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let out   = document.getElementById('out')

    return {name, phone, email, out}
  }

  function register () {
    let provider = getData()

    provider.out.innerHTML = provider.out.innerHTML +
    '<div id="novo-input">' +
    ' <li> Nome: '     + provider.name.value  +  '</li>' +
    ' <li> Telefone: ' + provider.phone.value +  '</li>' +
    ' <li> E-mail: '   + provider.email.value +  '</li>' +
    ' <button class="btn" style="margin-top: 10px" onclick="addNewField(this)"> Comentar </button>' +
    '<div style="margin-top: 10px" id="outComm"> </div>' +
    '</div>' +
    '</br>'

    if (provider) {
      provider.out.style.display = 'block'
    }

    provider.name.value  = ''
    provider.phone.value = ''
    provider.email.value = ''
  }

  function addNewField (el) {
    // console.log(el.parentElement)
    let node = document.createElement('input')
    let sub = document.createElement('input')

    el.parentElement.appendChild(node)
    el.parentElement.appendChild(sub)

    node.setAttribute('class', 'comm col-md-9 input-group')
    node.setAttribute('type', 'textarea')
    node.setAttribute('style', 'margin-top: 5px')

    sub.setAttribute('type', 'submit')
    sub.setAttribute('class', 'send btn btn-primary comm')
    sub.setAttribute('style', 'margin-top: 5px')

    let buttons = document.getElementsByClassName('send')
    let contentComm = document.getElementsByClassName('comm')

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute('id', 'sendComm' + j)
      contentComm[j].setAttribute('id', 'contentComm' + j)
      sub.setAttribute('onclick', 'sendComm(contentComm' + j + ')')
    }
  }

  function sendComm (id) {
    let sendID = id.value
    outComm.innerHTML = outComm.innerHTML + '<li>' + sendID + '</li>'
    id.value = ''
  }

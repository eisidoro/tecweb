function boasVindas () {
  alert ("Bem vindo a esta página de cadastro!");
}

function mascaraData (objeto, evento) {
  /* O keyCode não é compatível com todos navegadores.
  1) Keycode 8: backspace.
  2) Key code 46: delete.
  */
    if (evento.keyCode == 8 || evento.keyCode == 46) {
      return true;
    }
    //Key code entre 48 e 57: 0, 1 , 2, 3, 4, 5, 6, 7, 8 e 9.
    if (evento.keyCode < 48 || evento.keyCode > 57) {
      alert ("Informe apenas números!");
      return false;
    }
    if (objeto.value.length == 10) {
      return false;
    }
      if ((objeto.value.length == 2) || (objeto.value.length == 5)) {
      objeto.value = objeto.value + '/';
    }
  return true;
}


function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
}

function fMascEx() {
  obj.value=masc(obj.value)
}

function mTel (tel) {
  tel=tel.replace(/\D/g,"")
  tel=tel.replace(/^(\d)/,"($1")
  tel=tel.replace(/(.{3})(\d)/,"$1)$2")

  if(tel.length == 9) {
    tel=tel.replace(/(.{1})$/,"-$1")
  } else if (tel.length == 10) {
    tel=tel.replace(/(.{2})$/,"-$1")
  } else if (tel.length == 11) {
    tel=tel.replace(/(.{3})$/,"-$1")
  } else if (tel.length == 12) {
    tel=tel.replace(/(.{4})$/,"-$1")
  } else if (tel.length > 12) {
    tel=tel.replace(/(.{4})$/,"-$1")
  }
  return tel;
}

function mCNPJ (cnpj) {
  cnpj=cnpj.replace(/\D/g,"")
  cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
  cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
  cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
  cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
  return cnpj
}

function mCPF (cpf) {
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}

function mCEP (cep) {
  cep=cep.replace(/\D/g,"")
  cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
  cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
  return cep
}

function mNum (num) {
  num=num.replace(/\D/g,"")
  return num
}

function verificarFormulario () {
  var mensagemErro = "";
  if (document.getElementById("login").value == "") {
    mensagemErro = "Informe o login.";
  }
  if (document.getElementById("email").value == "") {
    mensagemErro += "\nInforme o email.";
  }
  if (document.getElementById("datanasc").value == "") {
    mensagemErro += "\nInforme a data de nascimento.";
  }
  if (document.getElementById('cpf').value === "") {
    mensagemErro += "\nInforme o CPF."
  }
}

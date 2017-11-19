function validate (id) {
	let val = document.getElementById(id).value
	let out = true
		
		if (val == "") 
			out = false

	return out
}

function printMsg (id, out) {
	let msg = 'Informar ' + id
	return document.getElementById(out).innerHTML = msg
}

function disableEl (el) {
	document.getElementById(el).disabled = true
}

function clear (id) {
	id.innerHTML = ""
}

function successInsert (id, out) {
	let msg = 'Campo ' + '"' + id + '"' + ' preenchido'
	return document.getElementById(out).innerHTML = msg
}

function routine (id) {
	if (validate(id) == false) {
		clear(id)
		alert('Informar ' + id)
	}
}

function init () {
	routine('login')
	routine('email')
	routine('dataNasc')
	routine('senha')
	routine('confSenha')
	routine('cidade')
	routine('hmpage')
}

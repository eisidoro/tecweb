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

function routine (id, outmsg, btn) {
	if (validate(id) == false) {
		printMsg(id, outmsg)
		clear(id)
		disableEl(btn)
	} else {
		window.location.replace('TW-LAB-Pratica12exe07Resp.html')
	}
}

function init () {
	routine('nome', 'msg_nome', 'btnSub')
	routine('email', 'msg_email', 'btnSub')
	routine('mensagem', 'msg_msg', 'btnSub')
}

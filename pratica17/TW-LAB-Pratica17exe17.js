// Função para capturar eventos
function capturaEventos(obj, evt, fn) {
 // Verifica se o objeto suporta addEventListener
	 if(obj.addEventListener){
	 	obj.addEventListener(evt, fn, true);
	 } 
	 // Adiociona attachEvent da Microsoft
	 else {
	 	var evento = 'on' + evt;
	 	obj.attachEvent(evento, fn);
	 }
}
 
// Cancela evento
function cancelaEvento(evt){
 // Verifica se o evento suporta stopPropagation
 if(evt.stopPropagation) {
 // Aplica-se para Firefox, Chrome e demais
 	evt.stopPropagation();
 	evt.preventDefault();
 } else {
 // Aplica-se para IEs antigos
 	evt.cancelBubble = true;
 	evt.returnValue = false;
 }
}
 
// Função para capturar a requisição XMLHttpRequest
function verificaXmlHttp() {
 // Uma variável sem valor
 	var xmlhttp;
 // Verifica se suporta XMLHttpRequest
 	if (window.XMLHttpRequest) {
 // Adiciona o valor à variável
 		xmlhttp = new XMLHttpRequest();
 	} else {
 // Adiciona ActiveXObject da Microsoft 
 		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
 	}
 // Retorna o valor
 return xmlhttp;
}


function showHome () {
	$("#out").load("test.html")
}
 
function showCadastro () {
	$("#out").load("test2.html")
}

function showPlanos () {
	$("#out").load("test3.html")	
}

function showContato () {
	$("#out").load("test4.html")	
}
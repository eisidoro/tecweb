let httpRequest

if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
}

httpRequest.onload = function () {
  httpRequest.open('GET', '', true)
  httpRequest.send(null)
}


let request = new XMLHttpRequest()
request.open('GET', '/my/url', true)

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    let resp = request.responseText
  } else {

  }
}

request.onerror = function() {

}

request.send()

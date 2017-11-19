function detalhes (site) {
  var informacao = {
    "google": "A melhor máquina de busca da Web!",
    "yahoo": "Muito boa também!",
    "about": "Um bom lugar para se visitar!"}
    mensagem.innerHTML = informacao[site];
}

function iniciar () {
  menu('sites','visible');
  menu('mensagem','visible');
  mensagem.innerHTML = ""; }

function menu (elemento, visibilidade) {
  document.getElementById(elemento).style.visibility = visibilidade;
}

// function mod () {
//   let out = 'Número impar'
//   let input = document.getElementById('inputN').value
//   if (input % 2 === 0)
//     out = 'Número par'
// }

function mod() {
  var out = 'Número impar'
  var input = document.getElementById("inputN").value
  if (input % 2 === 0) {
    out = 'Número par'
  }
  document.getElementById("out").innerHTML = out
}

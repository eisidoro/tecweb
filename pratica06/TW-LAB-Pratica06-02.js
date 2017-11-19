// function retornaPar () {
//   let out = []
//   let input = document.getElementById('inputN').value
//
//   if (input < 2) {
//     alert('Não existe número par menor que o digitado')
//     return
//   }
//
//   for (var i = 0; i < .length; i++) {
//     if (i % 2 === 0)
//       out.push[i]
//   }
// }

function retornaPar() {
  var out = []
  var input = document.getElementById("inputN").value
  if (input < 2) {
    alert('Não existe número par menor que o digitado')
    return
  }
 for (var i = 2; i < input; i++) {
    if (i % 2 === 0) {
    //  console.log(i)
      out.push(i)
    }
  }
  document.getElementById("out").innerHTML = out.join(', ')
}

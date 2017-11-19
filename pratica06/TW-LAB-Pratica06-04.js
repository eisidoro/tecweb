function Math() {
  let op = parseInt(document.getElementById("inputN").value)

  if ((op < 0 && op > 4) || op == "" ) {
    alert('Digite uma opção válida')
    return
  }

  switch (op) {
    case 1:
      let base = prompt('Informe a base do retângulo: ')
      let height = prompt('Infomre a altura do retângulo: ')
      alert('A área do retângulo é: ' + (base * height) + 'cm')
    break
    case 2:
      let base = prompt('Informe a base do triângulo: ')
      let height = prompt('Infomre a altura do triângulo: ')
      alert('A área do triângulo é: ' + ((base * height)/2) + 'cm')
    break
    case 3:
      let radius = prompt('Informe a raio do círculo: ')
      alert('A área do círculo é: ' + (3,14 * (radius*radius)) + 'cm')
    break
    case 4:
      let bMax = prompt('Informe a base maior do trapézio: ')
      let bMin = prompt('Infomre a base menor do trapézio: ')
      let height = prompt('Infomre a altura do trapézio')
      alert('A área do trapézio é: ' + (((bMax + bMin) * height)/2) + 'cm')
    break
  }
}

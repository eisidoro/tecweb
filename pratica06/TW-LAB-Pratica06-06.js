function discount () {
  let values = []
  let discValues = []
  const disc = 0.1

  for (var i = 0; i < 5; i++) {
    let value = prompt('insira um valor')
    values.push(parseInt(value))

    let valueDisc = values[i] - (values[i] * disc)
    discValues.push(valueDisc)
  }

  console.log(values)
  console.log(discValues)
  alert('Valores com desconto' + discValues)
}

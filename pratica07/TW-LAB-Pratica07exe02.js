function clearScreen() {
 let operands = document.getElementById('operandos')
 let result = document.getElementById('resultado')

 operands.style.display = 'none'
 result.style.display = 'none'
}

function operandCircle() {
  clearScreen()

  let operands = document.getElementById('operandos')

  operands.innerHTML = "Informe o raio: <input type='number' id='raio'>" + "<br/>" + "<button onclick='circleArea()'> OK </button>"
  operands.style.display = 'block'
}

function circleArea() {
  const pi = 3.14

  let radiusSTR = document.getElementById('raio').value
  let radius = parseFloat(radiusSTR)
  let area = pi * Math.pow(radius, 2)
  let result = document.getElementById('resultado')

  result.innerHTML = area
  result.style.display = 'block'
}

function operandRectangle() {
  clearScreen()

  let operands = document.getElementById('operandos')

  operands.innerHTML = 'Informe a base: <input type="number" id="base">' + '<br/>' + 'Informe a altura: <input type="number" id="altura">' + '</br>' + '<button onclick="rectangleArea()" >OK</button>'
  operands.style.display = 'block'
}

function rectangleArea() {
  let baseSTR = document.getElementById('base').value
  let heightSTR = document.getElementById('altura').value
  let base = parseFloat(baseSTR)
  let height = parseFloat(heightSTR)
  let area = base * height
  let result = document.getElementById('resultado')

  result.innerHTML = area
  result.style.display = 'block'
}

function operandTrapezium() {
  clearScreen()

  let operands = document.getElementById('operandos')

  operands.innerHTML = operands.innerHTML = 'Informe a base maior: <input type="number" id="baseMax">' + 'Informe a base menor: <input type="number" id="baseMin">' + '<br/>' + 'Informe a altura: <input type="number" id="altura">' + '</br>' + '<button onclick="trapeziumArea()" >OK</button>'
  operands.style.display = 'block'
}

function trapeziumArea() {
  let baseMaxSTR = document.getElementById('baseMax').value
  let baseMinSTR = document.getElementById('baseMin').value
  let heightSTR =  document.getElementById('altura').value
  let baseMax = parseFloat(baseMaxSTR)
  let baseMin = parseFloat(baseMinSTR)
  let height = parseFloat(heightSTR)
  let area = (baseMax + baseMin) * height
  let result = document.getElementById('resultado')

  result.innerHTML = area
  result.style.display = 'block'
}

function operandTriangle() {
  clearScreen()
  operandRectangle()
  // let operands = document.getElementById('operandos')
  //
  // operands.innerHTML = operands.innerHTML = 'Informe a base : <input type="number" id="base">' + '<br/>' + 'Informe a altura: <input type="number" id="altura">' + '</br>' + '<button onclick="triangleArea()" >OK</button>'
  // operands.style.display = 'block'
}

function triangleArea() {
  rectangleArea()
  // let baseSTR = document.getElementById('base').value
  // let heightSTR = document.getElementById('altura').value
  // let base = parseFloat(baseSTR)
  // let height = parseFloat(heightSTR)
  // let area = base * height
  // let result = document.getElementById('resultado')
  //
  // result.innerHTML = area
  // result.style.display = 'block'
}

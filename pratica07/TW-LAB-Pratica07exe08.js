const listagem = []

function createCar (year, brand, price) {
  return [year, brand, price]
}

function insertCar (list, car) {
  list.push(car)
  return list
}

function printList (newList) {
  document.getElementById('list').innerHTML = newList.join(', ')
}

function clearData (arr) {
  arr.forEach(el => {
    el.value = ''
  })
}

function init () {
  document.getElementById('att').addEventListener('click', function () {
    let year = document.getElementById('year')
    let brand = document.getElementById('brand')
    let price = document.getElementById('price')

    let newCar = createCar(year.value, brand.value, price.value)
    let newList = insertCar(listagem, newCar)

    printList(newList)
    clearData([year, brand, price])

  })
}

init()

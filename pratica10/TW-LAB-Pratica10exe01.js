function insertRow (table) {
  let tab = document.getElementById(table)
  tab.insertRow(0)
}

function insertCell (amount) {
  let cells = []
  for (let i = 0; i < amount.length; i++) {
    cells[i] =
  }
  console.log(cells)
}

function init() {
  document.getElementById('insertRow').addEventListener('click', function () {
    let tabl = insertRow('tabl')
  })
}

init()

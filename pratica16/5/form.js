const search = () => {
  const term = document.getElementById('search-term').value
  const searchBy = document.getElementById('search-by').value
  const result = pessoas.filter(pessoa => {
    const source = String(pessoa[searchBy]).toLowerCase()
    const toFind = String(term).toLowerCase()
    return source.indexOf(toFind) > -1
  })
  updateDOM(term ? result : pessoas)
}

const createColumn = data => {
  const col = document.createElement('td')
  col.innerHTML = data || '-'
  return col
}

const getDeleteBtn = pessoa => {
  return '<button type="button" class="pure-button" onclick="removePessoa(' + pessoa.id + ')">Apagar</button>'
}

const updateDOM = (ref = pessoas, fields = defaultFields) => {
  const container = document.getElementById('search-result')
  container.innerHTML = ''
  ref.forEach((pessoa, i) => {
    const row = document.createElement('tr')
    row.appendChild(createColumn(i + 1))
    fields.forEach(field => {
      row.appendChild(createColumn(pessoa[field]))
    })
    row.appendChild(createColumn(getDeleteBtn(pessoa)))
    container.appendChild(row)
  })
}

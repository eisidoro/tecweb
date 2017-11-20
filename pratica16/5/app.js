const pessoas = new Array()

const classTypes = [PessoaFisica, PessoaJuridica, PessoaEstrangeira]

const defaultFields = ['name', 'phone', 'cpf', 'cnpj', 'passport', 'price']

const addPessoa = (props = {}, type = 0) => {
  const newInstance = classTypes[type]
  const newObj = new newInstance(props)
  pessoas.push(newObj)
  updateDOM()
  return newObj
}

const removePessoa = id => {
  pessoas.map((pessoa, i) => {
    if (pessoa.id === id) {
      pessoas.splice(i, 1)
    }
  })
  updateDOM()
  return pessoas
}

const init = () => {
  addPessoa()
  addPessoa({name: 'Gil', cpf: '111.111.111-11'})
  addPessoa({name: 'Berto', cpf: '222.222.222-11'})
  updateDOM()
}

init()
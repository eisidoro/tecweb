class PessoaFisica extends Pessoa {
  constructor(newProps) {
    super(newProps)
    this.cpf = newProps.cpf || null
  }
}
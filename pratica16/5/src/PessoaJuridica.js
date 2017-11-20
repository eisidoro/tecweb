class PessoaJuridica extends Pessoa {
  constructor(newProps) {
    super(newProps)
    this.cnpj = newProps.cnpj || null
  }
}
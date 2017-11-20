class PessoaEstrangeira extends Pessoa {
  constructor(newProps) {
    super(newProps)
    this.passport = newProps.passport || null
  }
}
class Pessoa {
	constructor (name, phone, value) {
		this.name = name
		this.phone = phone
		this.value = value
	}

	set name  (name)  { this.name = name }
	set phone (phone) { this.phone = phone }
	set value (value) { this.value = value }

	get name () { return this.name }
	get phone () { return this.phone }
	get value () { return this.value }
}

class PessoaFisica extends Pessoa {
	constructor (name, phone, value, cpf) {
		super(name, phone, value)
		this.cpf = cpf
	}

	set cpf (cpf) {this.cpf = cpf}
	get cpf () {return this.cpf}
}

class PessoaJuridica extends Pessoa {
	constructor (name, phone, value, cnpj) {
		super(name, phone, value)
		this.cnpj = name
	}

	set cnpj (cnpj) { this.cpnj = cnpj } 
	get cnpj () { return this.cnpj }
}

class PessoaEstrangeira extends Pessoa {
	constructor (name, phone, value, passport) {
		super(name, phone, value)
		this.passport = passport
	}

	set passport (passport) { this.passport = passport }
	get passport () { return this.passport } 
}










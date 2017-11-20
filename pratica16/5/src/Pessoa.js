const defaultProps = {
  name: 'Sem nome',
  phone: '000-000-000',
  price: 0
}

class Pessoa {
  constructor(newProps = {}) {
    const props = { ...defaultProps, ...newProps }
    this.id = new Date().getTime()
    this.name = props.name
    this.phone = props.phone
    this.price = props.price
  }

  getInfo (prop) {
    return this[prop] || null
  }
}
export class OrderItem {
  constructor (name, quantity) {
    name = name.trim()
    quantity = parseInt(quantity.trim())
    if (name === '' || quantity <= 0) {
      throw new Error(`Invalid Name [${name}] or Quantity [${quantity}] for Order`)
    }
    this.name = name
    this.quantity = quantity
  }
}

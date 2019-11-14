class Order {
  constructor (name) {
    this.name = name
    this.items = []
  }
}

Order.prototype.push = function (order) {
  this.items.push(order)
}

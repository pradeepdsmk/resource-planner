import { OrderItem } from './order-item.esm.js'

export var NewOrderItems = (function () {
  var isInitialized = false
  var table
  var tbody
  var slNo
  var list

  var init = function () {
    if (isInitialized) {
      return
    }

    table = document.getElementById('new-order-items-table')
    tbody = document.getElementById('new-order-items-list')

    slNo = 0

    list = []

    table.style.display = 'none'

    isInitialized = true
  }

  var add = function (name, quantity) {
    let orderItem = null
    try {
      orderItem = new OrderItem(name, quantity)
    } catch (ex) {
      return
    }

    slNo++

    list.push(new OrderItem(name, quantity))

    const tdSlNo = document.createElement('td')
    tdSlNo.textContent = slNo

    const tdName = document.createElement('td')
    tdName.textContent = orderItem.name

    const tdQuantity = document.createElement('td')
    tdQuantity.textContent = orderItem.quantity

    const tr = document.createElement('tr')

    tr.appendChild(tdSlNo)
    tr.appendChild(tdName)
    tr.appendChild(tdQuantity)

    tbody.appendChild(tr)

    table.style.display = 'table'
  }

  return {
    init: init,
    add: add
  }
})()

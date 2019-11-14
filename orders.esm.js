import { NewOrder } from './new-order.esm.js'

export var Orders = (function () {
  var isInitialized = false
  var newOrderButton

  var init = function () {
    if (isInitialized) {
      return
    }

    newOrderButton = document.getElementById('new-order-button')

    bindUiActions()

    NewOrder.init({
      onNewOrderConfirm: onNewOrderConfirm,
      onNewOrderClose: onNewOrderClose
    })

    isInitialized = true
  }

  var bindUiActions = function () {
    newOrderButton.addEventListener('click', onNewOrder)
  }

  var onNewOrder = function () {
    NewOrder.show()
    newOrderButton.style.display = 'none'
  }

  var onNewOrderClose = function () {
    newOrderButton.style.display = 'initial'
  }

  var onNewOrderConfirm = function (order) {
    console.log(order)
    newOrderButton.style.display = 'initial'
  }

  return {
    init: init
  }
})()

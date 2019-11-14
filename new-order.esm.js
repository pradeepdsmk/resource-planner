import { NewOrderForm } from './new-order-form.esm.js'
import { NewOrderItems } from './new-order-items.esm.js'

export var NewOrder = (function () {
  var isInitialized = false
  var parentFunctions
  var doneButton
  var closeButton
  var container

  var init = function (_parentFunctions) {
    if (isInitialized) {
      return
    }

    container = document.getElementById('new-order-container')
    doneButton = document.getElementById('new-order-form-done-button')
    closeButton = document.getElementById('new-order-form-close-button')

    parentFunctions = _parentFunctions

    bindUiActions()

    NewOrderItems.init()

    NewOrderForm.init()

    hide()

    isInitialized = true
  }

  var bindUiActions = function () {
    doneButton.addEventListener('click', onDoneButtonClick)

    closeButton.addEventListener('click', onCloseButtonClick)
  }

  var onDoneButtonClick = function (e) {
    const order = {
      name: 'NewOrder12',
      items: [
        {
          name: 'Copper',
          quantity: 100
        },
        {
          name: 'Iron',
          quantity: 75
        }
      ]
    }
    parentFunctions.onNewOrderConfirm(order)
    hide()
  }

  var show = function () {
    container.style.display = 'block'
  }

  var hide = function () {
    container.style.display = 'none'
  }

  var onCloseButtonClick = function (e) { }

  return {
    init: init,
    show: show,
    hide: hide
  }
})()

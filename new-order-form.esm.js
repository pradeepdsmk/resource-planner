import { NewOrderItems } from './new-order-items.esm.js'

export var NewOrderForm = (function () {
  var addButton
  var updateButton
  var deleteButton
  var cancelButton

  var itemNameInput
  var itemQuantityInput

  var init = function () {
    addButton = document.getElementById('new-order-form-add-button')
    updateButton = document.getElementById('new-order-form-update-button')
    deleteButton = document.getElementById('new-order-form-delete-button')
    cancelButton = document.getElementById('new-order-form-cancel-button')

    itemNameInput = document.getElementById('new-order-item')
    itemQuantityInput = document.getElementById('new-order-quantity')

    bindUiActions()

    reset()
  }

  var bindUiActions = function () {
    addButton.addEventListener('click', onAddButtonClick)
    updateButton.addEventListener('click', onUpdateButtonClick)
    deleteButton.addEventListener('click', onDeleteButtonClick)
    cancelButton.addEventListener('click', onCancelButtonClick)

    itemNameInput.addEventListener('input', onItemNameEdit)
    itemQuantityInput.addEventListener('input', onItemQuantityEdit)
  }

  var onAddButtonClick = function (e) {
    NewOrderItems.add(itemNameInput.value, itemQuantityInput.value)
    itemNameInput.value = ''
    itemQuantityInput.value = ''
  }

  var onUpdateButtonClick = function (e) { }

  var onDeleteButtonClick = function (e) { }

  var onCancelButtonClick = function (e) { }

  var onItemNameEdit = function (e) { }

  var onItemQuantityEdit = function (e) { }

  var reset = function () {
    itemNameInput.value = ''
    itemQuantityInput.value = ''

    addButton.style.display = 'initial'
    updateButton.style.display = 'none'
    deleteButton.style.display = 'none'
    cancelButton.style.display = 'none'
  }

  return {
    init: init
  }
})()

import { Orders } from './orders.esm.js'

export var App = (function () {
  var isInitialized = false

  var init = function () {
    if (isInitialized) {
      return
    }

    bindUiActions()

    Orders.init()

    isInitialized = true
  }

  var bindUiActions = function () { }

  return {
    init: init
  }
})()

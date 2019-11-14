import { App } from './app.esm.js'

document.addEventListener('DOMContentLoaded', function () {
  App.init()
})

export const Experiment1 = (function () {
  const inv = {
    alabaster: 32,
    copper: 38,
    honey: 34,
    granite: 3,
    gold: 2,

    salt: 13,
    glass: 25,
    bricks: 1,
    ropes: 23,
    driedHerbs: 7,

    iron: 33,
    cloth: 0,
    jewelry: 30,
    ebony: 20,
    limestone: 10

  }

  const orders = []
  orders.push({ salt: 4, granite: 12, gold: 18, copper: 12 })
  orders.push({ bricks: 4, granite: 12, gold: 12, copper: 18 })
  orders.push({ bricks: 4, honey: 12, gold: 18, copper: 12 })
  orders.push({ ropes: 8, honey: 18, granite: 12, gold: 12 })
  orders.push({ ropes: 15, gold: 35 })
  orders.push({ glass: 15, granite: 25, gold: 18, copper: 12 })
  orders.push({ glass: 18 })
  orders.push({ driedHerbs: 22 })
  orders.push({ salt: 18 })
  orders.push({ bricks: 15 })
  orders.push({ ropes: 18 })

  const check = function () {
    let order, item, canExecute

    const shortage = {}
    for (order of orders) {
      canExecute = true

      for (item in order) {
        if (order[item] > inv[item]) {
          canExecute = false
          if (shortage[item] === undefined) {
            shortage[item] = 0
          }
          shortage[item] += order[item] - inv[item]
        }
      }
      if (!canExecute) {
        continue
      }
      console.log('can execute this order', order)
    }

    console.log('shortage', shortage)

    return Object.keys(shortage).length
  }

  return {
    check: check
  }
})()

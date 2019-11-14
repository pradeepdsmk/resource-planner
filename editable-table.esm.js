export class EditableTable {
  constructor () {
    this.editable = true

    this.items = []
  }

  setEditable (editable) {
    this.editable = editable
  }

  add (item) {
    this.items.push(item)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const orderTable = new EditableTable()
  orderTable.setEditable(true)

  console.log(orderTable)
})

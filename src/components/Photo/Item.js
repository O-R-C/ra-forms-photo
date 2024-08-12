import { v4 as uuidv4 } from 'uuid'

class Item {
  constructor(name, src) {
    this.name = name
    this.src = src
    this.id = uuidv4()
  }
}

export default Item

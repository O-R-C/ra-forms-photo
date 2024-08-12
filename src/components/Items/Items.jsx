import propTypes from 'prop-types'
import Item from '../Item/Item'
import styles from './Items.module.css'

const Items = ({ items, onDelete }) => {
  const handleDelete = (evt) => {
    const id = evt.target.dataset.id

    if (!id) return

    onDelete(id)
  }

  return (
    <div
      className={styles.container}
      onClick={handleDelete}
    >
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

Items.propTypes = {
  items: propTypes.array,
  onDelete: propTypes.func,
}

export default Items

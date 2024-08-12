import propTypes from 'prop-types'
import Item from '../Item/Item'
import styles from './Items.module.css'

const Items = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          src={item.src}
        />
      ))}
    </div>
  )
}

Items.propTypes = {
  items: propTypes.array,
}

export default Items

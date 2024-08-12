import propTypes from 'prop-types'
import styles from './Item.module.css'

const Item = ({ name, src }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={src}
        alt={name}
      />
    </div>
  )
}

Item.propTypes = {
  name: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
}

export default Item

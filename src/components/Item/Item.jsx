import propTypes from 'prop-types'
import styles from './Item.module.css'

const Item = ({ name, src, id }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={src}
        alt={name}
      />
      <button
        className={styles.btnClose}
        data-id={id}
      >
        ✘
      </button>
    </div>
  )
}

Item.propTypes = {
  name: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
}

export default Item

import propTypes from 'prop-types'
import { useRef } from 'react'
import styles from './InputFile.module.css'

const InputFile = ({ onChange }) => {
  const inputRef = useRef(null)

  const onChangeHandler = () => {
    onChange(inputRef.current.files)

    inputRef.current.value = ''
  }

  return (
    <div className={styles.container}>
      Click to select
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={onChangeHandler}
        multiple
      />
    </div>
  )
}

InputFile.propTypes = {
  onChange: propTypes.func.isRequired,
}

export default InputFile

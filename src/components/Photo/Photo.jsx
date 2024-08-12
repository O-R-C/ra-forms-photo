import { useState } from 'react'
import InputFile from '../InputFile/InputFile'
import Items from '../Items/Items'
import fileToDataUrl from './fileToDataUrl'
import Item from './Item'
import styles from './Photo.module.css'

const Photo = () => {
  const [dataPhotos, setDataPhotos] = useState([])

  const handleOnChange = async (files) => {
    const urls = await Promise.all([...files].map(async (o) => new Item(o.name, await fileToDataUrl(o))))

    setDataPhotos([...dataPhotos, ...urls])
  }

  return (
    <div className={styles.container}>
      <InputFile onChange={handleOnChange} />
      <Items items={dataPhotos} />
    </div>
  )
}

export default Photo

import styles from '../styles/ProductPage.module.css'
import { Image } from 'react-datocms'

const ProductPageImage = ({ images, setSelectedImage }) => {

  return (
    <div className={styles.alternativeImagesContainer}>
      {images.map((image) => {
        return (
          <div key={image.responsiveImage.alt} onClick={() => {setSelectedImage(image.responsiveImage)}}>
            <Image style={{width: '300px',}} data={image.responsiveImage}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProductPageImage

import styles from '../styles/ProductPage.module.css'
import { Image } from 'react-datocms'

const ProductPageImage = ({ data }) => {

  console.log(data)

  return (
    <div className={styles.alternativeImagesContainer}>
      {/* <Image data={data.product.mainImage.responsiveImage}/> */}
      {data.product.alternativeImages.map(imageItem =>
        <Image style={{width: '50%', justifySelf: 'start',}} key={imageItem.responsiveImage.alt} data={imageItem.responsiveImage}/>
      )}
    </div>
  )
}

export default ProductPageImage

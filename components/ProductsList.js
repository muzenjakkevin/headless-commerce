import styles from '../styles/ProductItem.module.css'
import ProductsItem from './ProductsItem'

const ProductsList = ({data}) => {
  return (
    <div className={styles.cardContainer}>
      {data.allProducts.map(product => (
        <div key={product.id}>
          <ProductsItem product={product}/>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
import itemStyles from '../styles/ProductItem.module.css'
import { HiOutlineShoppingCart } from 'react-icons/hi' 
import { Image } from 'react-datocms'
import Link from 'next/link'

const ProductsItem = ({ product }) => {
  return (
    <Link href="/product/[slug]" as={`/product/${product.id}`}>
        <a>
          <div className={itemStyles.productCard}>
            <Image data={product.mainImage.responsiveImage} />
            <h4>{product.name}</h4>
            <p className={itemStyles.productId}>Product id: {product.id}</p>
            <p className={itemStyles.price}>{product.price} SEK</p>
            <button type="button" className={itemStyles.addToCart}>Add to basked <HiOutlineShoppingCart className={itemStyles.buttonIcon}/></button>
          </div>
        </a>
    </Link>
  )
}

export default ProductsItem

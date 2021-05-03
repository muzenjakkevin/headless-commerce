import { Image } from 'react-datocms'
import Link from 'next/link'

const ProductsItem = ({product}) => {
  return (
    <Link href="/product/[slug]" as={`/product/${product.id}`}>
      <a>
      <Image data={product.mainImage.responsiveImage} />
        <h4>{product.name}</h4>
        <p>Price: {product.price} SEK</p>
      </a>
    </Link>
  )
}

export default ProductsItem

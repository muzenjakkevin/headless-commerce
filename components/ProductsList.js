
import ProductsItem from './ProductsItem'

const ProductsList = ({data}) => {
  return (
    <div>
      {data.allProducts.map(product => (
        <div key={product.id}>
          <ProductsItem product={product}/>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
import { Image } from 'react-datocms'

const ProductPageImage = ({ data }) => {

  console.log(data)
  return (
    <div>
      {data.product.alternativeImages.map(imageItem => 
        <Image key={imageItem.responsiveImage.alt} data={imageItem.responsiveImage}/>
      )}
    </div>
  )
}

export default ProductPageImage

import ProductsList from '../components/ProductsList'
import { request } from './lib/datocms'
import Head from "next/head"

const PRODUCT_PAGE_QUERY = `query {
  allProducts{
    id,
    name, 
    price,
    mainImage {
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    },
  }
}`

export async function getServerSideProps() {
  const data = await request({
    query: PRODUCT_PAGE_QUERY,
    variables: {limit: 10}
  })

  return {
    props: { data }
  }
}

const products = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Headless Commerce | Products</title>
      </Head>
      <ProductsList data={data}/>
    </div>
  )
}

export default products

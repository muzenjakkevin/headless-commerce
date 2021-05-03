import styles from '../../styles/ProductPage.module.css'
import { request } from '../lib/datocms'
import { Image } from 'react-datocms'
import { StructuredText } from 'react-datocms'
import Head from 'next/head'

const PRODUCT_ITEM_QUERY = `query ProductPage($id: ItemId){
  product(filter: {id: {eq: $id}}){
    id
    name
    price
    mainImage {
      responsiveImage(imgixParams: {fit: crop, w: "300", h: "300", auto: format}) {
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
    }
    description {
      value
    }
    alternativeImages {
      responsiveImage(imgixParams: {fit: crop, w: "2560", h: "1440", auto: format}) {
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
    }
  }
}`

export async function getServerSideProps( context ) {
  const data = await request({
    query: PRODUCT_ITEM_QUERY,
    variables: {id: context.params.slug}
  })

return {
    props: { data }
  }
}

const product = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Headless Commerce | {data.product.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image data={data.product.mainImage.responsiveImage} />
        </div>
        <div className={styles.textContainer}>
          <h2>{data.product.name}</h2>
          <p style={{fontSize: '0.6rem'}}>Product id: {data.product.id}</p>
          <StructuredText data={data.product.description}/>
        </div>
      </div>
    </>
  )
}

export default product

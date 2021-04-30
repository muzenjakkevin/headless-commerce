import styles from '../styles/Contact.module.css'
import { request } from './lib/datocms'
import { Image } from 'react-datocms'
import { StructuredText } from 'react-datocms'
import Head from 'next/head'

const CONTACT_PAGE_QUERY = `query {
  page(filter: {title: {eq: "Contact"} }){
    title,
    mainImage {
      responsiveImage(imgixParams: { fit: crop, w: 2560, h: 1440, auto: format }) {
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
    content {
      value
    }
  }
}`

export async function getStaticProps() {
  const data = await request({
    query: CONTACT_PAGE_QUERY,
    variables: {limit: 10}
  })

  return {
    props: { data }
  }
}

const contact = ({ data }) => {
  const contactImageUrl=data.page.mainImage.responsiveImage;
  return (
    <div>
      <Head>
        <title>Headless Commerce | Contact</title>
      </Head>
      <div className={styles.imageContainer}>
        <h1 className={styles.title}>{data.page.title}</h1>
        <Image className={styles.contactPageImage} data={contactImageUrl}/>
      </div>
      <div className={styles.contactPageContent}>
        <StructuredText data={data.page.content}/>
      </div>
    </div>
  )
}

export default contact

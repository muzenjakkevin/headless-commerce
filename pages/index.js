import Head from 'next/head'
import { request } from './lib/datocms'
import { Image } from 'react-datocms'
import { StructuredText } from 'react-datocms'
import styles from '../styles/Homepage.module.css'

const STARTPAGE_QUERY = `query {
  startpage{
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
    },
    content {
      value
    }
  }
}`

export async function getStaticProps() {
  const data = await request({
    query: STARTPAGE_QUERY,
    variables: {limit: 10}
  })

  return {
    props: { data }
  }
}

export default function Home({ data }) {
  
  const homeImageUrl=data.startpage.mainImage.responsiveImage;
  return (
    <div className={styles.container}>
      <Head>
        <title>Headless Commerce | Home</title>
      </Head>
      <div className={styles.imageContainer}>
        <Image className={styles.startpageImage} data={homeImageUrl} alt=""/>
        <h1 className={styles.title}>{data.startpage.title}</h1>
        
      </div>
      <div className={styles.startpageContentContainer}>
        <div className={styles.startpageContent}>
          <StructuredText data={data.startpage.content}/>
        </div>
      </div>
    </div>
  )
}
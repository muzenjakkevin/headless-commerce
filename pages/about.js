import styles from '../styles/About.module.css'
import {request} from './lib/datocms'
import { Image } from 'react-datocms'
import { StructuredText } from 'react-datocms'
import Head from 'next/head'

const ABOUT_PAGE_QUERY = `query {
  page(filter: {title: {eq: "About"} }){
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
    query: ABOUT_PAGE_QUERY,
    variables: {limit: 10}
  })

  return {
    props: { data }
  }
}

const about = ({ data }) => {

  const aboutImageUrl=data.page.mainImage.responsiveImage;
  return (
    <div>
      <Head>
        <title>Headless Commerce | About</title>
      </Head>
      <div className={styles.imageContainer}>
        <h1 className={styles.title}>{data.page.title}</h1>
        <Image className={styles.aboutPageImage} data={aboutImageUrl} alt=""/>
      </div>
      <div className={styles.aboutPageContentContainer}>
        <div className={styles.aboutPageContent}>
          <StructuredText data={data.page.content}/>
        </div>
      </div>
    </div>
  )
}

export default about

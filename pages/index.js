import Head from 'next/head'
import {request} from './lib/datocms'
import { StructuredText } from 'react-datocms'
import styles from '../styles/Homepage.module.css'

const STARTPAGE_QUERY = `query {
  startpage{
    title,
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
  
  const imageUrl = "https://www.datocms-assets.com/47229/1615990879-img0646.jpg";
  return (
    <div>
      <Head>
        <title>Headless Commerce</title>
      </Head>
      <div className={styles.imageContainer}>
        <h1>{data.startpage.title}</h1>
        <img className={styles.startpageImage} src={imageUrl} alt=""/>
      </div>
      <div className={styles.startpageContent}>
        <StructuredText data={data.startpage.content}/>
      </div>
    </div>
  )
}
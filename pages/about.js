import styles from '../styles/About.module.css'
import {request} from './lib/datocms'
import { StructuredText } from 'react-datocms'
import Head from 'next/head'

const ABOUT_PAGE_QUERY = `query {
  page(filter: {title: {eq: "About"} }){
    title,
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
  console.log(data)

  const aboutImageUrl='https://www.datocms-assets.com/47229/1615992797-jonkopinginnehall-1.jpg';
  return (
    <div>
      <Head>
        <title>Headless Commerce | About</title>
      </Head>
      <div className={styles.imageContainer}>
        <h1 className={styles.title}>{data.page.title}</h1>
        <img className={styles.aboutPageImage} src={aboutImageUrl} alt=""/>
      </div>
      <div className={styles.aboutPageContent}>
        <StructuredText data={data.page.content}/>
      </div>
    </div>
  )
}

export default about

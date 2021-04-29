import styles from '../styles/Contact.module.css'
import {request} from './lib/datocms'
import { StructuredText } from 'react-datocms'
import Head from 'next/head'

const CONTACT_PAGE_QUERY = `query {
  page(filter: {title: {eq: "Contact"} }){
    title,
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
  console.log(data)

  const contactImageUrl='https://www.datocms-assets.com/47229/1615992924-mobil-innehall-2.jpg';
  return (
    <div>
      <Head>
        <title>Headless Commerce | Contact</title>
      </Head>
      <div className={styles.imageContainer}>
        <h1 className={styles.title}>{data.page.title}</h1>
        <img className={styles.contactPageImage} src={contactImageUrl} alt=""/>
      </div>
      <div className={styles.contactPageContent}>
        <StructuredText data={data.page.content}/>
      </div>
    </div>
  )
}

export default contact

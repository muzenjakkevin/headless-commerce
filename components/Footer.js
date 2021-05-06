import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>Contact info below</li>
        <li className={styles.footerItem}>Email: namn.namnson@test.com</li>
        <li className={styles.footerItem}>Phone: +46123456789</li>
      </ul>    
    </footer>
  )
}

export default Footer
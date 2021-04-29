import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.navItems}>
        <li className={navStyles.navLinks}>
          <Link href='/'>Home</Link>
        </li>
        <li className={navStyles.navLinks}>
          <Link href='/products'>Products</Link>
        </li>
        <li className={navStyles.navLinks}>
          <Link href='/about'>About</Link>
        </li>
        <li className={navStyles.navLinks}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

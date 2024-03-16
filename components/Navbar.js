import React from 'react'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div>
      
        <nav>
            <ul className={styles.ul}>
                <Link className={styles.link}  href="/">Home</Link>
                <Link className={styles.link}  href="/about">About</Link>
                <Link className={styles.link}  href="/contact">Contact</Link>
                <Link className={styles.link}  href="/blog">Blog</Link>
                <Link className={styles.link}  href="/api/post">API</Link>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar

import styles from './blog.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div>
        <nav className={styles.navbar}>
            <h1 className={styles.pageLogo}>
                <Link href="/">Personal Website</Link>
            </h1>

            <ul className={styles.navlist}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>

        <main>
            <h1 className={styles.pageLogo}>- Blog -</h1>

            <p style={{ textAlign: 'center' }}>
            Welcome to the blog! Click on the links to read more.
            </p>

            <br/>
            <div id="blog-container">
            <button id="btn" className={styles.pretty}>
                click me click me
            </button>
            </div>
        </main>

        <br/>
        <footer className={styles.footer}>
            © 2023 Chloe Low&apos;s Website!! | All Rights Reserved
        </footer>
    </div>
  )
}

import styles from './blog.module.css'
import Link from 'next/link'

export default function Home() {
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
        <h1 className={styles.pageLogo}>- Home Page -</h1>
        <br />
        <div className={styles.aboutImage}>
          <img src="/mango.jpg" alt="mango logo" />
        </div>
        <br />
        <div className={styles.aboutText}>
          <hr />
          <p style={{ textAlign: 'center' }}>
            <strong>Chloe Low</strong> is a 1st year at Calpoly SLO majoring in Computer Science and plans to minor <br /> 
            in bioinformatics. In her free time she loves to play violin, dance, and go out to eat with friends.
            <br />
            She’s currently taking CSC 202, Public Speaking, Calc III, American Government and History, <br />
            and CSC490.
          </p>
        </div>
      </main>

      <br />
      <footer className={styles.footer}>
        © 2023 Chloe Low&apos;s Website!! | All Rights Reserved
      </footer>
    </div>
  )
}
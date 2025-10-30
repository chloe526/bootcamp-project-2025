    import styles from './navbar.module.css'
    import Link from 'next/link'

    export default function Navbar() {
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
        
        </div>
    )
    }
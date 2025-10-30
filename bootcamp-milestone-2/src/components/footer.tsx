    import styles from './navbar.module.css'
    import Link from 'next/link'

    export default function Footer() {
    return (
        <div>
        <br />
        <footer className={styles.footer}>
            © 2023 Chloe Low&apos;s Website!! | All Rights Reserved
        </footer>
        </div>
    )
    }
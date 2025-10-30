import styles from './../page.module.css'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div>
        <main>
            <h1 className={styles.pageLogo}>- Portfolio -</h1>
            <p>Chloe Low&apos;s Portfolio – This is where all my projects will be</p>

            <div className={styles.projectDetails}>
            <Link href="/">
                <p className={styles.projectName}><strong>Personal Website</strong></p>
            </Link>

            <p className={styles.projectDescription}>
                Making a website from scratch through HTML (this one)
            </p>

            <p>To be updated..</p>
            </div>
        </main>
    </div>
  )
}
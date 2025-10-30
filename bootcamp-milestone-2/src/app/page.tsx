import styles from './page.module.css'

export default function Home() {
  
    return (
        <main>
            <h1 className={styles.pageLogo}>- Home Page -</h1>
            <br />
            <div className={styles.aboutImage}>
            <img src="@/public/mango.jpg" alt="mango logo" />
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
  )
}

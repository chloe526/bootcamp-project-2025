import styles from './../page.module.css'
import Link from 'next/link'

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className={styles.pageLogo}>- Resume -</h1>

        <p>
          <a href="resume.pdf"> Download Resume ! </a>
        </p>
        <br />

        <div className={styles.resume}>
          <hr />
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}> Education </h2>

            <div className={styles.entry}>
              <h3 className={styles.entryTitle}> Bachelor of Science in Computer Science</h3>
              <p className={styles.entryInfo}>
                California Polytechnic State University, San Luis Obispo | Expected Graduation May 2028
              </p>
            </div>

            <div className={styles.entry}>
              <h3 className={styles.entryTitle}> High School Diploma </h3>
              <p className={styles.entryInfo}>
                Lynbrook High School, San Jose | Class of 2025 (3.97 UW)
              </p>
            </div>
          </section>

          <hr />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}> Projects & Experience </h2>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> AI Music Recommendation System </h4>
              <p className={styles.entryInfo}><em> Inspirit AI Scholars </em></p>
              <p className={styles.entryInfo}>
                Applied neural networks, logistic regressions, sentiment analysis to creating software that can determine if a puppy is <br />
                in front of a self-driving car, diagnose cancer cells as malignant or benign, or quantify opinions based on Yelp reviews. <br />
                Used knowledge to create Spotify-inspired AI Music Recommendation system.
              </p>
            </div>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> ASL Translation Mobile App </h4>
              <p className={styles.entryInfo}><em> Kode With Klossy Summer Camp </em></p>
              <p className={styles.entryDescription}>
                Collaborated with peers in all-girls coding camp to program app translating between English & ASL, breaking communication <br />
                barriers and increasing accessibility to learn ASL. Attended speaker sessions to learn from Engineering Director at Snap Inc <br />
                about experience of being a woman in STEM. Kept in contact w/ peers to expand app features.
              </p>
            </div>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> Engineering Research </h4>
              <p className={styles.entryInfo}><em> Engineering Possibilities Summer Camp at Calpoly </em></p>
              <p className={styles.entryInfo}>
                Designed a fluid dynamic experiment to compare the actual retraction velocity of soap film <br />
                to the predicted velocity. Explored sustainable energy and researched circuits with solar panels.
              </p>
            </div>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> Shadowing Research Lab </h4>
              <p className={styles.entryInfo}><em> Arcus Bioscience </em></p>
              <p className={styles.entryInfo}>
                Shadowed lead director of Lead Discovery and Optimization at Arcus Bioscience as well as 4 members of different departments to <br />
                see what the job entails & their specializations in the path to curing cancer. Learned about process of manufacturing the protein in <br />
                drugs that cure cancer, including research, effectiveness, crystallization, & duplication.
              </p>
            </div>
          </section>

          <hr />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}> Leadership & Activities </h2>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> Assistant Principal, 1st Violin (2018-2025) </h4>
              <p className={styles.entryInfo}> Golden State Youth Orchestra </p>
              <p className={styles.entryInfo}>
                Led performances at Davies Hall in SF and Carnegie Hall in NYC, mentored 50+ section mates during sectionals and rehearsals. <br />
                1st violinist of All-State Orchestra and All-State Honor Symphony at Stanford.
              </p>
            </div>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> Volunteer at After-School Program (2023-2025) </h4>
              <p className={styles.entryInfo}> California Scholarship Federation </p>
              <p className={styles.entryDescription}>
                Tutored 20+ elementary school students in an after-school Chinese immersion-program (50+ hours).
              </p>
            </div>

            <div className={styles.entry}>
              <h4 className={styles.entryTitle}> Women in STEM Member (2021-2025) </h4>
              <p className={styles.entryInfo}> Lynbrook HS WiSTEM </p>
              <p className={styles.entryInfo}>
                Presented modern STEM topics to club members, created STEM projects for library events, teaching elementary schoolers about STEM topics.
              </p>
            </div>
          </section>

          <hr />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}> Coursework </h2>
            <div className={styles.entry}>
              <ul>
                <li> Java Programming </li>
                <li> Swift Programming </li>
                <li> Data Structures and Algorithms </li>
                <li> Hack4Impact Starter Pack </li>
                <li> AP Computer Science A </li>
                <li> AP Computer Science P </li>
              </ul>
            </div>
          </section>

          <hr />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}> Skills </h2>
            <div className={styles.entry}>
              Programming: Java, Swift, Python, Mobile App Development, ~200 wpm
            </div>
          </section>

          <hr />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}> Awards </h2>
            <div className={styles.entry}>
              <ul>
                <li> Lynbrook High School Red, White, Blue Award for Collaboration (2024) </li>
                <li> AP Scholar with Distinction (2024) </li>
                <li> 3rd at Spotlight Nationals - Competitive Dance (2023) </li>
                <li> Certificate of Merit Piano Exam Level 10 w/ State Honor (2022) </li>
              </ul>
            </div>
          </section>

          <hr />

          <section className={styles.section}>
            <br />
            <a href="https://github.com/chloe526"> Github Link </a>
          </section>
        </div>
      </main>
    </div>
  )
}

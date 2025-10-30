import styles from "./../page.module.css";
import Image from "next/image";
import shawn1 from '../../public/shawnmendes.jpg';
import shawn2 from '../../public/shawnmendes2.jpg';

export default function ShawnMendes() {
  return (
    <div>
      <main className={styles.monospace}>
        <h1 className={styles["page-logo"]}>- Shawn Mendes Blog -</h1>
        <h3 className={styles["page-date"]}>October 14, 2025</h3>

        <p style={{ textAlign: "center", marginBottom: "2em" }}>
          Recently, I went to a Shawn Mendes concert with my friends back in the Bay <br/> at the Frost Amphitheater. 
          We camped at 3PM and ended up getting really good spots. I met a <br/> lot of new people while waiting and the crowd was definitely not dead.
        </p>

        <div className={styles.FoodBlogImages}>
          <Image
            src={shawn1}
            alt="Shawn Mendes concert"
            width={400}
            height={300}
            className={styles.prettyImage}
          />

          <Image
            src={shawn2}
            alt="Shawn Mendes concert 2"
            width={400}
            height={300}
            className={styles.prettyImage}
          />
        </div>

        <p></p>
        <p></p>
      </main>
    </div>
  );
}

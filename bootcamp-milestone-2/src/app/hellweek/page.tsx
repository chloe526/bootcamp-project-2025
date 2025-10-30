import styles from "./../page.module.css";
import Image from "next/image";
import mathhw from "../../public/mathhw.jpg";
import vitamincwater from "../../public/vitamincwater.jpg";

export default function HellWeek() {
  return (
    <div>
      <main className={styles.monospace}>
        <h1 className={styles["page-logo"]}>- Hell Week Blog -</h1>
        <h3 className={styles["page-date"]}>October 16, 2025</h3>

        <p style={{ textAlign: "center", marginBottom: "2em" }}>
          Please don&apos;t let poly plague hit me
        </p>

        <div className={styles.FoodBlogImages}>
          <Image
            src={mathhw}
            alt="math homework"
            width={400}
            height={300}
            className={styles.prettyImage}
          />

          <Image
            src={vitamincwater}
            alt="vitamin water"
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

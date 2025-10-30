import styles from "./../page.module.css";
import Image from "next/image";
import huilaushan from '../../public/huilaushan.jpg'
import fruitcake from '../../public/fruitcake.jpg'
import ricecake from '../../public/ricecake.jpg'
import tomatoeggrice from '../../public/tomatoeggrice.jpg'

export default function Food() {
  return (
    <div>
      <main className={styles.monospace}>
        <h1 className={styles["page-logo"]}> - Food Blog - </h1>

        <h3 className={styles["page-date"]}> May 26 2007 - October 16, 2025 </h3>

        <p style={{ textAlign: "center" }}>
          Chloe is a haribo fanatic and loves fruits of all kinds. She’s actually <br />
          really hungry right now and attached food that she has been deprived of since coming to Calpoly SLO.
        </p>

        <div className={styles.FoodBlogImages}>
          <Image src={huilaushan} alt="hui lau shan" width={400} height={300}/>
          <Image src={fruitcake} alt="fruit cake" width={400} height={300}/>
          <Image src={ricecake} alt="ricecake" width={400} height={300} />
          <Image src={tomatoeggrice} alt="tomato egg rice" width={400} height={300}/>
        </div>

        <p> </p>
        <p> </p>
      </main>
    </div>
  );
}

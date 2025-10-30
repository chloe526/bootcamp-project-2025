import Image, { StaticImageData } from "next/image";
import styles from "./blogPreview.module.css";
import Link from 'next/link'

interface BlogPreviewProps {
  title: string; 
  date: string; 
  description: string;
  image: string | StaticImageData; 
  imageAlt: string; 
  slug: string;
  id: string;
}

export default function BlogPreview(params: BlogPreviewProps) {
  return (
    <div className={styles.blogCard} id={params.id}>
      <Image
        src={params.image}
        alt={params.imageAlt}
        width={500}
        height={300}
        className={styles.blogImage}
      />

      <h3 className={styles.blogTitle}>{params.title}</h3>

      <div className={styles.blogText}>
        <p className={styles.blogDescription}>{params.description}</p>
        <p className={styles.blogPosted}>Posted on: {params.date}</p>
        <Link href={`/${params.slug}`} className={styles.blogLink}>
          Read more
        </Link>
        
      </div>
    
    </div>
  );
}

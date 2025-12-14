import Image from "next/image";
import styles from "./blogPreview.module.css";
import Link from "next/link";

interface BlogPreviewProps {
  title: string;
  date: Date;
  description: string;
  previewImageSrc: string;
  previewImageAlt: string;
  slug: string;
  id: string;
}

export default function BlogPreview(params: BlogPreviewProps) {

  return (
    <div className={styles.blogCard} id={params.id}>
      <Image
        src={params.previewImageSrc}
        alt={params.previewImageAlt}
        width={500}
        height={300}
        className={styles.blogImage}
      />

      <h3 className={styles.blogTitle}>{params.title}</h3>

      <div className={styles.blogText}>
        <p className={styles.blogDescription}>{params.description}</p>
        <p className={styles.blogPosted}>
          Posted on: {new Date(params.date).toLocaleDateString()}
        </p>

        <Link href={`/blog/${params.slug}`} className={styles.blogLink}>
          Read more
        </Link>
      </div>
    </div>
  );
}

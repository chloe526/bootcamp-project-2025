import Image from "next/image";
import styles from "./blogImage.module.css";

interface BlogImageProps {
  src: string;
  alt?: string;
}

export default function BlogImage({ src, alt }: BlogImageProps) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt || "Blog image"}
        width={800}
        height={450}
        className={styles.image}
      />

      <hr className={styles.divider} />
    </div>
  );
}

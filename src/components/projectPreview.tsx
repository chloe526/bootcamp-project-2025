import styles from "./projectPreview.module.css";

interface ProjectPreviewProps {
  title: string;
  description: string;
  id: string;
}

export default function ProjectPreview({title, description, id,}: ProjectPreviewProps) {
  return (
    <div className={styles.projectCard} id={id}>
      <div className={styles.projectText}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectDescription}>{description}</p>
      </div>

      <hr></hr>
    </div>
  );
}

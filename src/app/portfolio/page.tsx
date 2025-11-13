import styles from "../page.module.css";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import ProjectPreview from "../../components/projectPreview";

async function getProjects() {
  await connectDB();

  try {
    // find all projects, sort by title or _id (you can change this)
    const projects = await Project.find().sort({ title: 1 }).orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div>
      <main className={styles.monospace}>
        <h1 className={styles.pageLogo}>- Portfolio -</h1>

        <p className={styles.centerText}>
          Chloe Low&apos;s Portfolio – This is where all my projects will be
        </p>

        <div className={styles.projectContainer}>
          {projects?.map((project) => (
            <ProjectPreview
              title={project.title}
              description={project.description}
              id={project.id}
              key={project.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

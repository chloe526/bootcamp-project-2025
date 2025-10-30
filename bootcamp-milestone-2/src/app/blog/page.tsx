import styles from "./../page.module.css";
import BlogPreview from "../../components/blogPreview";
import blogs from "@/app/blogData";

export default function Blog() {
  return (
    <div>
      <main>
        <h1 className={styles.pageLogo}>- Blog -</h1>

        <p style={{ textAlign: "center" }}>
          Welcome to the blog! Click on the links to read more.
        </p>

        <div className={styles.blogContainer}>
          {blogs.map((blog) => (
            <BlogPreview
              title={blog.title}
              date={blog.date}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
              key={blog.id}
              id={blog.id}
            />
          ))}
        </div>

        <br />
        <div className={styles.buttonContainer}>
          <button className={styles.pretty}>click me click me</button>
        </div>
      </main>
      <br />
    </div>
  );
}

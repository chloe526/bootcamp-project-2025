import BlogComment from "../../../components/blogComment";
import BlogImage from "../../../components/blogImage";
import { IComment } from "../../../database/blogSchema";
import styles from "../../page.module.css";

type Props = {
  params: { slug: string } ;
};//| Promise<{ slug: string }

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });
    
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    const data = await res.json();
    console.log("Data from API:", data);  // <-- check what we get
    return data;

  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

export default async function Blog ( { params }: Props) {
  const {slug} = await params
  const blog = await getBlog(slug);


  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className={styles.blogContainer}>
    <h1 className={styles.title}>{blog.title}</h1>

    <p className={styles.date}>
      {new Date(blog.date).toLocaleDateString()}
    </p>

    <p className={styles.description}>{blog.description}</p>

    <div className={styles.content}>{blog.content}</div>

    <BlogImage
    src={blog.image}
    alt={blog.imageAlt || blog.title}
    />

    <section className={styles.commentsSection}>
      <h2 className={styles.commentsHeader}>Comments</h2>

      {blog.comments.length > 0 ? (
        blog.comments.map((comment: IComment, index: number) => (
          <BlogComment key={index} comment={comment} />
        ))
      ) : (
        <p className={styles.noComments}>No comments yet.</p>
      )}
    </section>
  </div>
  );
}

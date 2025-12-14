import BlogComment from "../../../components/blogComment";
import BlogImage from "../../../components/blogImage";
import { IComment } from "../../../database/blogSchema";
import styles from "../../page.module.css";
import CommentForm from "../../../components/commentForm";

type Props = {
  params: { slug: string };
}; 

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
    return data;
  } catch (err: unknown) {
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);


  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.pageLogo}>{blog.title}</h1>

      <p className={styles.content}>
        {new Date(blog.date).toLocaleDateString()}
      </p>

      <div className={styles.content}>{blog.content}</div>

      {Array.isArray(blog.images) && blog.images.length > 0 && (
  <div className={styles.blogImage}>
    {blog.images.map(
  (img: { src: string; alt: string }, i: number) => (
    <BlogImage key={i} src={img.src} alt={img.alt} />
  )
)}
  </div>
)}

      <hr className={styles.commentDivider} />

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

      <hr className={styles.commentDivider} />

      <div className={styles.commentFormWrapper}>
        <CommentForm slug={slug} />
      </div>
    </div>
  );
}

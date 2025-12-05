import BlogComment from "../../../components/blogComment";
import { IComment } from "../../../database/blogSchema";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
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

export default async function Blog({ params: { slug } }: Props) {
  const { slug } = await params; // unwrap params
  const blog = await getBlog(slug);


  console.log("Fetched blog:", blog);           // <-- check entire blog
    console.log("Blog comments:", blog?.comments);


  if (!blog) return <p>Blog not found.</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{new Date(blog.date).toLocaleDateString()}</p>

      <p>{blog.description}</p>
      <div>{blog.content}</div>
        <p>
      <h1>Comments:</h1>
      {blog.comments.map((comment: IComment, index: number) => (
        <BlogComment key={index} comment={comment} />
      ))}
    </p>

      <p>No comments yet.</p>
    </div>
  );
}

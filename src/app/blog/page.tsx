"use client";

import styles from "../page.module.css";
import BlogPreview from "../../components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function BlogComponent() {
  const blogs = await getBlogs()
  return (
    <div>
      <main className={styles.monospace}>
        <h1 className={styles.pageLogo}>- Blog -</h1>

        <p style={{ textAlign: "center" }}>
          Welcome to the blog! Click on the links to read more.
        </p>

        <div className={styles.blogPreviewContainer}>
          {blogs?.map((blog) => (
            <BlogPreview
              key={blog.id}
              title={blog.title}
              date={blog.date}
              description={blog.description}
              previewImageSrc={blog.previewImageSrc}
              previewImageAlt={blog.previewImageAlt}
              slug={blog.slug}
              id={blog.id}
            />
          ))}
        </div>

        <br />

        <br />
        {/* <div className={styles.buttonContainer}>
            <button className={styles.pretty}>
                click me click me
            </button>
            </div> */}

        <br />
      </main>
    </div>
  );
}

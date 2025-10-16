/**
 * Defines a new type named `Blog` with 6 properties.
 */
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

/**
 * Declares an array named `Blog`.
 */
const Blogs: Blog[] = [
  {
    title: "Week before Midterm Season",
    date: "October 16, 2025",
    description: "Day in life of college student before first midterm",
    image: "vitamin c pic",
    imageAlt: "",
    slug: "october-16-2025",
  },
  {
    title: "Shawn Mendes Concert",
    date: "October 14, 2025",
    description: "Went back to the bay to visit family and for Shawn Mendes concert with childhood friends",
    image: "shawnemndes",
    imageAlt: "crowd",
    slug: "october-14-2025",
  },
];

const blogContainer = document.getElementById('blog-container')!;
console.log(blogContainer)

Blogs.forEach((blog) => {
	const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("p");
    date.classList.add("blog-date");
    date.textContent = blog.date;
    
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const description = document.createElement("p");
    description.textContent = blog.description;

    blogDiv.appendChild(title);
    blogDiv.appendChild(date);
    blogDiv.appendChild(image);
    blogDiv.appendChild(description);

    blogContainer.appendChild(blogDiv);
});

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
  id: string;
};

/**
 * Declares an array named `Blog`.
 */
const Blogs: Blog[] = [
  {
    title: "Midterm Season",
    date: "October 16, 2025",
    description: "Day in life of college student during their first midterm",
    image: "hellweek.jpg",
    imageAlt: "crashing out",
    slug: "/hellweek",
    id: "1"
  },
  {
    title: "Shawn Mendes Concert",
    date: "October 14, 2025",
    description: "Went back to the bay area to see family and attend Shawn Mendes concert with childhood friends",
    image: "shawnmendes.jpg",
    imageAlt: "shawn mendes concert pic",
    slug: "/shawnmendes",
    id: "2"
  },
  {
    title: "Food.",
    date: "May 26 2007 - October 16, 2025",
    description: "Food that I've been deprived of since leaving for Calpoly SLO",
    image: "huilaushan.jpg",
    imageAlt: "hui lau shan preview",
    slug: "food",
    id: "3"
  },
];

const blogContainer = document.getElementById('blog-container');
console.log(blogContainer)



Blogs.forEach((blog) => {
    const linebreak = document.createElement("hr");

    const space = document.createElement("p")

	const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("p");
    date.classList.add("blog-date");
    date.textContent = blog.date;

    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.textContent = "Read more !";
    
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.id = `blog-image-${blog.id}`;
    image.style.width = "100%";
    image.style.maxWidth = "400px";
    image.style.borderRadius = "10px";

    const description = document.createElement("p");
    description.textContent = blog.description;

    blogDiv.append(linebreak);
    blogDiv.appendChild(title);
    blogDiv.appendChild(date);
    blogDiv.appendChild(image);
    blogDiv.appendChild(description);
    blogDiv.appendChild(link);
    blogDiv.append(space);

    if (blogContainer)
        blogContainer.appendChild(blogDiv);
});


const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', () => {
        const img = document.getElementById('blog-image-1') as HTMLImageElement;
        if (img) {
            img.src = "dead.jpg"; 
            img.alt = "dead image"; 
        }
    });
}

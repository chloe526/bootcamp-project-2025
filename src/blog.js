/**
 * Declares an array named `Blog`.
 */
var Blogs = [
    {
        title: "Week before Midterm Season",
        date: "October 16, 2025",
        description: "Day in life of college student before first midterm",
        image: "hellweek.jpg",
        imageAlt: "crashing out",
        slug: "/midterm-season",
    },
    {
        title: "Shawn Mendes Concert",
        date: "October 14, 2025",
        description: "Went back to the bay area to see family and attend Shawn Mendes concert with childhood friends",
        image: "shawnmendes.jpg",
        imageAlt: "shawn mendes concert pic",
        slug: "/shawnmendes",
    },
    {
        title: "Food.",
        date: "May 26 2007 - October 16, 2025",
        description: "Food that I've been deprived of since leaving for Calpoly SLO",
        image: "huilaushan.jpg",
        imageAlt: "hui lau shan preview",
        slug: "food",
    },
];
var blogContainer = document.getElementById('blog-container');
console.log(blogContainer);
Blogs.forEach(function (blog) {
    var linebreak = document.createElement("hr");
    var space = document.createElement("p");
    var blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var date = document.createElement("p");
    date.classList.add("blog-date");
    date.textContent = blog.date;
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = "Read more !";
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.style.width = "100%";
    image.style.maxWidth = "400px";
    image.style.borderRadius = "10px";
    var description = document.createElement("p");
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

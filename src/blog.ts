const blogContainer = document.getElementById("page-title");

// Define Blog type
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// Create blog posts
const blogPosts: Blog[] = [
  {
    title: "My favorite fruit",
    date: "10-13-2025",
    description: "This is my favorite fruit, the apple",
    image: "../public/apple.jpg",
    imageAlt: "AI Apple",
    slug: "blog/apple.html",
  },
  {
    title: "My second favorite fruit",
    date: "10-13-2025",
    description: "This is my second favorite fruit, The Canvendish Banana",
    image: "../public/banana.jpg",
    imageAlt: "Banana",
    slug: "blog/banana.html",
  },
];

blogPosts.forEach((blog) => {
  // Create container for posts
  let containter = document.createElement("div");
  containter.className = "blog-container";

  // Create anchor for href
  let posts = document.createElement("a");
  posts.className = "blog-post";
  posts.href = blog.slug;

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  // Create container for text
  let postText = document.createElement("div");

  const title = document.createElement("h2");
  title.innerText = blog.title;

  const date = document.createElement("h3");
  date.innerText = blog.date;

  const description = document.createElement("p");
  description.innerText = blog.description;

  // Append elements
  postText.append(title, date, description);
  posts.append(image, postText);
  containter.append(posts);
  blogContainer.append(containter);
});

var blogContainer = document.getElementById("page-title");
var blogPosts = [
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
blogPosts.forEach(function (blog) {
    var containter = document.createElement("div");
    containter.className = "blog-container";
    var posts = document.createElement("a");
    posts.className = "blog-post";
    posts.href = blog.slug;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var postText = document.createElement("div");
    var title = document.createElement("h2");
    title.innerText = blog.title;
    var date = document.createElement("h3");
    date.innerText = blog.date;
    var description = document.createElement("p");
    description.innerText = blog.description;
    postText.append(title, date, description);
    posts.append(image, postText);
    containter.append(posts);
    blogContainer.append(containter);
});

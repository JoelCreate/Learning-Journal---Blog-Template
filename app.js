
const featuredPost = document.getElementById("featured-post")
const blogSection = document.getElementById("blog-section")
const recentBlogs = document.getElementById("recent-blogs")
const aboutSection = document.getElementById("about")

const aboutBtn = document.getElementById("about-btn")



aboutBtn.addEventListener("click", function(){
    if (aboutSection.style.display === "flex") {
        aboutSection.style.display = "none"
        blogSection.style.display = "grid"
        featuredPost.style.display = "flex"
    } else {
        aboutSection.style.display = "flex"
        blogSection.style.display = "none"
        featuredPost.style.display = "none"
    }
})


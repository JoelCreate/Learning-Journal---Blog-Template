
const featuredPost = document.getElementById("featured-post")

const recentBlogs = document.getElementById("recent-blogs")

const blogArray = []
const blogSection = document.getElementsByClassName("blog-section")



for ( let i = 0; i < blogSection.childNodes; i++ ) {
    blogArray.push(blogSection.childNodes[i])
   
}

// recentBlogs.innerHTML = blogArray.innerHTML

// blogSection.forEach((blog) => {
//     console.log(blog.id)
// })






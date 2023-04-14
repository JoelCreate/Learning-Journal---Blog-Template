//const featuredPost = document.getElementById("featured-post")

const recentBlogs = document.querySelector("#recent-blogs")

const blogArray = [
   {
      id: 0,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      date: "July 27, 2022",
      title: "Hello World",
      description: "Coding is the process of creating instructions for a computer to follow, enabling it to perform tasks and solve problems.",
      href: "../blogs/post1.html"
   },
   {
      id: 1,
      image: "https://images.unsplash.com/photo-1491802259623-5468d0e0d7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      date: "July 26, 2022",
      title: "How It All Began",
      description: "I began coding by taking the front end developer course on Scrimba and became fascinated with the ability to create software and solve complex problems.",
      href: "../blogs/post2.html"
   },
   {
      id: 2,
      image: "https://images.unsplash.com/photo-1611427579146-5a418d32f0ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      date: "July 25, 2022",
      title: "Why I Learned To Code",
      description: "I learned to code because I was interested in the problem-solving aspect of it, and wanted to be able to create and build things using technology.",
      href: "../blogs/post2.html"
   } 
]

function renderRecentBlogs () {
    
    blogArray.forEach(function(blog){
      //   const blogLink = document.createElement('a')
      //   blogLink.classList.add('blog-link')
      //   blogLink.href = blog.href

        const blogPost =  document.createElement('a')
        blogPost.id = blog.id
        blogPost.href = blog.href
        blogPost.classList.add('blog-post')

        const recentBlogDate = document.createElement('p')
        recentBlogDate.textContent = blog.date

        const recentBlogTitle = document.createElement('h3')
        recentBlogTitle.textContent = blog.title

        const recentBlogImage = document.createElement('img')
        recentBlogImage.classList.add('blog-img')
        recentBlogImage.setAttribute('src', blog.image)

        const recentBlogDescription = document.createElement('p')
        recentBlogDescription.textContent = blog.description

    
      //   blogLink.setAttribute('href', blog.link)

        
        blogPost.append(recentBlogImage)  
        blogPost.append(recentBlogDate)  
        blogPost.append(recentBlogTitle) 
        blogPost.append(recentBlogDescription) 
         
        
        recentBlogs.append(blogPost)
        
        

    })

}

renderRecentBlogs()





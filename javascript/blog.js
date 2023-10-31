// Function to load content for the Blog section
function loadBlogContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear the existing content

    // Load content from blog.html
    fetch('blog.html')
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Click event handler for the "Blog" link
    document.getElementById('showBlog').addEventListener('click', function (e) {
        e.preventDefault();
        loadBlogContent(); // Load the content for the Blog section
    });
});

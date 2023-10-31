// Function to load content for the Projects section
function loadProjectsContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear the existing content

    // Load content from projects.html
    fetch('projects.html')
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Click event handler for the "Projects" link
    document.getElementById('showProjects').addEventListener('click', function (e) {
        e.preventDefault();
        loadProjectsContent(); // Load the content for the Projects section
    });
});

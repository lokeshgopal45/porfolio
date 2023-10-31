// Function to load content for the Home section
function loadHomeContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear the existing content

    // Load content from home.html
    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Call the loadHomeContent function when the page loads
loadHomeContent();

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Click event handler for the "Home" link
    document.getElementById('showHome').addEventListener('click', function (e) {
        e.preventDefault();
        loadHomeContent(); // Load the content for the Home section
    });
});

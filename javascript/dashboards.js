// Function to load content for the Dashboard section
function loadDashboardContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear the existing content

    // Load content from dashboards.html
    fetch('dashboards.html')
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Click event handler for the "Dashboard" link
    document.getElementById('showDashboard').addEventListener('click', function (e) {
        e.preventDefault();
        loadDashboardContent(); // Load the content for the Dashboard section
    });
});

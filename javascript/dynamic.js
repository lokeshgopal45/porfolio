// JavaScript for dynamic content loading
const mainContent = document.getElementById('main-content');

// Function to load content from an HTML file
function loadContent(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error(error));
}

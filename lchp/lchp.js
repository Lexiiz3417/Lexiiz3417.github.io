// Function to toggle between dark and light themes
function toggleTheme() {
    // Select the body element
    var body = document.body;
    
    // Toggle the 'dark-theme' class on the body
    body.classList.toggle('dark-theme');
}

// Create the floating button element
var floatingButton = document.createElement('div');
floatingButton.className = 'floating-theme-button';
floatingButton.innerHTML = '<i class="fas fa-adjust"></i>';

// Append the floating button to the body
document.body.appendChild(floatingButton);

// Add click event listener to the floating button
floatingButton.addEventListener('click', function() {
    // Call the toggleTheme function when the button is clicked
    toggleTheme();
});

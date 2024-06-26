// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById('loginForm');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add more complex validation logic here if needed
        if (username.trim() === '' || password.trim() === '') {
            // Show error message
            showError('Please enter both username and password.');
        } else {
            // Perform your login logic here (dummy example)
            // Replace this with your actual login logic, e.g., AJAX request to a server
            if (username === 'admin' && password === 'password') {
                // Successful login
                alert('Login successful! Redirecting...');
                // Replace with your redirect logic
                window.location.href = 'dashboard.html';
            } else {
                // Failed login
                showError('Invalid username or password.');
            }
        }
    });

    // Function to show error message
    function showError(message) {
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = message;
    }
});
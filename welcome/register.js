document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic email format validation (you may need more robust validation)
        if (!isValidEmail(email)) {
            showError("Please enter a valid email address.");
            return;
        }

        // Basic password validation (you may add more complex rules)
        if (password.length < 8) {
            showError("Password must be at least 8 characters long.");
            return;
        }

        // If validations pass, you can proceed with your login logic here
        // For demonstration, let's assume we redirect after successful validation
        window.location.href = 'dashboard.html'; // Replace with your dashboard page

    });

    function isValidEmail(email) {
        // Basic email format check
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(message) {
        errorDiv.textContent = message;
    }
});
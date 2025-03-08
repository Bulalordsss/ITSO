document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const backBtn = document.querySelector('.btn-back');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const university = document.getElementById('university').value;

        // Basic validation
        if (!fullName || !username || !email || !university) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // If validation passes, you can proceed with form submission
        console.log('Form submitted:', { fullName, username, email, university });
        alert('Sign up successful!');
        form.reset();
    });

    backBtn.addEventListener('click', () => {
        // Handle back button click - you can redirect to previous page
        window.history.back();
    });

    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
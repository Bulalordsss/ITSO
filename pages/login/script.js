// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Basic validation (You can add more advanced checks here)
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Login attempt with:\nEmail: ${email}\nPassword: ${password}`);

    // You can add further login handling here, such as an API call

    this.reset(); // Reset form after submission
});

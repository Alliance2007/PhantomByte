document.getElementById('register-form').addEventListener('submit', function(event) {
 event.preventDefault();
    const FIRSTNAME = document.getElementById('firstname').value.trim();
    if (!FIRSTNAME) {
        alert('Please enter your first name.');
        return;
    } else if (FIRSTNAME.length < 3) {
        alert('First name must be at least 3 characters long.');
        return;
    }
    const LASTNAME = document.getElementById('lastname').value.trim();
    if (!LASTNAME) {
        alert('Please enter your last name.');
        return;
    } else if (LASTNAME.length < 3) {
        alert('Last name must be at least 3 characters long.');
        return;
    }
    const EMAIL = document.getElementById('email').value.trim();
    if (!EMAIL) {
        alert('Please enter an email address.');
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EMAIL)) {
        alert('Please enter a valid email address.');
        return;
    }
    const PASSWORD = document.getElementById('password').value.trim();
    if (!PASSWORD) {
        alert('Please enter a password.');
        return;
    } else if (PASSWORD.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    const button = document.getElementById('register-button');
    button.disabled = true; // Disable the button to prevent multiple submissions
    alert(`Welcome, ${FIRSTNAME} ${LASTNAME}! You have successfully registered.`);
    


})
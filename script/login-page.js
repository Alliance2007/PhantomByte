 document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            if (!username) {
                alert('Please enter a username.');
                return;
            }
            else if (username.length <15) {
                alert('Username must be at least 3 characters long.');
                return;
            }
            const email = document.getElementById('email').value.trim();
            if (!email) {
                alert('Please enter an email address.');
                return;
            }
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            const password = document.getElementById('password').value.trim();
            if (!password) {
                alert('Please enter a password.');
                return;
            }
            else if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            if (username && email && password) {
                alert(`Welcome, ${username}! You have successfully logged in.`);
                // Redirect to dashboard or perform further actions
            } else {
                alert('Please fill in all fields.');
            }
            
        });
        document.getElementById
    
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (username && password) {
        // Store user details in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Signup successful! You can now log in.');
        document.getElementById('signupForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

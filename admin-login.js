document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Demo credentials (in a real app, this would be handled by a server)
    if (username === 'admin' && password === 'admin123') {
        // Store login state
        localStorage.setItem('adminLoggedIn', 'true');
        // Redirect to admin dashboard
        window.location.href = 'admin.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.classList.add('show');
    }
}); 
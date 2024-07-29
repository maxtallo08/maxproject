document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ini hanya contoh sederhana. Dalam aplikasi nyata, Anda harus memverifikasi kredensial pengguna dengan server.
    if (username === 'max' && password === '01') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah');
    }
});

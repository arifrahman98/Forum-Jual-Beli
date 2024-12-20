document.addEventListener('DOMContentLoaded', function() {
    // Simulasi login
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            // Simulasi pengecekan login
            if (username === 'user' && password === 'password') {
                alert('Login berhasil!');
                window.location.href = 'index.html';
            } else {
                alert('Username atau password salah.');
            }
        });
    }

    // Pendaftaran pengguna baru
    const registerForm = document.querySelector('#register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.querySelector('#reg-username').value;
            const email = document.querySelector('#reg-email').value;
            const password = document.querySelector('#reg-password').value;
            // Simulasi penyimpanan data pengguna baru
            alert(`Pendaftaran berhasil!\nUsername: ${username}\nEmail: ${email}`);
            window.location.href = 'login.html';
        });
    }

    // Pencarian produk
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchTerm = document.querySelector('#search-input').value.toLowerCase();
            const products = document.querySelectorAll('.product');
            products.forEach(function(product) {
                const productName = product.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }

    // Formulir kontak dukungan
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.querySelector('#contact-name').value;
            const email = document.querySelector('#contact-email').value;
            const message = document.querySelector('#contact-message').value;
            // Simulasi pengiriman pesan
            alert(`Pesan terkirim!\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);
        });
    }
});
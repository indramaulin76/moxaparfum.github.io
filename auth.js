const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

const email = document.getElementById('loginEmail').value.trim();
const password = document.getElementById('loginPassword').value.trim();
  // Ambil semua user dari localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Cek apakah ada yang cocok
  const matchedUser = users.find(user => user.email === email && user.password === password);

  if (matchedUser) {
    alert('Login berhasil!');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', JSON.stringify(matchedUser)); // Optional
    window.location.href = 'index.html';
  } else {
    alert('Email atau password salah!');
  }
});




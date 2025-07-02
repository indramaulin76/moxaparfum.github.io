const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Ambil nilai input
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Validasi konfirmasi password
  if (password !== confirmPassword) {
    alert('Konfirmasi password tidak cocok!');
    return;
  }

  // Ambil daftar user yang sudah ada
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Cek apakah email sudah digunakan
  const isEmailUsed = users.some(user => user.email === email);
  if (isEmailUsed) {
    alert('Email sudah digunakan. Silakan pakai email lain.');
    return;
  }

  // Tambahkan user baru
  users.push({ email, password });

  // Simpan ke localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Pendaftaran berhasil! Silakan login.');
  window.location.href = 'auth.html';
});

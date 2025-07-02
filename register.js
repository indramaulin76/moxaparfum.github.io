document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (password !== confirmPassword) {
    alert("Password tidak cocok!");
    return;
  }

  // Simpan data ke localStorage (sementara)
  localStorage.setItem('user', JSON.stringify({ email, password }));
  alert('Akun berhasil dibuat! Silakan login.');

  // Arahkan ke halaman login
  window.location.href = "auth.html";
});


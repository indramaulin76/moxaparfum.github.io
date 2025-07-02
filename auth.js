// Ambil elemen dari form
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

// Data login sementara (dummy login)
const dummyEmail = "user@example.com";
const dummyPassword = "123456";

// Event ketika form disubmit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form reload halaman

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === dummyEmail && password === dummyPassword) {
    // Simpan status login ke localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect ke halaman utama (index.html)
    window.location.href = "index.html";
  } else {
    loginError.style.display = "block";
  }
});
const registerForm = document.getElementById("registerForm");
const registerStatus = document.getElementById("registerStatus");
const formTitle = document.getElementById("formTitle");

// Ganti Form Login ↔ Daftar
document.getElementById("showRegister").addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  formTitle.textContent = "Daftar";
});

document.getElementById("showLogin").addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Login";
});

// LOGIN
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && email === userData.email && password === userData.password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    window.location.href = "index.html";
  } else {
    loginError.textContent = "Email atau password salah!";
  }
});
// REGISTER
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  const newUser = {
    email,
    password
  };

  localStorage.setItem("userData", JSON.stringify(newUser));
  registerStatus.style.color = "green";
  registerStatus.textContent = "Pendaftaran berhasil! Silakan login.";
});

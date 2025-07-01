// script.js

function checkVisible() {
  const elements = document.querySelectorAll('.produk-item');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}
// Toggle menu hamburger
const menuIcon = document.getElementById('menu-icon');
const menuLinks = document.getElementById('menu-links');

menuIcon.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

// Tutup menu ketika link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.classList.remove('active');
  });
});


// Scroll smooth ke bagian tertentu
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Inisialisasi animasi dan tampilkan jika sudah terlihat
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.produk-item');
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.5s ease';
  });
  checkVisible(); // langsung cek saat halaman dimuat
});

// Tutup menu saat klik salah satu link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});


window.addEventListener('scroll', checkVisible);

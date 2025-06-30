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

window.addEventListener('scroll', checkVisible);

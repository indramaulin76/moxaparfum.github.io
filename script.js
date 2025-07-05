// === ANIMASI PRODUK KETIKA SCROLL ===
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

window.addEventListener('scroll', checkVisible);
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.produk-item');
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.5s ease';
  });
  checkVisible();
});

// === TOGGLE MENU HAMBURGER ===
const menuIcon = document.getElementById('menu-icon');
const menuLinks = document.getElementById('menu-links');

if (menuIcon && menuLinks) {
  menuIcon.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
  });

  document.addEventListener('click', function(event) {
    const isClickInside = menuLinks.contains(event.target) || menuIcon.contains(event.target);
    if (!isClickInside) menuLinks.classList.remove('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.classList.remove('active');
    });
  });
}

// === SMOOTH SCROLLING ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// === KERANJANG FUNGSIONAL ===

// Tambah produk ke localStorage
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price: parseInt(price) });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert("Produk ditambahkan ke keranjang!");
}

// Tampilkan jumlah item di ikon keranjang
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const countSpan = document.querySelector(".cart-count");
  if (countSpan) countSpan.textContent = cart.length;
}

// Tampilkan isi keranjang di cart.html
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cartItems');
  const totalDisplay = document.getElementById('totalPrice');
  let total = 0;

  if (!cartContainer || !totalDisplay) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Keranjang kamu kosong.</p>";
    totalDisplay.textContent = "Rp 0";
    return;
  }

  cartContainer.innerHTML = "";
  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - Rp ${item.price.toLocaleString()}</p>
      <button onclick="removeFromCart(${index})">Hapus</button>
    `;
    cartContainer.appendChild(itemDiv);
    total += item.price;
  });

  totalDisplay.textContent = "Rp " + total.toLocaleString("id-ID");
}

// Hapus produk dari keranjang
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
}

// Checkout dan hapus semua isi keranjang
function clearCart() {
  localStorage.removeItem('cart');
  updateCartCount();
  displayCartItems();
  alert("Checkout berhasil. Terima kasih!");
}

// === JALANKAN SAAT HALAMAN DIMUAT ===
window.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  if (document.getElementById("cartItems")) {
    displayCartItems();
  }
});
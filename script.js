// --- Мобильное меню ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Закрываем меню при клике по ссылке
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// --- Галерея / Лайтбокс ---
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lb-img');
const lbCaption  = document.getElementById('lb-caption');
let lbIndex = 0;

function lbOpen(index) {
  lbIndex = index;
  const img = galleryItems[lbIndex].querySelector('img');
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.textContent = img.alt;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function lbClose() {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  lbIndex = (lbIndex + dir + galleryItems.length) % galleryItems.length;
  const img = galleryItems[lbIndex].querySelector('img');
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.textContent = img.alt;
}

galleryItems.forEach((item, i) => item.addEventListener('click', () => lbOpen(i)));
document.getElementById('lb-close').addEventListener('click', lbClose);
document.getElementById('lb-prev').addEventListener('click', () => lbNavigate(-1));
document.getElementById('lb-next').addEventListener('click', () => lbNavigate(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lbClose(); });
document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') lbClose();
  if (e.key === 'ArrowLeft') lbNavigate(-1);
  if (e.key === 'ArrowRight') lbNavigate(1);
});

// --- FAQ-аккордеон ---
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    // Закрываем остальные
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) {
        other.querySelector('.faq-answer').classList.add('hidden');
        other.querySelector('.faq-icon').classList.remove('rotate-180');
      }
    });

    // Переключаем текущий
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});

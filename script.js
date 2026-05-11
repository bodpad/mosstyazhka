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

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

// --- Форма → WhatsApp ---
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const details = document.getElementById('details').value.trim();

  // Собираем текст сообщения
  let message = `Заявка с сайта мосстяжка.рф\n\n`;
  message += `Имя: ${name}\n`;
  message += `Телефон: ${phone}\n`;
  if (details) {
    message += `Объект: ${details}\n`;
  }

  // Открываем WhatsApp с подготовленным сообщением
  const whatsappUrl = `https://wa.me/79853207025?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});

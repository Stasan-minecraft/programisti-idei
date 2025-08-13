/*
 * Простий JavaScript для роботи з мобільним меню та формою зворотного зв'язку.
 */

// Перемикає мобільне меню
function toggleMenu() {
  const navList = document.querySelector('.main-nav ul');
  navList.classList.toggle('active');
}

// Обробка надсилання форми
function submitForm(event) {
  event.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Дякуємо! Ваше повідомлення надіслано.';
  // Очистити поля форми
  event.target.reset();
}

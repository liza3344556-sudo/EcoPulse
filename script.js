
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
}
const form = document.querySelector('[data-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = document.querySelector('.notice');
    if (notice) notice.style.display = 'block';
    form.reset();
  });
}

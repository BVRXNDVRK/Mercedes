const modal = document.querySelector('.modal');

modal.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');
  }
});


// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ
const modalBtn = document.querySelectorAll('.more');

modalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});
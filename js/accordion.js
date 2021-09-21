const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

/* ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ 1 СПОСОБ (СНАЧАЛА ПРОБОВАЛ 2-М СПОСОБОМ НО НЕ СРАБОТАЛО, ГДЕ-ТО ОШИБСЯ И НЕ НАШЕЛ ГДЕ)*/
// btns.forEach((btnItem, index) => {
//   btnItem.addEventListener('click', () => {
//     closeItem(openItem);
//   });

//   function closeItem(callBack) {
//     if (btnItem.classList.value == 'feature__link feature__link_active') {
//       btnItem.classList.remove('feature__link_active');
//       lists[index].classList.add('hidden');
//     } else {
//       callBack();
//     }
//   }

//   function openItem() {
//     btns.forEach((btnItem) => {
//       btnItem.classList.remove('feature__link_active');
//     });
//     btnItem.classList.add('feature__link_active');

//     lists.forEach((listItem) => {
//       listItem.classList.add('hidden');
//     });
//     lists[index].classList.remove('hidden');
//   }  
// });

/* ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ 2-Й СПОСОБ (ВСЕ ЖЕ ПОДУМАЛ ЧТО ДОЛЖНО РАБОТАТЬ ТАКИМ СПОСОБОМ ВЕДЬ ВСЕ ЛОГИЧНО И НАПИСАЛ ЕЩЕ РАЗ. УСПЕШНО.)*/
btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    if (btnItem.classList.value == 'feature__link feature__link_active') {
      btnItem.classList.remove('feature__link_active');
      lists[index].classList.add('hidden');
    } else {
      btns.forEach((btnItem) => {
        btnItem.classList.remove('feature__link_active');
      });
      btnItem.classList.add('feature__link_active');

      lists.forEach((listItem) => {
        listItem.classList.add('hidden');
      });
      lists[index].classList.remove('hidden');
    }
  });
});
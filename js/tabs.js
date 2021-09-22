
const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElements = document.querySelectorAll('[data-tabs-field]');


for (const btn of tabsHandlerElements) {
  btn.addEventListener('click', () => {
    tabsHandlerElements.forEach(item => item.classList.remove('design-list__item_active'));
    btn.classList.add('design-list__item_active');

    tabsContentElements.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });

    // ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ
    const sectionTitles = document.querySelectorAll('.design__title');
    if (btn == tabsHandlerElements[0]) {
      sectionTitles[0].classList.remove('hidden');
      sectionTitles[1].classList.add('hidden');

    } else {
      sectionTitles[0].classList.add('hidden');
      sectionTitles[1].classList.remove('hidden');
    }
  });
}

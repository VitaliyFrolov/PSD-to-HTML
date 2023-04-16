window.addEventListener('DOMContentLoaded', () => {

  //modal

  const popupTrigger = document.querySelector('[data-popup]'),
        popup = document.querySelector('.popup'),
        popupCloseBtn = document.querySelector('[data-close]');

  function openPopup() {
    popup.classList.add('show');
    popup.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  popupTrigger.addEventListener('click', openPopup);

  function closePopup() {
    popup.classList.add('hidden');
    popup.classList.remove('show');
    document.body.style.overflow = '';
  }

  popupCloseBtn.addEventListener('click', closePopup);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && popup.classList.contains('show')) {
        closePopup();
    }
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
       closePopup();
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openPopup();
        window.removeEventListener('scroll', showModalByScroll);

    }
  }

  window.addEventListener('scroll', showModalByScroll);
});

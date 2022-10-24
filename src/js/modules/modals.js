const modals = () => {

  function openModal(openArg) {
    openArg.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal(closeArg) {
    closeArg.style.display = 'none';
    document.body.style.overflow = '';
  }

  function bindModal(triggerSelector, modalSelector, closeSelector) {

    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(btn => {
      btn.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }
        openModal(modal);
      });
    })

    close.addEventListener('click', () => {
      closeModal(modal);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    })
  }

  function showModalTimeout(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // showModalTimeout('.popup', 60000);

};

export default modals;
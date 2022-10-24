const modals = () => {

  function openModal(openArg, scrollW) {
    openArg.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollW}px`;
  }

  function closeModal(closeArg, allModal) {
    allModal.forEach(item => {
      item.style.display = 'none';
    });
    closeArg.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
  }

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    trigger.forEach(btn => {
      btn.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });
        openModal(modal, scroll);
      });
    })

    close.addEventListener('click', () => {
      closeModal(modal, windows);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal && closeClickOverlay) {
        closeModal(modal, windows);
      }
    })
  }

  function showModalTimeout(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time)
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // showModalTimeout('.popup', 60000);

};

export default modals;

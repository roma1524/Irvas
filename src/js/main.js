import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

// --------- Modal -----------

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let deadLine = '2022-11-20';
  let modalState = {};

  changeModalState(modalState);
  modals(modalState);
  console.log(modalState);
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'after_click');
  tabs('.decoration_slider', '.no_click', '.decor_cont', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
  forms(modalState);
  timer('.container1', deadLine);
  images();
});
import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

// --------- Modal -----------

document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'after_click');
  tabs('.decoration_slider', '.no_click', '.decor_cont', 'after_click');
  forms();

});
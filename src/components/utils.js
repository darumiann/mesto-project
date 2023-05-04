import { closeByEscape } from '../index.js';

/* Функция открытия PopUp */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

/* Функция закрытия PopUp */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

export { openPopup, closePopup };

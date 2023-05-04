import { popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, popupCardsAdd, popup } from '../components/constants.js';
import { toggleButtonStateFormCard } from '../components/validate.js';
import { openPopup, closePopup } from './utils.js';

/* Открытие и обработка openPopupEditProfile */
function openPopupEditProfile() {
  profileNameInput.value = profileUserName.textContent;
  profileStatusInput.value = profileUserStatus.textContent;
  openPopup(popupEditProfile);
}

/* Закрытие и обработка openPopupEditProfile */
function editeProfile(event) {
  event.preventDefault();
  profileUserName.textContent = profileNameInput.value;
  profileUserStatus.textContent = profileStatusInput.value;
  closePopup(popupEditProfile);
}

/* Открываем попап добавления карточки */
function openPopupCardsAdd () {
  toggleButtonStateFormCard();
  openPopup(popupCardsAdd);
}

export { openPopupEditProfile, editeProfile, openPopupCardsAdd, openPopup, closePopup};

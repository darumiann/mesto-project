import { popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, popupCardsAdd, popups } from '../components/utils.js';

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
  openPopup(popupCardsAdd);
}

/* Функция открытия PopUp */
function openPopup(popups) {
  popups.classList.add('popup_opened');
};

/* Функция закрытия PopUp */
function closePopup(popups) {
  popups.classList.remove('popup_opened');
};

export { openPopupEditProfile, editeProfile, openPopupCardsAdd, openPopup, closePopup};

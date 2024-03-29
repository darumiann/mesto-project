import { popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, popupCardsAdd, popup, avatarInput, submitButtonAvatar, profileAvatarForm, profileUserAvatar, formValidationConfig  } from '../components/constants.js';
import { toggleButtonStateFormCard, toggleButtonStateAvatarEdit, toggleButtonStateProfileEdit } from '../components/validate.js';
import { openPopup, closePopup, changeButtonText  } from './utils.js';
import { updateUserInfo, updateAvatar, getUserInfo, userInfo, getuserID} from './api.js';

/* Закрытие и обработка openPopupEditProfile */
function editeProfile(event) {
  event.preventDefault();
  const newName = profileNameInput.value;
  const newAbout = profileStatusInput.value;
  changeButtonText('Сохранение...', 'Сохранить', true, submitButtonProfile);
  updateUserInfo(newName, newAbout)
  .then(userData => {
    profileUserAvatar.alt = newName;
    closePopup(popupEditProfile);
    profileUserName.textContent = userData.name;
    profileUserStatus.textContent = userData.about;
  })
  .catch(error => { console.error(error) })
  .finally(() => {
    changeButtonText('Сохранение...', 'Сохранить', false, submitButtonProfile);
  })
}

function editeProfileAvatar(event) {
  event.preventDefault();
  const newAvatar = avatarInput.value;
  changeButtonText('Сохранение...', 'Сохранить', true, submitButtonAvatar);
  updateAvatar(newAvatar)
  .then((userData) => {
    profileUserAvatar.src = userData.avatar;
    closePopup(profileAvatarForm)
    avatarInput.value = '';
  })
  .catch(error => { console.error(error) })
  .finally(() => {
    changeButtonText('Сохранение...', 'Сохранить', false, submitButtonAvatar)
  })
}

/* Открываем попап добавления карточки */
function openPopupCardsAdd () {
  toggleButtonStateFormCard();
  openPopup(popupCardsAdd);
}

function openPopupEditAvatar () {
  toggleButtonStateAvatarEdit();
  openPopup(profileAvatarForm);
}

/* Открытие и обработка openPopupEditProfile */
function openPopupEditProfile() {
  toggleButtonProfile();
  profileNameInput.value = profileUserName.textContent;
  profileStatusInput.value = profileUserStatus.textContent;
  openPopup(popupEditProfile);
}
function toggleButtonProfile() {
  submitButtonProfile.disabled;
  submitButtonProfile.classList.add(formValidationConfig.inactiveSaveButton);
}

export { toggleButtonProfile, openPopupEditProfile, editeProfile, editeProfileAvatar, openPopupCardsAdd, openPopupEditAvatar};

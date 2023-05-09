import { popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, popupCardsAdd, popup, avatarInput, submitButtonAvatar, profileAvatarForm, profileUserAvatar, formValidationConfig  } from '../components/constants.js';
import { toggleButtonStateFormCard } from '../components/validate.js';
import { openPopup, closePopup, changeButtonText  } from './utils.js';
import { updateUserInfo, updateAvatar, getUserInfo, userInfo, getuserID} from './api.js';

/* Открытие и обработка openPopupEditProfile */
function openPopupEditProfile() {
  profileNameInput.value = profileUserName.textContent;
  profileStatusInput.value = profileUserStatus.textContent;
  openPopup(popupEditProfile);
}

/* Закрытие и обработка openPopupEditProfile */
function editeProfile(event) {
  event.preventDefault();
  const newName = profileNameInput.value;
  const newAbout = profileStatusInput.value;
  changeButtonText('Сохранение...', 'Сохранить', true, submitButtonProfile);
  updateUserInfo(newName, newAbout)
  .then(userData => {
    profileUserAvatar.alt = newName;
    profileUserName.textContent = profileNameInput.value;
    profileUserStatus.textContent = profileStatusInput.value;
    closePopup(popupEditProfile);
    profileUserName.textContent = userData.name;
    profileUserStatus.textContent = userData.about;
  })
  .finally(() => {
    changeButtonText('Сохранение...', 'Сохранить', false, submitButtonCard)
  })
  .catch(error => { console.error(error) });
}

function editeProfileAvatar(event) {
  event.preventDefault();
  const newAvatar = avatarInput.value;
  changeButtonText('Сохранение...', 'Сохранить', true, submitButtonAvatar);
  updateAvatar(newAvatar, formValidationConfig)
  .then((newAvatar) => {
    profileUserAvatar.src = newAvatar;
    closePopup(profileAvatarForm)
  })
  .finally(() => {
    profileUserAvatar.src = newAvatar;
    changeButtonText('Сохранение...', 'Сохранить', false, submitButtonCard)
  })
  .catch(error => { console.error(error) })
}

/* Открываем попап добавления карточки */
function openPopupCardsAdd () {
  toggleButtonStateFormCard();
  openPopup(popupCardsAdd);
}

function openPopupEditAvatar () {
  avatarInput.value = ''
  toggleButtonStateFormCard();
  openPopup(profileAvatarForm);
}

export { openPopupEditProfile, editeProfile, editeProfileAvatar, openPopupCardsAdd, openPopupEditAvatar};

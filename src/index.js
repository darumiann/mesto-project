import './pages/index.css';
import { createCard, renderCard, addCard, submitCardsAddForm } from './components/cards.js';
import { enableValidation, toggleButtonStateFormCard, toggleButtonState, toggleButtonStateProfileEdit} from './components/validate.js';
import { formValidationConfig, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, profileEditButton, profileAddButton, popupCardsAdd, popup, popupsArray, formProfileEdit, formAddCard, profileUserAvatar, AvatarInput, submitButtonAvatar, profileAvatarForm, editProfileAvatarButton } from './components/constants.js';
import {  openPopupEditProfile, editeProfile, editeProfileAvatar, openPopupCardsAdd, openPopupEditAvatar } from './components/modal.js';
import { openPopup, closePopup, closeByEscape, changeButtonText } from './components/utils.js';
import { getResponseData, getInitialCards, getUserInfo, updateUserInfo, updateAvatar, uploadNewCard, deleteCard, uploadDislikes, uploadLikes, submitButtonCard,  userInfo, getuserID } from './components/api.js';

editProfileAvatarButton.addEventListener('click', () => openPopupEditAvatar());
editPofileAvatar.addEventListener('submit', editeProfileAvatar);
profileEditButton.addEventListener('click', () => openPopupEditProfile());
popupEditProfile.addEventListener('submit', editeProfile);
profileAddButton.addEventListener('click', () => openPopupCardsAdd());
popupCardsAdd.addEventListener('submit', submitCardsAddForm);

enableValidation(formValidationConfig)

/* Создаем массив из попапов и реализуем работу кнопки закрытия попапов*/
popupsArray.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
  popup.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup)
    }
  });
});

Promise.all([
  getUserInfo(),
  getInitialCards()
]).then(([userData, cardsData]) => {
  getuserID(userData._id);
  profileUserName.textContent = userData.name;
  profileUserStatus.textContent = userData.about;
  profileUserAvatar.src = userData.avatar;
  profileUserAvatar.alt = userData.name;
  cardsData.reverse().forEach((data) => {
    addCard(data);
  });
})
.catch(error => {
  console.error(error);
});

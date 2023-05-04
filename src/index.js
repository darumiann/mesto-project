import './pages/index.css';
import { createCard, renderCard, submitCardsAddForm, cardsLikeButton } from './components/cards.js';
import { enableValidation, toggleButtonStateFormCard, toggleButtonState, toggleButtonStateProfileEdit} from './components/validate.js';
import { initialCards, formValidationConfig, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, profileEditButton, profileAddButton, popupCardsAdd, popup, popupsArray, formProfileEdit, formAddCard} from './components/constants.js';
import { openPopupEditProfile, editeProfile, openPopupCardsAdd, } from './components/modal.js';
import { closePopup, closeByEscape } from './components/utils.js';

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


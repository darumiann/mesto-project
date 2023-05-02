import './pages/index.css';
import { createCards, renderInitialCards, submitCardsAddForm, cardsLikeButton } from './components/cards.js';
import { enableValidation, toggleButtonStateFormCard, toggleButtonState, toggleButtonStateProfileEdit} from './components/validate.js';
import { initialCards, formValidationConfig, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, profileEditButton, profileAddButton, popupCardsAdd, popups, popupsArray, formProfileEdit, formAddCard} from './components/utils.js';
import { openPopupEditProfile, editeProfile, openPopupCardsAdd, openPopup, closePopup } from './components/modal.js';

profileEditButton.addEventListener('click', () => openPopupEditProfile());
popupEditProfile.addEventListener('submit', editeProfile);
profileAddButton.addEventListener('click', () => openPopupCardsAdd());
popupCardsAdd.addEventListener('submit', submitCardsAddForm);

enableValidation(formValidationConfig)

/* Создаем массив из попапов и реализуем раоботы кнопки закрытия попапов*/
popupsArray.forEach((popups) => {
  popups.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close-button')) {
      closePopup(popups);
    }
  })
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(popups)
    }
  })
  popups.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popups)
    }
  });
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopup(popups)
  }
});

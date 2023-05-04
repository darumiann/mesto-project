import { initialCards, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupCardsAdd } from '../components/constants.js';
import { openPopup, closePopup } from '../components/utils.js';


/* Реализуем создание карточек */
function createCard(card) {
  const newCard = cardTemplate.cloneNode(true)
  const cardTitle = newCard.querySelector('.elements__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.elements__img');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  const imgPopupOpener = newCard.querySelector('.elements__img');
  imgPopupOpener.addEventListener('click', () => openImagePopup(card));

  /* Реализуем работу кнопки лайка */
  function toggleLike(event) {
    const toggleLikeButton = event.target;
    toggleLikeButton.classList.toggle('elements__like_active');
  };

  const toggleLikeButton = newCard.querySelector('.elements__like');
  toggleLikeButton.addEventListener('click', toggleLike);

  /* Реализуем работу кнопки удаления карточек */
  function deleteCard(event) {
    const button = event.target;
    const card = button.closest('.elements__element');
    card.remove();
  };

  const deleteCardButton = newCard.querySelector('.elements__delete');
  deleteCardButton.addEventListener('click', deleteCard);

  /* Открываем и обрабатываем форму для просмотра изобр. */
  function openImagePopup(card) {
    imageCaption.textContent = card.name;
    imagePhoto.setAttribute('src', card.link);
    imagePhoto.setAttribute('alt', card.name);
    openPopup(popupImage);
  };
  return newCard;
};

function renderCard(card) {
  const cardReady = createCard(card);
  cardContainer.prepend(cardReady);
};

/* Закрываем и обрабатывае попап форму добавления карточки */
function submitCardsAddForm(event) {
  event.preventDefault();
  const card = {
    name: cardsTitleInput.value,
    link: cardsLinkInput.value,
  };
  renderInitialCards(card);
  closePopup(popupCardsAdd);
  event.target.reset();
}
initialCards.forEach(renderCard);

export { createCard, renderCard, submitCardsAddForm };

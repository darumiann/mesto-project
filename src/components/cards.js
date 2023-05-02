import { initialCards, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupCardsAdd } from '../components/utils.js';
import { openPopup, closePopup } from '../components/modal.js';

/* Реализуем создание карточек */
function createCards(card) {
  const newCard = cardTemplate.cloneNode(true)
  const cardTitle = newCard.querySelector('.elements__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.elements__img');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  const imgPopupOpener = newCard.querySelector('.elements__img');
  imgPopupOpener.addEventListener('click', () => openImagePopup(card));

  /* Реализуем работу кнопки лайка */
  function cardsLike(event) {
    const cardsLikeButton = event.target;
    cardsLikeButton.classList.toggle('elements__like_active');
  };

  const cardsLikeButton = newCard.querySelector('.elements__like');
  cardsLikeButton.addEventListener('click', cardsLike);

  /* Реализуем работу кнопки удаления карточек */
  function cardsDelete(event) {
    const button = event.target;
    const card = button.closest('.elements__element');
    card.remove();
  };

  const cardsDeleteButton = newCard.querySelector('.elements__delete');
  cardsDeleteButton.addEventListener('click', cardsDelete);

  /* Открываем и обрабатываем форму для просмотра изобр. */
  function openImagePopup(card) {
    imageCaption.textContent = card.name;
    imagePhoto.setAttribute('src', card.link);
    imagePhoto.setAttribute('alt', card.name);openPopup(popupImage);
  };
  return newCard;
};

function renderInitialCards(card) {
  const cardReady = createCards(card);
  cardContainer.prepend(cardReady);
};

/* Закрываем и обрабатывае попап форму добавления карточки */
function submitCardsAddForm(event) {
  event.preventDefault();
  const nameValue = cardsTitleInput.value;
  const linkValue = cardsLinkInput.value;
  const card = {
    name: cardsTitleInput.value,
    link: cardsLinkInput.value,
  };
  renderInitialCards(card);
  closePopup(popupCardsAdd);
  event.target.reset()
}
initialCards.forEach(renderInitialCards);

export { createCards, renderInitialCards, submitCardsAddForm };

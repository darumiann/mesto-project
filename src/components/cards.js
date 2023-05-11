import { cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupCardsAdd, submitButtonCard } from '../components/constants.js';
import { openPopup, closePopup, changeButtonText } from '../components/utils.js';
import { uploadNewCard, deleteCard, uploadDislikes, uploadLikes, userInfo } from '../components/api.js';

/* Реализуем создание карточек */
function createCard(data) {
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__img');
  const cardTitle = cardElement.querySelector('.elements__title');
  const cardLikeButton = cardElement.querySelector('.elements__like');
  const cardlikes = cardElement.querySelector('.elements__like-quantity');
  const deleteButton = cardElement.querySelector('.elements__delete');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardlikes.textContent = data.likes.length || 0;

  if (data.owner._id === userInfo.id) {
    deleteButton.addEventListener('click', () => deleteCard(data, cardElement)
    .then(() => {
      cardElement.closest('.elements__element').remove()
    })
    .catch(error => { console.error(error) }))
  };

  if (data.owner._id === userInfo.id) {
    deleteButton.style.display = 'block';
  } else {
    deleteButton.style.display = 'none';
  }

  const toggleLike = (event) => {
    const cardElement = event.target.closest('.elements__element');
    const cardlikes = cardElement.querySelector('.elements__like-quantity');
    if (!cardLikeButton.classList.contains('elements__like_active')) {
      uploadLikes(data)
      .then(card => {
        console.log(card)
        cardlikes.textContent = card.likes.length;
        cardLikeButton.classList.add('elements__like_active')
      })
      .catch(error => { console.error(error) })
    } else {
      uploadDislikes(data)
      .then(card => {
        cardlikes.textContent = card.likes.length;
        cardLikeButton.classList.remove('elements__like_active')
      })
      .catch(error => { console.error(error) })
    }
  }

  cardLikeButton.addEventListener('click', toggleLike);
  if (data.likes.some(item => item._id === userInfo.id)) {
    cardLikeButton.classList.add('elements__like_active')
  };
  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    imagePhoto.src = data.link;
    imagePhoto.alt = data.name;
    imageCaption.textContent = data.name;
  });
  return cardElement;
}

function renderCard(data) {
  cardContainer.prepend(data);
}

function addCard(data) {
  const newCard = createCard(data);
  renderCard(newCard);
}

function submitCardsAddForm(event) {
  event.preventDefault();
  const name = cardsTitleInput.value;
  const link = cardsLinkInput.value;
  changeButtonText('Сохранение...', 'Сохранить', true, submitButtonCard)
  uploadNewCard(name, link)
  .then(cardsData => {
    addCard(cardsData)
    closePopup(popupCardsAdd)
    cardsTitleInput.value = '';
    cardsLinkInput.value = '';
  })
  .catch(error => { console.error(error) })
  .finally(() => {
    changeButtonText('Сохранение...', 'Сохранить', false, submitButtonCard)
  })
}

export { createCard, renderCard, addCard, submitCardsAddForm };

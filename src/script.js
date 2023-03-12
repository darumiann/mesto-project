/* Функция открытия PopUp */
function openPopup(popups) {
  popups.classList.add('popup_opened');
};

/* Функция закрытия PopUp */
function closePopup(popups) {
  popups.classList.remove('popup_opened');
};

/* Создаем массив из попапов и реализуем раоботы кнопки закрытия попапов*/
popupsArray.forEach((popups) => {
  popups.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close-button')) {
      closePopup(popups);
    }
  });
});

/* Открытие и обработка openPopupEditProfile */
function openPopupEditProfile() {
  profileNameInput.value = profileUserName.textContent;
  profileStatusInput.value = profileUserStatus.textContent;
  openPopup(popupEditProfile);
}

profileEditButton.addEventListener('click', () => openPopupEditProfile());

/* Закрытие и обработка openPopupEditProfile */
function editeProfile(event) {
  event.preventDefault();
  profileUserName.textContent = profileNameInput.value;
  profileUserStatus.textContent = profileStatusInput.value;
  closePopup(popupEditProfile);
}

popupEditProfile.addEventListener('submit', editeProfile);

/* Открываем попап добавления карточки */
function openPopupCardsAdd () {
  cardsTitleInput.value = '';
  cardsLinkInput.value = '';

  openPopup(popupCardsAdd);
}

profileAddButton.addEventListener('click', () => openPopupCardsAdd());

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
  function cardsLike (event) {
    const cardsLikeButton = event.target;
    cardsLikeButton.classList.toggle('elements__like_active');
  };

  cardsLikeButton = newCard.querySelector('.elements__like');
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
  function openImagePopup (card) {
    imageCaption.textContent = card.name;
    imagePhoto.setAttribute('src', card.link);
    imagePhoto.setAttribute('alt', card.name);
    openPopup (popupImage);
  };

  return newCard;
};

function renderInitialCards (card) {
  const cardReady = createCards(card);
  cardContainer.prepend(cardReady);
};

/* Закрываем и обрабатывае попап форму добавления карточки */
function submitCardsAddForm (event) {
  event.preventDefault();
  const nameValue = cardsTitleInput.value;
  const linkValue = cardsLinkInput.value;
  const card = {
    name: cardsTitleInput.value,
    link: cardsLinkInput.value,
  };
  renderInitialCards (card);
  closePopup(popupCardsAdd);
}

popupCardsAdd.addEventListener('submit', submitCardsAddForm);

initialCards.forEach(renderInitialCards);

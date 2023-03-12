const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector('.popup');
const popupArray = Array.from(document.querySelectorAll('.popup'));

const profilePopup = document.querySelector('#profile-popup');
const editButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__user-name');
const userStatus = document.querySelector('.profile__user-status');
const nameInput = document.querySelector('input[name="username"]');
const jobInput = document.querySelector('input[name="userstatus"]');

const cardsPopup = document.querySelector('#cards-popup');
const addButton = document.querySelector('.profile__add-button');
const CardFormTitle = document.querySelector('input[name="cardTitle"]');
const CardFormLink = document.querySelector('input[name="cardLink"]');
const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#elementTemplate').content

const ImgPopup = document.querySelector('#image-popup');
const ImgPopupCaption = document.querySelector('.popup__image-caption');
const ImgPopupPhoto = document.querySelector('.popup__image');

/* Функция открытия PopUp */
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

/* Функция закрытия PopUp */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

/* Создаем массив из попапов и реализуем раоботы кнопки закрытия попапов*/
popupArray.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

/* Открытие и обработка popupProfileEditor */
function popupProfileEditor() {
  nameInput.value = userName.textContent;
  jobInput.value = userStatus.textContent;

  openPopup(profilePopup);
}

editButton.addEventListener('click', () => popupProfileEditor());

/* Закрытие и обработка popupProfileEditor */
function editeProfile(event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  userStatus.textContent = jobInput.value;
  closePopup(profilePopup);
}

profilePopup.addEventListener('submit', editeProfile);

/* Открываем попап добавления карточки */
function cardsPublisher () {

  openPopup(cardsPopup);
}

addButton.addEventListener('click', () => cardsPublisher());

/* Реализуем создание карточек */
function createCard(card) {
  const newCard = cardTemplate.cloneNode(true)
  const cardTitle = newCard.querySelector('.elements__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.elements__img');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  const imgPopupOpener = newCard.querySelector('.elements__img');
  imgPopupOpener.addEventListener('click', () => openLargeImg(card));

  /* Реализуем работу кнопки лайка */
  function cardLike (event) {
    const likeButton = event.target;
    likeButton.classList.toggle('elements__like_active');
  };

  likeButton = newCard.querySelector('.elements__like');
  likeButton.addEventListener('click', cardLike);

  /* Реализуем работу кнопки удаления карточек */
  function deleteCard(event) {
    const button = event.target;
    const card = button.closest('.elements__element');
    card.remove();
  };

  const buttonDelete = newCard.querySelector('.elements__delete');
  buttonDelete.addEventListener('click', deleteCard);

  /* Открываем и обрабатываем форму для просмотра изобр. */
  function openLargeImg (card) {
    ImgPopupCaption.textContent = card.name;
    ImgPopupPhoto.setAttribute('src', card.link);
    ImgPopupPhoto.setAttribute('alt', card.name);
    openPopup (ImgPopup);
  };

  return newCard;
};

function renderCard (card) {
  const cardReady = createCard(card);
  cardContainer.prepend(cardReady);
};

/* Закрываем и обрабатывае попап форму добавления карточки */
function popupCardSubmit (event) {
  event.preventDefault();

  const nameValue = CardFormTitle.value;
  const linkValue = CardFormLink.value;
  const card = {
    name: CardFormTitle.value,
    link: CardFormLink.value,
  };
  renderCard (card);
  closePopup(cardsPopup);
}

cardsPopup.addEventListener('submit', popupCardSubmit);

initialCards.forEach(renderCard);

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

const formValidationConfig = {
  formElement: '.form',
  formInput: '.form__input',
  saveButton: '.form__save-button',
  errorClass: '.form__input-error',
  inactiveSaveButton: 'form__save-button_inactive',
  inputErrorType: 'form__input_type_erorr',
  inputErrorClass: 'form__input-error_active',
  validationMessages: {
    emptyString: 'Вы пропустили это поле.',
    semiEmptyString: 'Минимальное количество символов: 2. Длина текста сейчас: 1 символ.',
    name: 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы',
    activity: 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы',
    place: 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы',
    link: 'Введите адрес сайта.',
  },
  validationRules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 40,
      pattern: /^[a-zA-Zа-яА-ЯёЁ_ -]+$/,
    },
    activity: {
      required: true,
      minlength: 2,
      maxlength: 200,
      pattern: /^[a-zA-Zа-яА-ЯёЁ_ -]+$/,
    },
    place: {
      required: true,
      minlength: 2,
      maxlength: 30,
      pattern: /^[a-zA-Zа-яА-ЯёЁ_ -]+$/,
    },
    link: {
      required: true,
      url: true
    },
  },
};

const cardsTitleInput = document.querySelector('input[name="cardTitle"]');
const cardsLinkInput = document.querySelector('input[name="cardLink"]');
const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#elementTemplate').content;
const popupImage = document.querySelector('#image-popup');
const imageCaption = document.querySelector('.popup__image-caption');
const imagePhoto = document.querySelector('.popup__image');
const popupEditProfile = document.querySelector('#profile-popup');
const profileNameInput = document.querySelector('input[name="username"]');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserStatus = document.querySelector('.profile__user-status');
const profileStatusInput = document.querySelector('input[name="userstatus"]');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCardsAdd = document.querySelector('#cards-popup');
const popup = document.querySelector('.popup');
const popupsArray = Array.from(document.querySelectorAll('.popup'));
const formProfileEdit = document.querySelector('#user-editor');
const formAddCard = document.querySelector('#card-poster');

export { initialCards, formValidationConfig, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, profileEditButton, profileAddButton, popupCardsAdd, popup, popupsArray, formProfileEdit, formAddCard };

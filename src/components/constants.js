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
submitButtonAvatar
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
const profileUserAvatar = document.querySelector('.profile__avatar');
const profileStatusInput = document.querySelector('input[name="userstatus"]');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCardsAdd = document.querySelector('#cards-popup');
const popup = document.querySelector('.popup');
const popupsArray = Array.from(document.querySelectorAll('.popup'));
const formProfileEdit = document.querySelector('#user-editor');
const formAddCard = document.querySelector('#card-poster');
const submitButtonCard = document.querySelector('#submitButtonCard');
const submitButtonAvatar = document.querySelector('#submitButtonAvatar');
const AvatarInput = document.querySelector('#avatar-url');
const editPofileAvatar = document.querySelector('#editPofileAvatar');
const profileAvatarForm = document.querySelector('#avatar-popup')
const editProfileAvatarButton = document.querySelector('.profile__avatar-edit-button')

export { formValidationConfig, cardsTitleInput, cardsLinkInput, cardContainer, cardTemplate, popupImage, imageCaption, imagePhoto, popupEditProfile, profileNameInput, profileUserName, profileUserStatus, profileStatusInput, profileEditButton, profileAddButton, popupCardsAdd, popup, popupsArray, formProfileEdit, formAddCard, profileUserAvatar, submitButtonCard, AvatarInput, submitButtonAvatar, editPofileAvatar, profileAvatarForm, editProfileAvatarButton } ;

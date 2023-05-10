import { formValidationConfig, formProfileEdit, formAddCard, profileAvatarForm } from '../components/constants.js';

const toggleButtonState = (inputList, saveButton) => {
  const isValid = inputList.every((input) => input.validity.valid);
  saveButton.disabled = !isValid;
  saveButton.classList.toggle(formValidationConfig.inactiveSaveButton, !isValid);
};

const setEventListeners = (formElement, formValidationConfig) => {
  const saveButton = formElement.querySelector(formValidationConfig.saveButton);
  const inputList = Array.from(formElement.querySelectorAll(formValidationConfig.formInput));

  const showInputError = (inputElement) => {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add(formValidationConfig.inputErrorType);
    errorElement.classList.add(formValidationConfig.inputErrorClass);
  };

  const hideInputError = (inputElement) => {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove(formValidationConfig.inputErrorType);
    errorElement.classList.remove(formValidationConfig.inputErrorClass);
  };

  const checkInputValidity = (inputElement) => {
    const errorElement = inputElement.nextElementSibling;
    if (inputElement.value === '') {
      showInputError(inputElement);
      errorElement.textContent = inputElement.dataset.errorEmptyString;
    } else if (inputElement.type === 'url' && inputElement.validity.typeMismatch) {
      showInputError(inputElement);
      errorElement.textContent = inputElement.dataset.errorLink;
    } else if (inputElement.value.trim().length === 1) {
      showInputError(inputElement);
      errorElement.textContent = inputElement.dataset.errorSemiEmptyString;
    } else if (inputElement.validity.patternMismatch) {
      showInputError(inputElement);
      errorElement.textContent = inputElement.dataset.errorPattern;
    } else {
      hideInputError(inputElement);
    }
    toggleButtonState(inputList, saveButton);
  };

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
    });
  });

  toggleButtonState(inputList, saveButton);
};

const enableValidation = (formValidationConfig) => {
  setEventListeners(formProfileEdit, formValidationConfig);
  setEventListeners(formAddCard, formValidationConfig);
  setEventListeners(profileAvatarForm, formValidationConfig);
}

const toggleButtonStateFormCard = () => {
  toggleButtonState(Array.from(formAddCard.querySelectorAll(formValidationConfig.formInput)), formAddCard.querySelector(formValidationConfig.saveButton));
};

const toggleButtonStateProfileEdit = () => {
  toggleButtonState(Array.from(formProfileEdit.querySelectorAll(formValidationConfig.formInput)), formProfileEdit.querySelector(formValidationConfig.saveButton));
};

const toggleButtonStateProfileAvatarEdit = () => {
  toggleButtonState(Array.from(profileAvatarForm.querySelectorAll(formValidationConfig.formInput)), formProfileEdit.querySelector(formValidationConfig.saveButton));
};

export { enableValidation, toggleButtonStateProfileAvatarEdit, toggleButtonStateFormCard, toggleButtonState, toggleButtonStateProfileEdit };

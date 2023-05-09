/* Функция открытия PopUp */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

/* Функция закрытия PopUp */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const buttonLoadingState = (loadingText, defaultText, isLoading, submitButton) => {
  if (isLoading) {
    submitButton.textContent = loadingText;
  } else {
    submitButton.textContent = defaultText;
  }
}

export { openPopup, closePopup, closeByEscape, buttonLoadingState };

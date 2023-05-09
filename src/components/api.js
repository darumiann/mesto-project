const passwordToken = '6239fa52-ec5e-455e-8a3f-385f9bd2160a';
const userInfo = {
  id: null
}

const config = {
  BaseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: passwordToken,
    'Content-Type': 'application/json'
  }
}

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

function getInitialCards() {
  return fetch(`${config.BaseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => getResponseData(res))
}

function getUserInfo() {
  return fetch(`${config.BaseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => getResponseData(res))
}

function updateUserInfo(name, about) {
  return fetch(`${config.BaseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
      avatar: avatar,
    })
  })
  .then(res => getResponseData(res))
}

function updateAvatar(newAvatar) {
  return fetch(`${config.BaseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: newAvatar,
    })
  })
  .then(res => getResponseData(res))

}

function uploadNewCard(name, link) {
  return fetch(`${config.BaseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
  .then(res => getResponseData(res))
}

function deleteCard(data) {
  return fetch(`${config.BaseUrl}/cards/${data._id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => getResponseData(res))
}

function uploadDislikes(data) {
  return fetch(`${config.BaseUrl}/cards/likes/${data._id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => getResponseData(res))
}

function uploadLikes(data) {
  return fetch(`${config.BaseUrl}/cards/likes/${data._id}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(res => getResponseData(res))
}

function getuserID(id) {
  userInfo.id = id;
}

export { getResponseData, getInitialCards, getUserInfo, updateUserInfo, updateAvatar, uploadNewCard, deleteCard, uploadDislikes, uploadLikes, userInfo, getuserID };

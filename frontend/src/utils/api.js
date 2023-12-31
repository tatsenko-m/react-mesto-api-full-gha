import { createHeaders } from "./headers";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setHeaders(headers) {
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    const method = isLiked ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then((res) => {
      return this._handleResponse(res);
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.tatsenko-m.nomoreparties.sbs',
  headers: createHeaders()
});

export default api;

[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml) ![GitHub repo size](https://img.shields.io/github/repo-size/tatsenko-m/react-mesto-api-full-gha) ![GitHub top language](https://img.shields.io/github/languages/top/tatsenko-m/react-mesto-api-full-gha)

# <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tatsenko-m/mesto/main/docs/project-logo-dark.png"><img src="https://raw.githubusercontent.com/tatsenko-m/mesto/main/docs/project-logo-light.png" width="200" alt="Лого проекта"></picture>
**Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями.** 

<details><summary>История и версии приложения</summary>

  1. Первоначальный вариант приложения без аутентификации, на Vanilla JS https://github.com/tatsenko-m/mesto
  2. Приложение, переписанное на React https://github.com/tatsenko-m/mesto-react
  3. React-приложение с аутентификацией на стороннем API https://github.com/tatsenko-m/react-mesto-auth 
  4. Собственный бэкенд для аутентификации https://github.com/tatsenko-m/express-mesto-gha 
  5. Финальная версия фронтенд + бэкенд: https://github.com/tatsenko-m/react-mesto-api-full-gha

</details>

🔗 [Открыть Mesto](https://tatsenko-m.nomoreparties.sbs)

<picture>
  <img src="https://raw.githubusercontent.com/tatsenko-m/mesto/main/docs/mesto-screen-rec.gif" alt="Анимация с демо интерфейса">
</picture>

## Функциональность
- Добавление/удаление карточки с фотографией и подписью
- Просмотр карточек, добавленных другими пользователями
- Постановка/снятие лайка у каждой карточки
- Счетчик количества лайков
- Просмотр полноразмерного фото карточки в отдельном модальном окне
- Редактирование имени профиля и информации о себе
- Обновление аватара
- Авторизация пользователя для получения доступа к сервису
- Регистрация нового пользователя

## Технологии
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
  <a href=""><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Иконка 'Express'"></a>
  <a href=""><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Иконка 'Node JS'"></a>
  <a href=""><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Иконка 'MongoDB'"></a>
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Иконка 'NGINX'">
</span>

## Ссылки на проект

IP 158.160.32.251

Frontend https://tatsenko-m.nomoreparties.sbs

Backend https://api.tatsenko-m.nomoreparties.sbs

## Инструкция по установке

Клонируем репозиторий:
```bash
git clone https://github.com/tatsenko-m/react-mesto-api-full-gha.git
```
Устанавливаем зависимости - по отдельности в директориях `frontend` и `backend`:
```bash
npm install
```
Запускаем приложение в режиме разработчика в директории `backend`:
```bash
npm run dev
```
Запускаем приложение в режиме разработчика в директории `frontend`:
```bash
npm run start
```

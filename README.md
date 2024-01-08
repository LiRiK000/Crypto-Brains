# Crypto Brains

Crypto Brains - это pet-project, разработанный с использованием различных технологий, включая React, React Bootstrap, React Router DOM, CSS Modules, Firebase (для авторизации) и в будущем Material UI. Проект предоставляет функциональность для регистрации и аутентификации пользователей. Этот проект был создан в качестве первого проекта из серии, и в будущем мы планируем разработать серию из четырех проектов, каждый из которых будет иметь свою уникальную цель. Один из ключевых аспектов этого проекта - демонстрация наших навыков в работе с технологическим стеком, указанным ниже, а также использование таких инструментов как Git и GitHub.

## Описание проекта

Crypto Brains был разработан совместно с Даниилом в рамках изучения определенного стека технологий, который будет описан далее.

## Технологии

Проект Crypto Brains использует следующие технологии:

- React: JavaScript-библиотека для создания пользовательских интерфейсов.
- React Bootstrap: библиотека компонентов для стилизации пользовательского интерфейса.
- React Router DOM: для навигации по разным страницам вашего приложения.
- CSS Modules: для организации стилей в модули.
- Firebase: платформа для разработки приложений с использованием облачных сервисов, включая аутентификацию.
- Material UI (планируется): библиотека компонентов для стилизации и создания красивого дизайна.

## Установка и запуск

Чтобы установить и запустить проект Crypto Brains, выполните следующие шаги:

1. Сначала склонируйте репозиторий на свой локальный компьютер:
   git clone https://github.com/LiRiKOOO/CB.git

2. Перейдите в директорию проекта:
    cd client
    
3. Установите зависимости с помощью npm или yarn:
    npm install

    или

    yarn install

4. Запустите проект:
    npm start
    
    или
    
    yarn start

## Регистрация и авторизация

Для того, чтобы в проекте корректно работали функциональности регистрации и авторизации с использованием Firebase, вам нужно выполнить следующие шаги:

Создайте аккаунт на веб-сайте Firebase (https://firebase.google.com).

После создания аккаунта Firebase, вам нужно создать файл .env в корневой директории проекта.

В файле .env добавьте следующие переменные среды, которые предоставит Firebase:

REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
Эти переменные содержат конфиденциальную информацию, необходимую проекту для взаимодействия с Firebase. Они будут использоваться коде для настройки подключения к Firebase.

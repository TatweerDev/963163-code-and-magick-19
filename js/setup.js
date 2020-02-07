'use strict';

// Объявление массивов с данными игроков
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


// Показываем меню настроек персонажа
var UserDialog = document.querySelector('.setup');
var playerSetup = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

UserDialog.classList.remove('hidden');
playerSetup.classList.remove('hidden');

// Задаем функции, получающие случайные значения имени и индекса
var getRandomName = function () {
  return NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(NAMES)];
};

var getRandomIndex = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// Создаем DOM элемент для сгенерированных персонажей


var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName();
  wizardElement.querySelector('.wizard-coat').style.fill = COAT_COLORS[getRandomIndex(COAT_COLORS)];
  wizardElement.querySelector('.wizard-eyes').style.fill = EYE_COLOR[getRandomIndex(EYE_COLOR)];

  return wizardElement;
};

// Отрисуем сгенерированные DOM-элементы в блок '.setup-similar-list' (переменная similarListElement)
var numberOfPlayers = 4;

var fragment = document.createDocumentFragment();
for (var i = 0; i < numberOfPlayers; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

'use strict';

// Объявление массивов с данными игроков
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var numberOfPlayers = 4;

// Показываем меню настроек персонажа
var userDialog = document.querySelector('.setup');
var playerSetup = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

userDialog.classList.remove('hidden');
playerSetup.classList.remove('hidden');

// Задаем функции, получающие случайные значения имени и индекса
var getRandomName = function () {
  return NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(NAMES)];
};

var getRandomIndex = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// Создаем DOM элемент для сгенерированных персонажей
var createPlayers = function () {
  var players = []
  for (var i = 0; i < numberOfPlayers; i++) {
    var player = {
      name: getRandomName(),
      coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
      eyesColor: EYE_COLOR[getRandomIndex(EYE_COLOR)]
  }
  players.push(player)
  };
  return players;
};

var renderWizard = function () {
  var players = createPlayers();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < players.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = players[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = players[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = players[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
}; 
  
renderWizard()

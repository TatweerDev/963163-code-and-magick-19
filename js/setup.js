'use strict';

// Объявление массивов с данными игроков
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var MIN_NAME_LENGTH = 2;
var numberOfPlayers = 4;

// Показываем меню настроек персонажа
var userDialog = document.querySelector('.setup');
var playerMenuSetup = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


playerMenuSetup.classList.remove('hidden');

// Добавим события открытия и закрытия окна настройки персонажа, а также отправки сохраненных данных
var playerIcon = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var escapeButton = 27;
var enterButton = 13;
var openPopup = function () {
  userDialog.classList.remove('hidden');
};
var closePopup = function () {
  userDialog.classList.add('hidden');
};

playerIcon.addEventListener('click', function () {
  openPopup();
});

playerIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterButton) {
    openPopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === escapeButton) {
    closePopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterButton) {
    closePopup();
  }
});

// Зададим сообщения при ошибке заполнения формы
var userNameInput = userDialog.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
        MIN_NAME_LENGTH +
        '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});

// Добавим функции, изменяющие цвет глаз, одежды и фаербола персонажа при клике
var playerSetup = document.querySelector('.setup-player');
var wizardCoat = playerSetup.querySelector('.wizard-coat');
var changeCoatColor = function () {
  var color = COAT_COLORS[getRandomIndex(COAT_COLORS)];
  playerSetup.querySelector('.wizard-coat').style.fill = color;
  playerSetup.querySelector('input[name=coat-color]').value = color;
};

wizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

var wizardEyes = playerSetup.querySelector('.wizard-eyes');

var changeEyesColor = function () {
  var color = EYE_COLOR[getRandomIndex(EYE_COLOR)];
  playerSetup.querySelector('.wizard-eyes').style.fill = color;
  playerSetup.querySelector('input[name=eyes-color]').value = color;
};

wizardEyes.addEventListener('click', function () {
  changeEyesColor();
});

var wizardFireball = playerSetup.querySelector('.setup-fireball');

var changeFireballColor = function () {
  var color = FIREBALL_COLORS[getRandomIndex(FIREBALL_COLORS)];
  playerSetup.querySelector('.setup-fireball').style.backgroundColor = color;
  playerSetup.querySelector('input[name=fireball-color]').value = color;
};

wizardFireball.addEventListener('click', function () {
  changeFireballColor();
});

// Задаем функции, получающие случайные значения имени и индекса
var getRandomName = function () {
  return NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(NAMES)];
};

var getRandomIndex = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// Создаем DOM элемент для сгенерированных персонажей
var createPlayers = function () {
  var players = [];
  for (var i = 0; i < numberOfPlayers; i++) {
    var player = {
      name: getRandomName(),
      coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
      eyesColor: EYE_COLOR[getRandomIndex(EYE_COLOR)]
    };
    players.push(player);
  }
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
renderWizard();

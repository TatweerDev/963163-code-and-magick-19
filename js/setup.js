'use strict';

(function () {
  // Объявление массивов с данными игроков
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = document.querySelector('.setup');

  // Показываем меню настроек персонажа
  var playerMenuSetup = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');


  playerMenuSetup.classList.remove('hidden');

  // Добавим функции, изменяющие цвет глаз, одежды и фаербола персонажа при клике
  var playerSetup = document.querySelector('.setup-player');
  var wizardCoat = playerSetup.querySelector('.wizard-coat');
  var changeCoatColor = function () {
    var color = window.util.getRandomValueFromArray(COAT_COLORS);
    playerSetup.querySelector('.wizard-coat').style.fill = color;
    playerSetup.querySelector('input[name=coat-color]').value = color;
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatColor();
  });

  var wizardEyes = playerSetup.querySelector('.wizard-eyes');

  var changeEyesColor = function () {
    var color = window.util.getRandomValueFromArray(EYE_COLOR);
    playerSetup.querySelector('.wizard-eyes').style.fill = color;
    playerSetup.querySelector('input[name=eyes-color]').value = color;
  };

  wizardEyes.addEventListener('click', function () {
    changeEyesColor();
  });

  var wizardFireball = playerSetup.querySelector('.setup-fireball');

  var changeFireballColor = function () {
    var color = window.util.getRandomValueFromArray(FIREBALL_COLORS);
    playerSetup.querySelector('.setup-fireball').style.backgroundColor = color;
    playerSetup.querySelector('input[name=fireball-color]').value = color;
  };

  wizardFireball.addEventListener('click', function () {
    changeFireballColor();
  });

  // Создаем DOM элемент для сгенерированных персонажей

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    var wizardsCount = 4;

    for (var i = 0; i < wizardsCount; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(window.backend.GET_URL, successHandler, window.util.errorHandler);
})();

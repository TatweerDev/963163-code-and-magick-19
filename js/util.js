'use strict';

(function () {
  var KEY_CODE = {
    ESCAPE: 27,
    ENTER: 13
  };

  var getRandomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  var getRandomValueFromArray = function (array) {
    return array[getRandomIndex(array)];
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === KEY_CODE.ESCAPE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === KEY_CODE.ENTER) {
      action();
    }
  };

  // Функция создающая в DOM сообщкеие об ошибке
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomValueFromArray: getRandomValueFromArray,
    getRandomIndex: getRandomIndex,
    errorHandler: errorHandler
  };
})();

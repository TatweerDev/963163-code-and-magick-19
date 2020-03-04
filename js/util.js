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
      return array[getRandomIndex(array)]
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
    
    window.util = {
      isEscEvent: isEscEvent,
      isEnterEvent: isEnterEvent,
      getRandomValueFromArray: getRandomValueFromArray,
      getRandomIndex: getRandomIndex
    }
  })();
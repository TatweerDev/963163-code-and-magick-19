'use strict';

// Функция получения случайного занчения имени
(function () {
	var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
	var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];	

	var getRandomName = function () {
		return getRandomValueFromArray(NAMES) + ' ' + getRandomValueFromArray(SURNAMES);
	};

	window.randomize = {
		getRandomName: getRandomName,		
	}
})();
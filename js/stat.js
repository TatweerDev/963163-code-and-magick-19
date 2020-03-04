'use strict';

// Функция отображающая окно результатов, после попадания фаерболом в забор

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 110;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 50;
  var COLUMN_WIDTH = 40;
  var COLUMN_X = 150;
  var COLUMN_Y = 240;
  var COLUMN_GAP = FONT_GAP + COLUMN_WIDTH;
  var NAMES_Y = 260;
  var NAMES_COLOR = 'rgba(0, 0, 0, 1)';
  var columnMaxHeigth = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var getRandomColor = function () {
    return 'rgba(2, 14, 134,' + Math.random() + ')';
  };

  window.renderStatistics = (function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    var maxTime = getMaxElement(times);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = NAMES_COLOR;
    ctx.fillText('Ура вы победили!', 130, 40);
    ctx.fillText('Список результатов:', 130, 60);

    for (var i = 0; i < names.length; i++) {

      if (names[i] === 'Вы') {
        var columnColor = 'rgba(255, 0, 0, 1)';
      } else {
        columnColor = getRandomColor();
      }

      ctx.fillStyle = NAMES_COLOR;
      ctx.fillText(names [i], COLUMN_X + COLUMN_GAP * i, NAMES_Y);
      ctx.fillStyle = columnColor;
      ctx.fillRect(COLUMN_X + COLUMN_GAP * i, COLUMN_Y, COLUMN_WIDTH, ((times[i] * columnMaxHeigth) / maxTime) * -1);
    }
  });
})();

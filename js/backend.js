'use strict';

(function () {
  var POST_URL = 'https://js.dump.academy/code-and-magick';
  var GET_URL = 'https://js.dump.academy/code-and-magick/data';
  var serverRequest = function (method, url, onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Не удалось загрузить профили игроков');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open(method, url);
    xhr.send(data);
  };

  var save = function (url, onLoad, onError, data) {
    serverRequest('POST', url, onLoad, onError, data);
  };
  var load = function (url, onLoad, onError) {
    serverRequest('GET', url, onLoad, onError);
  };

  window.backend = {
    save: save,
    load: load,
    POST_URL: POST_URL,
    GET_URL: GET_URL
  };
})();

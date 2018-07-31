window.addEventListener('load', function onLoad() {
  'use strict';
  var vk;
  var p;

  function ajax(reqType, reqURL, element) {
    var body = null; // POST- сюда пишутся параметры запроса
    var xobj = new XMLHttpRequest();
    xobj.open(reqType, reqURL, true);
    xobj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // По умолчанию для GET и POST
    xobj.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // GET: оповещает сервер, что запрос выполнен из AJAX
    // xobj.setRequestHeader('Content-Type', 'multipart/form-datad'); // POST: В этой кодировке поля пересылаются одно за другим, через строку-разделитель. Лучшая для отправки файлов
    // xobj.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // POST: Для работы с JSON
    xobj.overrideMimeType('application/json');
    xobj.onreadystatechange = function() {
      if (this.readyState !== this.DONE) {
        return;
      }
      if (this.status !== 200) {
        alert('Ошибка: ' + this.statusText + ' (' + this.status + ')');
        return;
      }
      if (this.responseText.length === 0) {
        alert('Заголовок: ' + this.getAllResponseHeaders());
        return;
      }
      p = document.createElement('p');
      p.innerHTML = 'Status = ' + this.readyState + '; Текст: ' + this.responseText;// .length;
      element.appendChild(p);
    };
    xobj.send(body);
  }
  vk = document.querySelector('#vk');
  ajax('GET', 'http://api.hh.ru/cors', vk);
  // ajax('GET', 'http://box.local/admin/dashboard', vk);
});


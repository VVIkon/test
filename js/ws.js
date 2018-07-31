window.addEventListener('load', function onLoad() {
  var ws;
  var container;
  var p;


  function output(msg) {
    p = document.createElement('p');
    p.innerHTML = msg;
    container = document.querySelector('.container');
    container.appendChild(p);
  }

  ws = new WebSocket('ws://echo.websocket.org/');
  ws.onopen = function(evt) {
    output('соединено');
    ws.send('Привет!');
  };
  ws.onclose = function(evt) {
    output('соединение закрыто');
  };
  ws.onmessage = function(evt) {
    output('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
    ws.close();
  };
  ws.onerror = function(evt) {
    output('<span style="color: red;">ERROR: ' + evt.data + '</span>');
    ws.close();
  };


});

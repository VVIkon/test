/*global getWinner*/
var gameState = {
  input: '',
  id: [],
  sign: []
};

var state = localStorage.getItem('game');
if (state) {
  gameState = JSON.parse(state);
}


window.addEventListener('load', function onLoad() {
  'use strict';

  var cnt;
  var generateField;
  var errorMessage;
  var winnerMessage;
  var mainGame;
  var field;
  var startNewGame;

  cnt = document.querySelector('.cnt');
  generateField = document.querySelector('.generateField');
  errorMessage = document.querySelector('.error-message');
  winnerMessage = document.querySelector('.winner-message');
  mainGame = document.querySelector('.mainGame');
  field = document.querySelector('.field');
  startNewGame = document.querySelector('.startNewGame');

  function generate() {
    var i;
    var j;
    var row;
    var cell;
    var multiple;

    multiple = gameState.input;
    for (i = 0; i < multiple; i++) {
      row = document.createElement('div');
      row.classList.add('row');    // добавление class = row
      field.appendChild(row);
      for (j = 0; j < multiple; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell');  // добавление class = cell
        row.appendChild(cell);
      }
    }
    field.style.width = (multiple * 200 + 10) + 'px'; //изменение размеров поля
  }

  function ifGetWinner() {
    if (getWinner() === 'x') {
      winnerMessage.innerHTML = 'Крестик победил';
      startNewGame.style.display = 'inline-block';
    } else if (getWinner() === 'o') {
      winnerMessage.innerHTML = 'Нолик победил';
      startNewGame.style.display = 'inline-block';
    }
  }

  function reload() {
    var i;
    var id;
    var el;
    if (gameState.input) {
      mainGame.style.display = 'inline-block';
      startNewGame.style.display = 'none';

      generate();

      if (gameState.sign[0]) {
        for (i = 0; i < gameState.id.length; i++) {
          id = gameState.id[i];
          el = document.querySelectorAll('.cell')[id];
          el.classList.add(gameState.sign[i]);
        }
      }

      ifGetWinner();
    }
  }

  reload();

  function operGenerate() {
    errorMessage.innerHTML = '';
    while (field.firstChild) {
      field.removeChild(field.firstChild);
    }
    if(!cnt.value) {
      errorMessage.innerHTML = 'Ведите кратность';
      mainGame.style.display = 'none';
      return;
    }
    if ( isNaN(cnt.value) || cnt.value < 3 || cnt.value > 15 || cnt.value % 1 !== 0) {
      errorMessage.innerHTML = 'Введена не корректная кратность';
      mainGame.style.display = 'none';
      return;
    }
    gameState.input = cnt.value;
    localStorage.setItem('game', JSON.stringify(gameState));
    generate();
    mainGame.style.display = 'inline-block';
    generateField.display = 'none';
  }

  function start() {
    var cells;
    var i;
    cells = document.querySelectorAll('.cell');
    for (i = 0; i < cells.length; i++) {
      cells[i].classList.remove('o');
      cells[i].classList.remove('x');
    }
    winnerMessage.innerHTML = '';
    gameState = {
      input: '',
      id: [],
      sign: []
    };
    localStorage.removeItem('game');
  }

  function clickAction(e) {
    var x;
    var o;
    var id;
    var current;
    var cells;

    x = document.querySelectorAll('.x');
    o = document.querySelectorAll('.o');
    cells = document.querySelectorAll('.cell');
    id = Array.prototype.indexOf.call(cells, e.target);
    if (!(e.target.classList.contains('x') || e.target.classList.contains('o') || getWinner() || e.target === field)) {
      if (o.length === x.length) {
        current = 'x';
      } else {
        current = 'o';
      }

      e.target.classList.add(current);
      gameState.id.push(id);
      gameState.sign.push(current);
      localStorage.setItem('game', JSON.stringify(gameState));

      ifGetWinner();
    }
  }

  generateField.addEventListener('click', operGenerate);
  startNewGame.addEventListener('click', start);
  field.addEventListener('click', clickAction);
});

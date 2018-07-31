window.addEventListener('load', function handleLoad() {
  'use strict';

  var btnStartNewGame = document.querySelector('.startNewGame');
  var winnerMessage = document.querySelector('.winner-message');
  var field = document.querySelector('.field');
  var cells = document.querySelectorAll('.cell');
  var nextMark = 'x';

  btnStartNewGame.addEventListener('click', function hendleClick() {
    var i;
    var clList;
    for (i = 0; i < cells.length; i++) {
      clList = cells[i].classList;
		 	clList.remove('x');
		 	clList.remove('o');
    }
    winnerMessage.innerHTML = '';
    nextMark = 'x';
  });

  field.addEventListener('click', function handleListener(e) {
    var winner;
    if (!e.target.classList.contains('cell') ||
			e.target.classList.contains('x') ||
			e.target.classList.contains('o') ) {
      return;
    }
    if (getWinner()) {
      return;
    }
    e.target.classList.add(nextMark);
    if (nextMark === 'x') {
      nextMark = 'o';
    }else{
      nextMark = 'x';
    }
    winner = getWinner();
    if (winner) {
      if (winner === 'x') {
        winnerMessage.innerHTML = 'победил X';
      }else{
        winnerMessage.innerHTML = 'победил O';
      }
    }
  });
});

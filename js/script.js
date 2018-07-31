window.addEventListener('load', function(){
  var vv =document.querySelector('.iknowcss');
  if (vv != null){
    vv.style.backgroundColor = "green";
    vv.style.width = '500px';
  } 
  var vh =document.querySelector('.main-head');
  vh.innerHTML='Привет!';

  //var va = document.querySelectorAll('body');
  //console.log(va);

  document.querySelector('h1').addEventListener('click', function(){
  	alert('По мне кликнули');
  })

  // var c3 = document.querySelector('.c3');
  // c3.addEventListener('click', function(event){
  // 	//event.target 
  // 	c3.style.backgroundColor='white';
  // 	event.stopPropagation(); // запретить всплытие
  // });

  // var c2 = document.querySelector('.c2');
  // c2.addEventListener('click', function(){
  // 	c2.style.backgroundColor='white';
  // });



  function aClick(e){
  	alert('c1.click: '+e);
  	c1.removeEventListener('click', aClick, false); // после первого клика событие click удаляется и больше вызвать его нельзя
  }

  var c1 = document.querySelector('.c1');
  c1.addEventListener('click', aClick, false);






  



});

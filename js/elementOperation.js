/**
 * Операции сщздания и удаления элементов
 * index3.html
 */
window.addEventListener('load', function handleLoad() {
  'use strict';
  var quots;
  var elem1;
  var elem2;
  var parent;
  var elementbefore;

  var fragment;
  var browsers;
  var li;
  var ulElem;
  quots = document.querySelectorAll('.quote');
  elem1 = document.createElement('span');
  elem1.style.color = 'red';
  elem1.style.border = 'solid  green 3px';
  elem1.style.background = '#f7ff00';
  elem1.innerHTML = 'Динамически созданный элемент №1';
  quots[1].appendChild(elem1);

  elem2 = document.createElement('span');
  elem2.style.color = 'blue';
  elem2.style.border = 'solid  green 3px';
  elem2.style.background = '#f7ff00';
  elem2.innerHTML = 'Динамически созданный элемент №2';
  parent = elem1.parentNode;
  elementbefore = quots[1].firstChild;
  parent.insertBefore(elem2, elementbefore);

  fragment = document.createDocumentFragment();
  browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'Internet Explorer'];

  browsers.forEach(function(browser) {
    li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
  });
  ulElem = document.createElement('ul');
  ulElem.appendChild(fragment);
  quots[1].appendChild(ulElem);
});

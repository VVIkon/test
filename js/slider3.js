window.addEventListener('load', function onLoad() {
  'use strict';

  //  var iStrngth = 0;
  // var iImage = 0;
  // var iTimer;
  var testimage;
  var carImageSources;
  var step = 1;
  var ind;
  //var cnt = 1;
  var cStppd = false;
  //var tOut;
  carImageSources = [
    'img/001.jpg',
    'img/002.jpg',
    'img/003.jpg',
    'img/004.jpg',
    'img/005.jpg',
    'img/006.jpg',
    'img/007.jpg',
    'img/008.jpg',
    'img/009.jpg'
  ];
  testimage = document.querySelector('#imageSet');

  function cStp() {
    this.style.cursor = this.lnk ? 'pointer' : 'default';
    cStppd = true;
  }

  function cRstrt() {
    cStppd = false;
  }

  function carousel() {
    var img;
    // function hideImg() {
    //   if (step >= 0.1) {
    //     testimage.firstChild.style.opacity = step;
    //     step -= 0.1;
    //     window.setTimeout(hideImg, 10);
    //   }
    // }

    if (!cStppd) {
      img = document.createElement('img');
      img.src = carImageSources[ind];
      img.style.border = 0;
      img.style.opacity = 1;
      img.classList.add('clideImg');
      img.onmouseover = cStp;
      img.onmouseout = cRstrt;
      if (testimage.hasChildNodes()) {
        //step = 1;
        // window.clearTimeout(tOut);
        //window.setTimeout(hideImg, 3000);
        // for (step = 1; step >= 0; step -= 0.1) {
        //   testimage.firstChild.style.opacity = step;
        // }
        testimage.removeChild(testimage.firstChild);
      }
      testimage.appendChild(img);
      ind += 1;
      if (ind >= carImageSources.length) {
        //return;
        ind = 0;
      }
      window.setTimeout(carousel, 3000);
    }
  }

  ind = 0;
  carousel();
});


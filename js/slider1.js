// window.addEventListener('load', function onLoad() {
//   'use strict';

var carImageWidth;
var carImageHeight;
var carBorder; // true or false
var carBorderColor;
var carSpeed;
var carDirection; // true or false
var carNoOfSides; // must be 4, 6, 8 or 12
var cWI;
var cClcW;
var cCoef;
var pi2;
var pi3;
var pi4;
var pi6;
var cCoefOf;
var cPreImg;
var cAngle;
var cCrImg;
var cMaxW;
var cTotalW;
var cStppd;
var i;
var cLeftOffset;
var cHalfNo;
var carImageSources;

/* array to specify images and optional links.
For 4 sided carousel specify at least 2 images
For 6 sided carousel specify at least 3
For 8 sided carousel specify at least 4
For 12 sided carousel specify at least 6
If Link is not needed keep it ""
*/

carImageSources = [
  'img/001.jpg', '',
  'img/002.jpg', '',
  'img/003.jpg', '',
  'img/004.jpg', '',
  'img/005.jpg', '',
  'img/006.jpg', '',
  'img/007.jpg', '',
  'img/008.jpg', '',
  'img/009.jpg', ''
];
carImageWidth = 800;
carImageHeight = 600;
carBorder = true;
carBorderColor = 'white';
carSpeed = 3;
carDirection = true;
carNoOfSides = 4;

/***************** Редактировать нельзя **********************************/
cWI = new Array(carNoOfSides / 2 + 1);
cClcW = new Array(carNoOfSides / 2);

pi2 = Math.PI / 2;
pi3 = Math.PI / 3;
pi4 = Math.PI / 4;
pi6 = Math.PI / 6;
cCoef = [3 * pi2, 0, 3 * pi2, 11 * pi6, pi6, 3 * pi2, 7 * pi4, 0, pi4, 3 * pi2, 5 * pi3, 11 * pi6, 0, pi6, pi3];

switch (carNoOfSides) {
case 4:
  cCoefOf = 0;
  break;
case 6:
  cCoefOf = 2;
  break;
case 8:
  cCoefOf = 5;
  break;
default:
  cCoefOf = 9;
}

cPreImg = [carImageSources.length];
cAngle = carDirection ? Math.PI / (carNoOfSides / 2) : 0;
cCrImg = carNoOfSides;
cStppd = false;
cHalfNo = carNoOfSides / 2;

function carImages() {
  if (!cStppd) {
    cTotalW = 0;
    for (i = 0; i < cHalfNo; i++) {
      cClcW[i] = Math.round(Math.cos(Math.abs(cCoef[cCoefOf + i] + cAngle)) * carImageWidth);
      cTotalW += cClcW[i];
    }
    cLeftOffset = (cMaxW - cTotalW) / 2;
    for (i = 0; i < cHalfNo; i++) {
      cWI[i].style.left = cLeftOffset + 'px';
      cWI[i].style.width = cClcW[i] + 'px';
      cLeftOffset += cClcW[i];
    }
    cAngle += carSpeed / 720 * Math.PI * (carDirection ? -1 : 1);
    if ((carDirection && cAngle <= 0) || (!carDirection && cAngle >= Math.PI / cHalfNo)) {
      if (cCrImg === carImageSources.length) {
        cCrImg = 0;
      }
      if (carDirection) {
        cWI[cHalfNo] = cWI[0];
        for (i = 0; i < cHalfNo; i++) {
          cWI[i] = cWI[i + 1];
        }
        cWI[cHalfNo - 1].src = carImageSources[cCrImg];
        cWI[cHalfNo - 1].lnk = carImageSources[cCrImg + 1];
      } else {
        for (i = cHalfNo; i > 0; i--) {
          cWI[i] = cWI[i - 1];
        }
        cWI[0] = cWI[cHalfNo];
        cWI[0].src = carImageSources[cCrImg];
        cWI[0].lnk = carImageSources[cCrImg + 1];
      }
      cAngle = carDirection ? Math.PI / cHalfNo : 0;
      cCrImg += 2;
    }
  }
  setTimeout('carImages()', 50);
}

function cLdLnk() {
  if (this.lnk) {
    window.location.href = this.lnk;
  }
}

function cStp() {
  this.style.cursor = this.lnk ? 'pointer' : 'default';
  cStppd = true;
}

function cRstrt() {
  cStppd = false;
}


function carousel() {
  if (document.getElementById) {
    for (i = 0; i < carImageSources.length; i += 2) {
      cPreImg[i] = new Image();
      cPreImg[i].src = carImageSources[i];
    }
    cMaxW = carImageWidth / Math.sin(Math.PI / carNoOfSides) + cHalfNo + 1;
    carDiv = document.getElementById('Carousel');
    for (i = 0; i < cHalfNo; i++) {
      cWI[i] = document.createElement('img');
      carDiv.appendChild(cWI[i]);
      cWI[i].style.position = 'absolute';
      cWI[i].style.top = 0 + 'px';
      cWI[i].style.height = carImageHeight + 'px';
      if (carBorder) {
        cWI[i].style.borderStyle = 'solid';
        cWI[i].style.borderWidth = 1 + 'px';
        cWI[i].style.borderColor = carBorderColor
      }
      cWI[i].src = carImageSources[2 * i];
      cWI[i].lnk = carImageSources[2 * i + 1];
      cWI[i].onclick = cLdLnk;
      cWI[i].onmouseover = cStp;
      cWI[i].onmouseout = cRstrt;
    }
    carImages();
  }
}

// });



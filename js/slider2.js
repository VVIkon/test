var slideShowSpeed;
var crossFadeDuration;
var carImageSources;
var t;
var p;
var preLoad;
var j;

slideShowSpeed = 3000; // время
crossFadeDuration = 3;

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

// далее нельзя редактировать

j = 0;
p = carImageSources.length;
preLoad = [];
for (i = 0; i < p; i++) {
  preLoad[i] = new Image();
  preLoad[i].src = carImageSources[i];
}

function carousel() {
  if (document.all) {
    //document.images.SlideShow.style.filter = 'blendTrans(duration=2)';
    document.images.SlideShow.style.filter = 'blendTrans(duration=crossFadeDuration)';
    document.images.SlideShow.filters.blendTrans.apply();
  }
  document.images.SlideShow.src = preLoad[j].src;
  if (document.all) {
    document.images.SlideShow.filters.blendTrans.play();
  }
  j = j + 1;
  if (j > (p - 1)) j = 0;
  t = setTimeout('carousel()', slideShowSpeed);
}
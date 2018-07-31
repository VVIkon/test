window.addEventListener('load', function onLoad() {
  var script;

  window.success = function(data) {
    document.body.innerHTML = '';
    data.forEach(function(rec) {
      var p = document.createElement('p');
      p.innerHTML = rec.base_ccy+ ' / '+rec.ccy + ' : продажа = '+ rec.sale+ ';  покупка = ' + rec.buy;
      document.body.appendChild(p);
    });
  };
  script = document.createElement('script');
  script.src = 'https://api.privatbank.ua/p24api/pubinfo?jsonp=success&exchange&coursid=5';
  document.head.appendChild(script);
});

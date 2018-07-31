$(function(){
	var rw = $('#resize-text');
	var sw = $('#scroll-text');

	/*$(window).resize(function(){
		rw.text('ширина = '+window.innerWidth +', высота='+window.innerHeight);
	});
	$(window).scroll(function(){
		sw.text('Y='+window.scrollY);
	})*/

	/*$(window).on('resize scroll',function(){
		rw.text('ширина = '+window.innerWidth +', высота='+window.innerHeight);
		sw.text('Y='+window.scrollY);
	});*/
	// или раздельно
	$(window).on({
		resize:function(e){
			rw.text('ширина = '+window.innerWidth +', высота='+window.innerHeight);
			console.log(e.data.power);
		},
		scroll:function(e){
			sw.text('Y='+window.scrollY);
			console.log(e.data.user);
		},
	}, {user: 'Это скрол', power: 'Для обработки размера'});

	$(window).trigger('resize');
	$(window).trigger('scroll');


	/*$(window).off('resize');*/

	/*$('#btn').click(function(e){
		/*$(this).text('Нажата');*/
		/*e.target.innerHTML='Теперь нажата';

	})*/

	$('#btn').on('click', function(e){
		e.target.innerHTML='Теперь нажата';
		// добавление элемента
		var np = $('<p>', { 
			id:'p55', 
			class: 'dinner', 
			datarep: 'coki',
			title: 'комментарий к параграфу',
			on:{
				click:function(){
					$(this).toggleClass('big-dinner');
				}
			}
		}).css({
			'padding': '10px',
			'border': '1px solid black'
		}); 


		np.text('Новый элемент');
		//np.appendTo(sw);
		//sw.append(np);
		//sw.prepend(np);
		//np.prependTo(sw);	
		//sw.after(np);
		//np.insertAfter(sw);
		//sw.before(np);
		np.insertBefore(sw);


	})
});

	/*$('#btn').trigger('click');*/

$(function($){

	
	let showTime = 800;
	let md = $('#modalDiv');
	let oldDiv = null;
	let n=0;
	$('.someDiv').on({
		click:function(e){
			n=0;
			if(oldDiv){
				oldDiv.css('opacity',1);
			}
			let jthis = $(this);
			md.css({
				'top': jthis.offset().top,
				'left':jthis.offset().left,
				'width': jthis.width(),
				'height': jthis.height(),
				'background-color': jthis.css('background-color'),
				'opacity': 1 ,
				'display': 'block'
			});
			jthis.css('opacity',0);

			md
				.animate({'height':400, 'width':400}, {
					duration: 400,
					queue:false,
					specialEasing:{
						height: 'swing',
						// height: 'linear',
						width: 'swing',
					},
					complete: function(){
						console.log('animation is finish!')
					},
					step: function(){
						console.log(n++)
					}
				})
				.animate({'top':(window.innerHeight - 400)/2,
						  'left':(window.innerWidth - 400)/2
					}, {
					duration: 800,
					//queue:false,
					specialEasing:{
						height: 'swing',
						// height: 'linear',
						width: 'swing',
					}
				});

			//md.css('top', (window.innerHeight - md.height()) / 2+100);
			//md.css('left', (window.innerWidth - md.width()) / 2);
			md.css('background-color', $(e.target).css('background-color') );
			md.show(showTime);

			oldDiv = jthis;
		},
		
	});

	$('#modalDiv').on('click', function(){
		$(this).hide(showTime);
	})



})(jQuery);
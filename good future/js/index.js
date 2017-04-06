$(function() {
	var myAudio = document.getElementById('myAudio');
	var musicButton = $('#musicBt');
	var audioPlaying = false;
	var bgPlaying = false;
	var musicInit = false;
	$('body').on('touchstart', function(e) {

		if(!!musicInit) return;

		musicInit = true;

		if(!bgPlaying) {
			myAudio.load();
			myAudio.play();
			musicButton.addClass('playing');
			bgPlaying = true;
		}
	});
	$(function() {

		myAudio.load();
		myAudio.play();
		musicButton.addClass('playing');

		musicButton.on('touchend', function() {
			if(!!audioPlaying) {
				myAudio.pause();
				musicButton.removeClass('playing');
				audioPlaying = false;

			} else {
				myAudio.play();
				musicButton.addClass('playing');
				audioPlaying = true;
			}
		})
	});

	var startX,
		startY,
		moveEndX,
		moveEndY,
		X,
		Y;
	$(document).on("touchstart", function(e) {
		// e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(document).on("touchmove", function(e) {
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;

		// if (Math.abs(X) > Math.abs(Y) && X > 0) {
		//     alert("left 2 right");
		// } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
		//     alert("right 2 left");
		// } else 

		if(Math.abs(Y) > Math.abs(X) && Y < -5) {
			// alert("top 2 bottom");
			pageChangeTo(1)
		} else if(Math.abs(Y) > Math.abs(X) && Y > 5) {
			// alert("bottom 2 top");
			pageChangeTo(-1)
		} else {
			// alert("just touch");
		}
	});

	var pageIndex = 4,
		pageChanging = true;

	function pageChangeTo(direction) {

		if(pageChanging) return;

		var current = pageIndex;

		if((direction < 0 && pageIndex + direction <= 3) || (direction > 0 && pageIndex + direction > 13)) {
			return;
		}

		pageIndex += direction;

		// if(pageIndex==13){
		//     $('#page'+current).fadeOut(500);
		//     $('#page'+pageIndex).fadeIn(500
		// }

		$('#pageTip').hide();

		pageChanging = true;

		// alert('#page'+current+'//#page'+pageIndex)

		pageYearChange(pageIndex - 1);

		pageReady(pageIndex);
		setTimeout(function() {

			$('#page' + current).fadeOut(500);
			$('#page' + pageIndex).fadeIn(500, function() {
				playPage(pageIndex);
				pageChanging = false;
			});

		}, 500);

	}

	var w = $(window).width();

	function getResizePx(px) {

		if(w > 640) return px;

		return(w / 640) * px;
	}

	function pageIn(index) {

		var page = $('#page' + index);
		var items = page.find('.animate');

		items.each(function(i) {

			var delay = $(this).attr('data-delay');
			delay = (delay.substring(0, delay.length - 1) - 0) * 1000;
			// console.log(delay)

			$(this).stop().animate({
				'z': '1'
			}, delay, function() {

				var name = $(this).attr('data-animation'),
					delay = $(this).attr('data-delay'),
					duration = $(this).attr('data-duration'),
					loop = $(this).attr('data-loop') - 0,
					direction = $(this).attr('data-direction') || 'none',
					timing = $(this).attr('data-timing') || 'linear';

				if(loop <= 0) {
					loop = 'infinite';
				}

				var style = 'animation-name:' + name + ';-webkit-animation-name:' + name + ';animation-duration:' + duration + ';-webkit-animation-duration:' + duration + ';animation-delay:' + '0' + ';-webkit-animation-delay:' + '0' + ';animation-iteration-count:' + loop + ';-webkit-animation-iteration-count:' + loop + ';animation-direction:' + direction + ';-webkit-animation-direction:' + direction + ';animation-timing-function:' + timing + ';-webkit-animation-timing-function:' + timing + ';';

				$(this).addClass(name).show().attr('style', style);

			});

		});
	}

	function pageReady(index) {

		clearTimeout(window.p4t1)
		clearTimeout(window.p4t2)
		clearTimeout(window.p4t3)
		clearTimeout(window.p5t1)
		clearTimeout(window.p5t2)
		clearTimeout(window.p5t3)
		clearTimeout(window.p5t4)
		clearTimeout(window.p5t5)
		clearTimeout(window.p6t1)
		clearTimeout(window.p6t2)
		clearTimeout(window.p7t1)
		clearTimeout(window.p8t1)
		clearTimeout(window.p8t2)
		clearTimeout(window.p8t3)
		clearTimeout(window.p8t4)
		clearTimeout(window.p9t1)
		clearTimeout(window.p9t2)
		clearTimeout(window.p9t3)
		clearTimeout(window.p10t1)
		clearTimeout(window.p11t1)
		clearTimeout(window.p12t1)
		clearTimeout(window.p13t1)
		clearTimeout(window.p13t2)

		if(index == 5) {
			$('#p5cs0').show().removeClass();
			$('#p5cs1').hide().removeClass();
			$('#p5cs3').hide();
			$('#p5csa1').show();
			$('#p5csa8').show();
			$('#p5csa6').show();
			$('#p5csa10').show();
		}

		if(index == 6) {
			$('#p6p1').show().removeClass();
			$('#p6p2').attr('style', '').removeClass();
		}

		if(index == 8) {
			$('div.p8stars').hide();
			$('#p8s1').attr('style', '').removeClass().addClass('animate');
			$('#p8s2').hide();
		}

		if(index == 8) {
			$('#p9tree1').attr('style', '').removeClass().addClass('animate');;
			$('#p9tree3').attr('style', '').removeClass().addClass('animate');;
			$('#p9tree2').attr('style', '').removeClass().addClass('animate');;
		}

		if(index == 13) {
			$('#ship2').hide().removeClass();
		}
		var page = $('#page' + index);
		var items = page.find('.animate');
		items.stop().attr('style', '').hide().removeClass().addClass('animate');

	}

	//console.log('Pace');
	Pace.options = {
		ajax: false
	}
	Pace.on('done', function() {

		$('body').css('opacity', 1);

		setTimeout(function() {
			$('#ship div').addClass('shipBig1');
			$('#ship').attr('css', '').removeClass();
		}, 0)
		setTimeout(function() {
			$('#ship div').addClass('shipBig1');
			$('#ship').addClass('shipFlying')
		}, 0)
		setTimeout(function() {
			$('#page1').fadeOut(500);
			$('#page2').fadeIn(500);
			playPage(2);
		}, 0)

	});

	/*timelin animate*/

	function timeLineGo(year) {

		var y = $('#timeYear').find('#y' + year);
		var l = y.index() * y.width();

		if(y.index() == 0) {
			l = 0;
		}

		$('#timeYear').animate({
			left: -(l / 3) * 2 + 'px'
		}, 500);
		$('#timeShip').animate({
			left: l / 3 + 'px'
		}, 500);

	}

	var pageYear = [0, 0, 0, 2003, 2005, 2008, 2010, 2013, 2013, 2014, 2014, 2015, 2015];

	function pageYearChange(id) {
		timeLineGo(pageYear[id]);
	}

	/* ready all page*/

	for(var i = 1; i <= 13; i++) {
		pageReady(i);
	}

	/* bind events */

	/* playPage */

	var clickLock = false;

	function autoPage2() {
		if(clickLock) return;

		clickLock = true;

		$('#ship').attr('style', '').removeClass();

		setTimeout(function() {
			$('#ship').addClass('flyOut');
		}, 0)

		setTimeout(function() {
			$('#page2').fadeOut(1000);
			$('#page3').show();
			playPage(3);
		}, 2000)
	}

	function playPage(index) {

		if(index > 1) {
			pageReady(index - 1);
		}

		pageReady(index);
		pageIn(index);

		if(index == 2) {

			/* 点击进入时光机 */
			$('#buttonStart').unbind().on('click', function() {

				autoPage2();

			});

		}

		if(index == 3) {

			var year = 2015;

			var yearCount = setInterval(function() {
				year--;

				if(year < 2003) {
					clearInterval(yearCount);

					setTimeout(function() {
						$('#page3').addClass('scaleFadeOut');
						$('#page4').show();
					}, 500);

					setTimeout(function() {
						$('#page3').hide();
						playPage(4);
						timeLineGo(2003);
						pageChanging = false;
					}, 1000);

					return;
				}

				// console.log((year + '').split(''))
				$('#num1').removeClass().addClass('n' + (year + '').split('')[0]);
				$('#num2').removeClass().addClass('n' + (year + '').split('')[1]);
				$('#num3').removeClass().addClass('n' + (year + '').split('')[2]);
				$('#num4').removeClass().addClass('n' + (year + '').split('')[3]);

			}, 200);

		}

		if(index == 4) {

			$('#timeline').fadeIn(500);

			// setTimeout(function(){
			// timeLineGo(2003);
			// }, 500);

			$('#link').text('');

			window.p4t1 = setTimeout(function() {

				var www = ('aoshu.com').split('');
				// console.log(www)
				var str = '';
				var lc = 0;
				window.p4t2 = setInterval(function() {

					if(!www[lc]) {
						clearInterval(window.p4t2);
						return;
					}

					str += www[lc];
					$('#link').text(str);
					lc++;
				}, 80)

			}, 2000)

			// setTimeout(function() {
			//     timeLineGo(2005);
			// }, 5500);

			window.p4t3 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page4').fadeOut(500);
				// playPage(5);
			}, 4000);

		}

		if(index == 5) {

			$('#p5t').show();

			window.p5t1 = setTimeout(function() {

				$('#p5cs0').addClass('scaleOut');
				$('#p5cs1').fadeIn(500);
				$('#p5cs0').hide();

			}, 5000)

			window.p5t2 = setTimeout(function() {
				$('#p5csa1').fadeOut(500);
				$('#p5csa8').fadeOut(500);
			}, 10000)

			window.p5t3 = setTimeout(function() {
				$('#p5csa6').hide();
				$('#p5csa10').hide();

				$('#p5cs1').addClass('scaleOut2');
				$('#p5cs3').fadeIn(500);
				$('#p5cs1').hide();

			}, 14000);

			// setTimeout(function() {
			//     timeLineGo(2008);
			// }, 19500);

			window.p5t4 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page5').fadeOut(500);
				// playPage(6);
			}, 17000);
		}

		if(index == 6) {

			window.p6t1 = setTimeout(function() {

				$('#p6p1').addClass('flipOutXX');
				$('#p6p2').addClass('flipInXX');

			}, 4000)

			// setTimeout(function() {
			//     timeLineGo(2010);
			// }, 5500);
			window.p6t2 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page6').fadeOut(500);
				// playPage(7);
			}, 5000);

		}
		if(index == 7) {

			$('#p7ph1').show();
			$('#p7ph2').show();

			// setTimeout(function() {
			//     timeLineGo(2013);
			// }, 4500);

			window.p7t1 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page7').fadeOut(500);
				// playPage(8);
			}, 3500);

		}
		if(index == 8) {

			var starPos = [
				[732, '6.328125%'],
				[789, '44.921875%'],
				[328, '63.984375%'],
				[641, '78.984375%'],
				[389, '17.109375%']
			]

			$('div.p8stars').hide();

			window.p8t1 = setTimeout(function() {

				var starcount = 1;
				window.p8t2 = setInterval(function() {

					if(starcount > 5) {
						clearInterval(window.p8t2);

						$('#p8s2').fadeIn(500);

						return;
					}

					$('#p8s1').attr('style', '').addClass('starjello');

					window.p8t3 = setTimeout(function() {
						$('#p8s1').removeClass();
					}, 500)

					$('#p8ss' + starcount).css({
						left: getResizePx(300) + 'px',
						top: getResizePx(500) + 'px'
					}).show().animate({
						top: getResizePx(starPos[starcount - 1][0]) + 'px',
						left: starPos[starcount - 1][1]
					}, 500);

					starcount++;

				}, 800)

			}, 1500);

			// setTimeout(function() {
			//     timeLineGo(2013);
			// }, 8000);

			window.p8t4 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page8').fadeOut(500);
				// playPage(9);
			}, 7000);
		}

		if(index == 9) {

			window.p9t1 = setTimeout(function() {
				$('#p9tree1').attr('style', '').removeClass();
				$('#p9tree3').attr('style', '').removeClass();
				$('#p9tree2').attr('style', '').removeClass();

				window.p9t2 = setTimeout(function() {
					$('#p9tree1').addClass('flowerRoll');
					$('#p9tree3').addClass('flowerRoll');
					$('#p9tree2').addClass('flowerRoll');
				}, 0);

			}, 4500)

			// setTimeout(function() {
			//     timeLineGo(2014);
			// }, 6500);
			window.p9t3 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page9').fadeOut(500);
				// playPage(10);
			}, 5500);
		}
		if(index == 10) {

			// setTimeout(function() {
			//     timeLineGo(2014);
			// }, 5500);
			window.p10t1 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page10').fadeOut(500);
				// playPage(11);
			}, 4000);
		}
		if(index == 11) {

			// setTimeout(function() {
			//     timeLineGo(2015);
			// }, 7000);
			window.p11t1 = setTimeout(function() {
				// pageChanging = false;
				$('#pageTip').fadeIn(500);
				// $('#page11').fadeOut(500);
				// playPage(12);
			}, 5500);

		}
		if(index == 12) {

			$('#timeline').fadeIn(500);

			window.p12t1 = setTimeout(function() {

				// pageChanging = false;
				$('#pageTip').fadeIn(500);

			}, 7000)
			$('#page13 #ship2').css({
				left: ($('#timeShip').css('left').substring(0, $('#timeShip').css('left').length - 2) - 0 + getResizePx(16)) + 'px',
				top: $('#timeShip').css('top')
			});

		}

		if(index == 13) {

			$('#page13 #ship2').css({
				left: ($('#timeShip').css('left').substring(0, $('#timeShip').css('left').length - 2) - 0 + getResizePx(16)) + 'px',
				top: $('#timeShip').css('top')
			}).show();

			// $('#page12').fadeOut(500, function() {
			$('#page13 #ship2').addClass('timeShipCenter');
			// });
			$('#timeline').fadeOut(500);
			// playPage(13);

			// $('#page13').show();

			window.p13t1 = setTimeout(function() {

				$('#page13 #ship2').removeClass().addClass('ship2Fly');

			}, 3000)

			window.p13t2 = setTimeout(function() {

				$('#page13 #box').fadeOut(500);
				// pageChanging = false;

			}, 6000)

		}

	}

})
//홈화면 배경이미지 사이즈, 타이핑효과
$(function () {
	const $home = $('#home');
	const content = '#꾸준히성장하는 #도전가 웹퍼블리셔 리나입니다.';
	const $text = document.querySelector('#home .text');
	let i = 0;

	$(window).on('load resize', function () {
		$home.height(window.innerHeight);
	});

	function typing() {
		let txt = content[i++];
		$text.innerHTML += txt;
		if (i > content.length) {
			$text.textContent = '';
			i = 0;
		}
	}

	setInterval(typing, 250);
});

//원페이지 스크롤
$(function () {
	window.addEventListener(
		'wheel',
		function (e) {
			e.preventDefault();
		},
		{ passive: false }
	);

	const $html = $('html');
	let page = 1;
	const lastPage = $('section').length;
	// console.log(lastPage);

	$html.animate({ scrollTop: 0 }, 10);

	$(window).on('wheel', function (e) {
		if ($html.is(':animated')) return;

		if (e.originalEvent.deltaY > 0) {
			if (page == lastPage) return;
			page++;
		} else if (e.originalEvent.deltaY < 0) {
			if (page == 1) return;
			page--;
		}
		if (page == 2) {
			$('header').show(1500);
		}
		if (page == 1) {
			$('header').hide(1000);
		}
		let posTop = (page - 1) * $(window).height();

		$html.animate({ scrollTop: posTop });
	});
});

//#skills 라이트박스
$(function () {
	const $shadow = $('.uiux>.shadow');
});

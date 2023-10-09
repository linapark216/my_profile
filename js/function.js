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

//원페이지 스크롤, 메뉴활성화
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
    const $menus = $('header>nav>.gnb>li>a');

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
			$('header').show(1000);
		}
		if (page == 1) {
			$('header').hide(1000);
		}

		let posTop = (page - 1) * $(window).height();
		$html.animate({ scrollTop: posTop });

        $menus.eq(page-2).parent().addClass('on').siblings().removeClass('on')

	});

    $menus.on('click',function(evt){
        evt.preventDefault();
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');

        let nowIdx = $menus.index(this);
        let page = nowIdx+2;
        let posTop = (page - 1) * $(window).height();

        $html.animate({ scrollTop: posTop });

        console.log(`posTop=${posTop}, page=${page}`);
    })
});

//#portfolio 슬라이드,라이트박스
$(function () {
	const $slides = $('#portfolio>.slides-container>.slides>li');
    const $btnNext = $('#portfolio>.slides-container>.slides-next');
    const $btnPrev = $('#portfolio>.slides-container>.slides-prev');

    let nowIdx = 0;
    let oldIdx = nowIdx;

    $btnPrev.on('click',function(evt){
        evt.preventDefault();
        
        oldIdx = nowIdx;
        nowIdx>0? nowIdx--:nowIdx=($slides.length-1);

        $slides.eq(oldIdx).stop().fadeOut(400);
		$slides.eq(nowIdx).stop().css({display:'flex'}).fadeIn(600);
    })

    $btnNext.on('click',function(evt){
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx<($slides.length-1)? nowIdx++:nowIdx=0;

        $slides.eq(oldIdx).stop().fadeOut(400);
		$slides.eq(nowIdx).stop().css({display:'flex'}).fadeIn(600);
    })
});


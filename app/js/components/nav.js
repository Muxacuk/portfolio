export function navTrigger() {
	let trigger = document.getElementsByClassName('nav-trigger')[0],
		nav = document.getElementsByClassName('header__hidden')[0],
		tiles = document.querySelectorAll('.header__cover rect'),
		links = document.getElementsByClassName('nav__link');

	$(trigger).on('click', (event) => {
		event.preventDefault();
		nav.classList.toggle('header__hidden_active');
		trigger.classList.toggle('nav-trigger_active');
		$(nav).find('.nav').stop(true,true).fadeToggle(1000);
	});

	for(let link of links){
		link.addEventListener('click',(event)=>{
			let selector = $(link).data('target'),
				target = $('.'+selector),
				offset = target.offset().top;

			$('body, html').animate({scrollTop: offset},1000);
			event.preventDefault();

			if($('.header__hidden').hasClass('header__hidden_active')){
				$('.nav-trigger').click();
			}
		});
	}
}
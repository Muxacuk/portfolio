export function navTrigger() {
	let trigger = document.getElementsByClassName('nav-trigger')[0],
		nav = document.getElementsByClassName('header__hidden')[0],
		links = document.getElementsByClassName('nav__link');


	$(trigger).on('click', (event) => {
		event.preventDefault();
		nav.classList.toggle('header__hidden_active');
		trigger.classList.toggle('nav-trigger_active');
		$(nav).find('.nav').stop(true,true).fadeToggle(1000);
	});

	for(let i=0; i < links.length; i++){
		links[i].addEventListener('click', (event)=>{

			let selector = links[i].attributes['data-target'].value,
				target = document.querySelector('.'+selector),
				offset = target.offsetTop+window.innerHeight;

			$('body, html').animate({scrollTop: `${offset}`},1000);
			
			event.preventDefault();

			if(nav.classList.contains('header__hidden_active')){
				$('.nav-trigger').click();
			}
		});
	}
}
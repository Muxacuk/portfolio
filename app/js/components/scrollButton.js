export function scrollButtonInit() {
	let buttons = document.getElementsByClassName('scroll-button');
	for(let button of buttons){
		button.addEventListener('click', function (event){
			let selector = $(this).data("target"),
				target = $("."+selector).children().first();

			$('html, body').animate({scrollTop: target.offset().top},500);
			event.preventDefault();
		});
	}

}
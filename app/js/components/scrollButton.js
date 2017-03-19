export function scrollButtonInit() {
	let buttons = document.getElementsByClassName('scroll-button');
	
	for(var i =0; i < buttons.length; i++){
		buttons[i].addEventListener('click', function (event){
			let selector = $(this).data("target"),
				target = $("."+selector).children().first();

			$('html, body').animate({scrollTop: target.offset().top},500);
			event.preventDefault();
		});
	}

}
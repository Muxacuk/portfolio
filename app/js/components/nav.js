export function navTrigger() {
	let trigger = document.getElementsByClassName('nav-trigger')[0],
		nav = document.getElementsByClassName('header__hidden')[0];

	trigger.addEventListener('click', (event) => {
		event.preventDefault();
		nav.classList.toggle('header__hidden_active');
		trigger.classList.toggle('nav-trigger_active');
	});
}
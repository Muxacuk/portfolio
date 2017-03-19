import { initMap } from './components/map';
import { CanvasVideoDraw } from './components/canvas';
import { navTrigger } from './components/nav';
import { scrollButtonInit } from './components/scrollButton';
import { SvgCircle } from './components/svgSkillCircle';

try{
	initMap();
}
catch(e){
	console.log("Google maps not avalible!");
};
try{
	scrollButtonInit();
}
catch(e){
	console.log(`error in  scrollButtons: ${e.message}`,e);
} 
try{
	navTrigger();
}
catch(e){
	console.log(`error in  nav: ${e.message}`);
} 
try{
	let canvas = new CanvasVideoDraw('header__canvas','pictures/video.mp4');
}
catch(e){
	console.log(`Something is wrong with the canvas: ${e.message}`);
}
try{
	let svgCircle = new SvgCircle('.skills__item');
}
catch(e){
	console.log(`Something is wrong with the SVG: ${e.message}`);
}

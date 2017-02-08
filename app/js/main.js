import { initMap } from './components/map';
import { CanvasVideoDraw } from './components/canvas';
import { navTrigger } from './components/nav';
import { scrollButtonInit } from './components/scrollButton';
import { SvgCirle } from './components/svgSkillCircle.js';

try{
	initMap();
}
catch(e){
	console.log("Google maps not avalible!");
};
try{
scrollButtonInit();
navTrigger();
}
catch(e){
	console.log('error in nav or scrollButtons');
} 
try{
	let canvas = new CanvasVideoDraw('header__canvas','pictures/video.mp4');
}
catch(e){
	console.log('Something is wrong with the canvas.');
}
try{
	let svgCirle = new SvgCirle('.skills__item');
}
catch(e){
	console.log('Something is wrong with the SVG.');
}

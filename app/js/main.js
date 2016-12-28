import { initMap } from './components/map';
import { CanvasVideoDraw } from './components/canvas';
import { navTrigger } from './components/nav';
import { scrollButtonInit } from './components/scrollButton';
import { SvgCirle } from './components/svgSkillCircle.js'
try{
	initMap();
}
catch(e){
	console.log("Google maps not avalible.");
};
scrollButtonInit();
navTrigger();
let canvas = new CanvasVideoDraw('header__canvas','/pictures/video.mp4'),
	svgCirle = new SvgCirle('.skills__item');
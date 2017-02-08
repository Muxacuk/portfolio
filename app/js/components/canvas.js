export class CanvasVideoDraw {
	constructor(selector, srcVideo){
		this.selector = selector;
		this.canvas = document.getElementById(selector);
		this.ctx = this.canvas.getContext('2d');
		this.srcVideo = srcVideo;
		this.setUpListeners();
		$(document).resize();
		this.init();
	}
	init(){

		let videoLoad = new Promise((resolve, reject) => {

			let video = document.createElement('video');
			video.src = this.srcVideo;
			
			video.setAttribute('type',"video/mp4");
			video.autoplay = true;
			video.volume = 0;
			video.loop = true;
			video.addEventListener('canplay', (event) => {
				console.log(event.timeStamp);
				if(event.timeStamp < 10000){
					resolve(video);
				}
			});
			console.log("Start loading.");
		});

		videoLoad.then((video) => {
			$('.header__bg-image').hide();
			setInterval(()=>{
				this.ctx.drawImage(video, this.paddingLeft, this.paddingTop, this.viewWidth, this.viewHeight);
			},1);
		});
	}
	setUpListeners(){
		$(window).resize((event)=>{

			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			this.width = this.canvas.width;
			this.height = this.canvas.height;
			let coef = this.width/this.height;

			if(coef > 1.7777778){
				this.viewWidth = this.width;
				this.viewHeight = Math.max(parseInt((this.viewWidth*720)/1280),this.height);
				this.paddingTop = (this.viewHeight != this.height)? (this.height-this.viewHeight)/2 : 0;
				this.paddingLeft = 0;
			}else{
				this.viewHeight = this.height;
				this.viewWidth = Math.max(parseInt((this.viewHeight*1280)/720), this.width);
				this.paddingLeft = (this.viewWidth != this.width)? (this.width-this.viewWidth)/2 : 0;
				this.paddingTop = 0;
			}
		});
	}
	
}
  
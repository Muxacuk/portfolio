export class CanvasVideoDraw {
	constructor(selector, srcVideo){
		this.canvas = document.getElementById(selector);
		this.ctx = this.canvas.getContext('2d');
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.height = this.height;
		this.canvas.width = this.width-100;
		this.srcVideo = srcVideo;
		this.srcMountinsImg = 'pictures/header_bg.png';
		this.init();
	}
	init(){
		let preLoadImg = new Image(),
			preLoadImgPromise = new Promise((resolve,reject) => {
			preLoadImg.addEventListener('load', (event) => {
				resolve(preLoadImg);
			});
			preLoadImg.src = 'pictures/header_bg.jpg';
		});
		preLoadImgPromise.then((img) => {
			this.ctx.drawImage(img,0,0,this.width,this.height);
		});
		
		let videoLoad = new Promise((resolve, reject) => {

			let video = document.createElement('video'),
				img = new Image();

			img.src = this.srcMountinsImg;
			video.src = this.srcVideo;
			video.setAttribute('type',"video/mp4");
			video.autoplay = true;
			video.loop = true;
			video.addEventListener('canplay', (event) => {
				resolve({video,img});
			});
		});

		videoLoad.then((data) => {
			setInterval(()=>{
				this.ctx.drawImage(data.video,-20,-50,this.width,this.height);
				this.ctx.drawImage(data.img,0,0,this.width,this.height);
			},17);
		});
	}
	
}
  
export class Canvas {
		constructor(selector){
			this.canvas = document.getElementById(selector);
			this.ctx = this.canvas.getContext('2d');
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.img = new Image();
			this.srcVideo = '/pictures/video.mp4';
			this.srcMountinsImg = 'pictures/mountins.png';
		}

		paint(){
			ctx.fillStyle = "green";

			console.log(height,width);
			videoLoad = new Promise(function (resolve, reject) {
				img.addEventListener('load', function (event) {
					resolve(this);
				});
			});

			videoLoad.then(result => {
				console.log(result);
				console.log('Hi');
			});
		}
		
}
  
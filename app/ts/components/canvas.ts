export default function () {
	var 
		canvas = document.getElementById('headerCanvas'),
		img = new Image(),
		srcVideo: string = '/pictures/video.mp4',
		srcMountinsImg: string = 'pictures/mountins.png',
		videoLoad: promise;

		videoLoad = new Promise(function (resolve, reject) {
			img.addEventListener('onload', function (event) {
				resolve(this);
			});
			canvas.src = srcVideo;
		});

		videoLoad.then(result => {
			console.log(result);
		});
}
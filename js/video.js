let video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is " + video.autoplay);
	console.log("Loop is " + video.loop);

});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	// we need to update volume information
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= .90;
	console.log("The speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate *= (100 / 90);
	console.log("The speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("You skipped a part of the video!");
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("You reloaded");
	} else {
		video.currentTime += 10;
		console.log("The current time of the video is " + video.currentTime)
	}
	// if (video.ended = true){
	// 	video.currentTime = 0;
	// 	video.play();
	// }
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("the video is unmuted");
	} else if (!video.muted) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("the video is muted");
	}

});

document.querySelector("#slider").addEventListener("input", function (event) {
	let sliderValue = event.target.value;
	document.querySelector("#volume").innerHTML = sliderValue + "%";
	video.volume = sliderValue / 100;
	console.log("The current volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.replace("video", "oldSchool");
	console.log("The video is vintage style now");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.replace("oldSchool", "video");
	console.log("The video has its original style now");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



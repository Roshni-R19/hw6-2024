let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is " + video.autoplay);
	console.log("Loop is " + video.loop)
	// how to check value of disabled and keep it like a toggle

});

document.querySelector("#play").addEventListener("click", function(){
	console.log("you got the play button!");
	video.play();
	// we need to update volume information
	document.querySelector("#volume").innerHTML = video.volume *100 +"%";
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
});

document.querySelector("#slider").addEventListener("click", function(){
	video.playbackRate *=.90;
	console.log("The speed is" + video.playbackRate)
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



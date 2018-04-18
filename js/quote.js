var captionElement;
var captions = [
	"If we are uncritical we shall always find what we want: we shall look for, and find, confirmations, and we shall look away from, and not see, whatever might be dangerous to our pet theories.",
	"What screws us up the most in life is the picture in our head of how it is supposed to be. - unknown",
	"We travel, some of us forever, to seek other states, other lives, other souls. - Anais Nin",
	"You don`t find love, it finds you. It’s got a little bit to do with destiny, fate, and what’s written in the stars. -Anais Nin"
];

window.onload = function() {
	var chosen = Math.floor(Math.random() * captions.length);
	captionElement = document.getElementById("quote");
	captionElement.innerHTML = captions[chosen];
};
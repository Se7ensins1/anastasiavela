var captionElement;
var captions = [
	"\"If we are uncritical we shall always find what we want.\" \n -Karl Popper",
	"\"What screws us up the most in life is the picture in our head of how it is supposed to be.\" \n-unknown",
	"\"We travel, some of us forever, to seek other states, other lives, other souls.\" \n-Anais Nin",
	"\"You don`t find love, it finds you. It`s got a little bit to do with destiny, fate, and what`s written in the stars.\" \n-Anais Nin",
	"\"To do two things at once is to do neither.\" \n -Publilius Syrus",
	"\"If you wish to be out front, then act as if you were behind.\" \n -Lao Tzu",
	"\"You can`t depend on your eyes when your imagination is out of focus.\" \n -Mark Twain",
	"\"A friend to all is a friend to none.\" \n -Aristotle",
	"\"If you are lonely when you`re alone, you are in bad company.\" \n -Jean-Paul Sartre",
	"\"The changes in our life must come from the impossibility to live...\" \n -Leo Tolstoy",
	"\"The system is rigged against you.\" ",
	"\"Ask yourself are you better off now than you were four years ago?\" -Ronald Regan"
];

window.onload = function() {
	var chosen = Math.floor(Math.random() * captions.length);
	captionElement = document.getElementById("quote");
	captionElement.innerHTML = captions[chosen];
};
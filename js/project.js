// var paused = false;

//  $('#autoScroll').hover(function(){ paused = true; }, 
// 											function(){ paused = false; }); 

// function ticker() {
// 	console.log(paused);
// 		if (paused) return;

// 		$("#autoScroll").animate({ scrollTop: $('#autoScroll').prop("scrollHeight")}, 10000);
//  }



// var $progressBar = $('.timer-blue');

// function runIt() {
// 	$progressBar.animate({ width: "50px", }, 5000, function() {
// 		$progressBar.css("width", "0")
// 		runIt();
// 	});
// }


// $('.progressBar').hover(function() {
// 		$('.timer-blue').clearQueue();
// 		$('.timer-blue').stop();
// }, function() {
// 		runIt();
// });
// runIt();
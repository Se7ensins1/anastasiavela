// $(document).ready(function() {
// 	$("#autoScroll").animate({ scrollTop: $('#autoScroll').prop("scrollHeight")}, 5000);
// })


// $('#autoScroll').click(function(e) {
// 	$("#autoScroll").stop(true, true);
// });


var tickerUpdateTimer = setInterval('ticker()', 1000), paused = false;

 $('#autoScroll').hover(function(){ paused = true; }, 
                      function(){ paused = false; }); 

 function ticker() {

 	console.log(paused);
    if (paused) return;

    // $("#autoScroll").animate({ scrollTop: $('#autoScroll').prop("scrollHeight")}, 10000);
 }
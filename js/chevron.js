function chevron() {
	document.getElementById('menu').style.marginLeft = "0";
	document.getElementById('chevron').style.display = "none"
}

$(document).ready(function(){
    $('#chevron').on('click touchstart', function() {
    	$("#menu").css("margin-left", "0px");
    	$("#chevron").css("display", "none");
    });
});
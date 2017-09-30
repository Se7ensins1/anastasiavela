function moveTitle() {
	for (j=1; j<5; j++) {
        var id = j.toString() + "menu";
		document.getElementById(id).style.height="20.5vh";
	}

    document.getElementById("title").style.paddingLeft="15px";
    document.getElementById("title").style.paddingTop="30px";
    document.getElementById("title").style.top="0px";
    document.getElementById("title").style.left="0px";
    document.getElementById("title").style.width="120px";
    document.getElementById("title").style.height="80px";
    document.getElementById("title").style.marginTop="0px";
    document.getElementById("title").style.marginLeft="0px";
    document.getElementById("title").style.position="relative";
	
	document.getElementById("name").style.fontSize="2.2em";
    document.getElementById("port").style.fontSize="1.2em";
    document.getElementById("port").style.marginBottom="-10px";    
}

function openProjects() {
    closeOverlays()
    document.getElementById("navProjects").style.width = "92vh";
    // document.getElementById("navProjects").style.width = "155vh";
    moveTitle();
}

function openLessons() {
    closeOverlays()
    document.getElementById("navLessons").style.width = "67vh";
    moveTitle();
    closePopUps();
}

function openAbout() {
    closeOverlays()
    document.getElementById("navAbout").style.width = "67vh";
    moveTitle();
    closePopUps();
}

function closeOverlays() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "0%";
    document.getElementById("navAbout").style.width = "0%";
}

var timer = 0;

function closePopUps(timer) {
    for(i=1; i<=12; i++) {
        document.getElementById(i.toString() + "pop").style.display = "none";
        // document.getElementById(i.toString() + "text").style.display = "none";
    }
    document.getElementsByClassName("dots")[0].style.display = "none";
    if (timer) {
        clearTimeout(timer);
        timer = 0;
    }
}

function closePopExcept(j) {
    closePopUps(timer);
    document.getElementsByClassName("dots")[0].style.display = "inline";
    document.getElementById(j.toString() + "pop").style.display = "inline";
    // document.getElementById(j.toString() + "text").style.display = "inline";
    showSlides(j, 1);

}

function showSlides(j, k) {
    for (i = 1; i < 6; i++) {
       document.getElementById(j.toString() + "." + i.toString()).style.display = "none";  
    }
    document.getElementById(j.toString() + "." + k.toString()).style.display = "inline";
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[k-1].className += " active";
    k++;
    if (k > 5) {
        k = 1;
    }
    timer = setTimeout(showSlides, 3000, j, k);
}

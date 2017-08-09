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
    document.getElementById("navProjects").style.width = "45%";
    document.getElementById("navLessons").style.width = "0%";
    document.getElementById("navAbout").style.width = "0%";
    moveTitle();
    resizeImages();
    setTimeout("show()", 500);
}

function openLessons() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "45%";
    document.getElementById("navAbout").style.width = "0%";
    moveTitle();
    disappear();
}

function openAbout() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "0%";
    document.getElementById("navAbout").style.width = "45%";
    moveTitle();
    disappear();
}


function resizeImages() {

    for(i=1; i <= 12; i++) {
        var id = "img" + i.toString();
        var img = document.getElementById(id);
        var width = img.naturalWidth;
        var height = img.naturalHeight;

        if (width > height) {
            img.style.maxHeight = "100%";
            img.style.minWidth = "100%";
        } else if (width < height) {
            img.style.maxWidth = "100%";
            img.style.minHeight = "100%";
        } else {
            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";
        }
    }
    
}


function show() {
    document.getElementById("containers").style.display = "inline";
}

function disappear() {
    document.getElementById("containers").style.display = "none";
}
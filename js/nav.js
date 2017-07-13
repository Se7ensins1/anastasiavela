function moveTitle() {
	var nav=document.getElementsByTagName('td');
	for (j=0; j<nav.length; j++) {
		nav[j].style.height="20.5vh";
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
}

function openLessons() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "45%";
    document.getElementById("navAbout").style.width = "0%";
    moveTitle();
}

function openAbout() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "0%";
    document.getElementById("navAbout").style.width = "45%";
    moveTitle();
}

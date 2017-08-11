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
}

function openLessons() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "45%";
    document.getElementById("navAbout").style.width = "0%";
    moveTitle();
    for(i=1; i<=12; i++) {
        var id = i.toString() + "pop"
        document.getElementById(id).style.display = "none";
    }
}

function openAbout() {
    document.getElementById("navProjects").style.width = "0%";
    document.getElementById("navLessons").style.width = "0%";
    document.getElementById("navAbout").style.width = "45%";
    moveTitle();
    for(i=1; i<=12; i++) {
        var id = i.toString() + "pop"
        document.getElementById(id).style.display = "none";
    }
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



function onePop() {
    document.getElementById("1pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 1) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function twoPop() {
    document.getElementById("2pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 2) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function threePop() {
    document.getElementById("3pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 3) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function fourPop() {
    document.getElementById("4pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 4) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function fivePop() {
    document.getElementById("5pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 5) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function sixPop() {
    document.getElementById("6pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 6) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function sevenPop() {
    document.getElementById("7pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 7) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function eightPop() {
    document.getElementById("8pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 8) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function ninePop() {
    document.getElementById("9pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 9) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function tenPop() {
    document.getElementById("10pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 10) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function elevenPop() {
    document.getElementById("11pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 11) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

function twelvePop() {
    document.getElementById("12pop").style.display = "inline";
    for(i=1; i<=12; i++) {
        if (i != 12) {
            var id = i.toString() + "pop"
            document.getElementById(id).style.display = "none";
        }
    }
}

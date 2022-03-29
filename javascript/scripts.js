/* Menu*/
function Printing() {
	document.getElementById("laminating").style.display = "none";
	document.getElementById("cutting").style.display = "none";
	document.getElementById("binding").style.display = "none";
	document.getElementById("printing").style.display = "block";
}

function Binding() {
	document.getElementById("laminating").style.display = "none";
	document.getElementById("cutting").style.display = "none";
	document.getElementById("printing").style.display = "none";
	document.getElementById("binding").style.display = "block";
}

function Laminating() {

	document.getElementById("cutting").style.display = "none";
	document.getElementById("printing").style.display = "none";
	document.getElementById("binding").style.display = "none";
	document.getElementById("laminating").style.display = "block";
}

function Cutting() {
	document.getElementById("laminating").style.display = "none";
	document.getElementById("printing").style.display = "none";
	document.getElementById("binding").style.display = "none";
	document.getElementById("cutting").style.display = "block";
}

function showall(){
    var arr = document.getElementsByName('warm');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
    var arr = document.getElementsByName('cold');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
	var arr = document.getElementsByName('sandwich');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
	
	 var arr = document.getElementsByName('warm');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
    var arr = document.getElementsByName('cold');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
	var arr = document.getElementsByName('sandwich');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
}


function cold(){
    var arr = document.getElementsByName('warm');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
    var arr = document.getElementsByName('cold');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
	var arr = document.getElementsByName('sandwich');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
}


function warm(){
    var arr = document.getElementsByName('warm');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
    var arr = document.getElementsByName('cold');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
	var arr = document.getElementsByName('sandwich');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
}


function sandwich(){
    var arr = document.getElementsByName('warm');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
    var arr = document.getElementsByName('cold');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
	var arr = document.getElementsByName('sandwich');
    for(var i=0;i<arr.length;i++){
        arr[i].style.display="block";
    }
}




function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});





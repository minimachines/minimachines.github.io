window.onload=function() {
	document.getElementById("button1").onclick = click1;
	document.getElementById("button2").onclick = click2;
    document.getElementById("button3").onclick = click3;
}

function click1() {
	window.open("dogs.html");
}

function click2() {
	window.open("birds.html");
}

function click3() {
	window.open("magic.html");
}
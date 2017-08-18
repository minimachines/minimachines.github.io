window.onload = function() {
	document.getElementById("pizza").onclick = fun1;
    document.getElementById("magic eight ball").onclick = fun2;
    document.getElementById("cookie").onclick = fun3;
    document.getElementById("director X").onclick = fun4;   
    document.getElementById("game").onclick = fun5;

}

function fun1() {
	window.open("pizza.html");
}

function fun2() {
	window.open("magic.html");
}

function fun3() {
	window.open("cookie.html");
}

function fun4() {
	window.open("Director X.html");
}

function fun5() {
	window.open("game.html");
}
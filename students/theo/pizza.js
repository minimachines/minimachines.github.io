window.onload = function() {
	document.getElementById("theoIsAwesome").onclick = coolness;
}

function coolness() {
	alert("Do you want to learn about pizza?");
    window.open("https://en.wikipedia.org/wiki/Pizza")
}
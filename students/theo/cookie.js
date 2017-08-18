window.onload = function() {
	document.getElementById("cookie").onclick = addCookie;
    document.getElementById("bakery").onclick = changeBakery;
}


function addCookie() {
	var total = 
        parseInt( document.getElementById("total").innerHTML ) + 1;
    document.getElementById("total").innerHTML = total + " cookies";
}

function changeBakery() {
        var newBakery = prompt("Enter the new bakery name");
        document.getElementById("bakery").innerHTML = newBakery;
}
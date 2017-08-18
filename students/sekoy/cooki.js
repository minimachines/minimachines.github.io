window.onload = function() {
	document.getElementById("cooki").onclick = adCookie;
    document.getElementById("factory").onclick = changeFactory;
}

function adCookie() {
    
	var total=parseInt(document.getElementById("total").innerHTML)+1;
    
    
document.getElementById("total").innerHTML=  total+" cookie"
}

function changeFactory(){
var newFactory = prompt("hi");
    document.getElementById("factory").innerHTML = newFactory;
}
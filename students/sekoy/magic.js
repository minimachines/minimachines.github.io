window.onload = function() {
	document.getElementById("magic8").onclick = shake;
}

function shake() {
	var ansers =["yes","no","maybe","definetly","definetly not","better not tell you","i will check my sorces"];
    
    var random = Math.floor(Math.random()*7);

    
  alert(ansers[random]);
    
}
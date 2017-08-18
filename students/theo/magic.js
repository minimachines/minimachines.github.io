window.onload = function() {
	document.getElementById("magic").onclick = shake;
}

function shake() {
	
    var answers = ["yes" , "no" , "maybe" , "of corse not" , "i'll check my sorces" , "I can't answer that" , "definitely" , "definitely not"];
    
    var randomNumber = Math.floor(Math.random() * 8 );
    
    
    alert( answers[randomNumber] );
}
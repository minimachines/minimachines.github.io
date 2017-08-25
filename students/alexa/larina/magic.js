window.onload = function() {
	document.getElementById("shake").onclick = giveAnswer;
}

function giveAnswer() {
    
   
	
var answers = ["yes" , "no" , "maybe" , "cannot predict now" , "it is certin" , " i have no idea" , "outlook not so good" , "dont count on it" , "just ask google" , "i doubt it"];
    
var index =  Math.floor( Math.random() * 4 ); 
    
       
alert(answers[index]);   
}
window.onload = function() {
	document.getElementById("shake").onclick = shake;
}

function shake() {
	//alert("testing function"); i can keep this if i want to have a test shake// , 
var answers= ["No","Yes","Definitely","Maybe","Ask Again","Without a Doubt", "Don't Count on it" , "I'd Rather Not Say" , "Possibly" , "It is Certain"]

//10 is the max numer that I want -> get a random number from 0 o 10//
var index = Math.floor(Math.random() * 10 );
    
    document.getElementById("answer").innerHTML = answers[index] //inner 
    
    //alert(answers [index]);// I can keep this if I want the index to pop up as an alert.

}






 
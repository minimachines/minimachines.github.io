window.onload = function() {
	document.getElementById("shake").onclick = giveAnwser;
}

function giveAnwser() {
	alert("Amyah");
 
    var answers=["yes" "sup", "definitly" , "I don't know" , "hi" , "hello" , "How are you" , "red" , "good" , "ok" , "what " , "because I said so" , "thank you" , "your welcome"];
    
    // 7 is the max number that I want. -> get a random number from 0 to 7
    var index = Math.floor(Math.random() *4);
    
    alert(answers[index]);
    
}
    
    
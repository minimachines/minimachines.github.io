var answer = Math.floor(Math.random() *  10);




window.onload = function() {
	document.getElementById("submit").onclick = numberGame;
}

function numberGame() {
	var guess = document.getElementById("input").value;
     answer = Math.floor(Math.random() *  10);
    if(guess == answer){
        alert("correct");
        
    }else{
        alert("wrong");
    }
    
    
    
    
    
}
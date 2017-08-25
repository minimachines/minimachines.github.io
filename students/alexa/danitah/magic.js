
window.onload = function() {
	document.getElementById("shake").onclick = giveAnswer;
}

function giveAnswer() {
	alert("danitah ");
    var answers = ["yes" , "no","mabey,"];
    
    

    
    var index=Math.floor(Math.random() * 3 );
    
    alert(answers[index]);
    
}
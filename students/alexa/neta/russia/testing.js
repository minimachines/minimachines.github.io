window.onload = function() {
	document.getElementById("button1").onclick = click1;
    document.getElementById("button2").onclick = click2;
    document.getElementById("button3").onclick = click1;
    document.getElementById("button4").onclick = click1;
    document.getElementById("button5").onclick = click3;
    document.getElementById("button6").onclick = click3;
    document.getElementById("button7").onclick = click4;
    document.getElementById("button8").onclick = click3;
    document.getElementById("button9").onclick = click5;
    document.getElementById("button10").onclick = click5;
    document.getElementById("button11").onclick = click5;
    document.getElementById("button12").onclick = click6;
    document.getElementById("button13").onclick = click7;
    document.getElementById("button14").onclick = click8;
    document.getElementById("button15").onclick = click7;
    document.getElementById("button16").onclick = click7;
    document.getElementById("button17").onclick = click9;
}

function click1() {
	var response=prompt("Wrong. Type in -reveal the answer- or try again.");
    if(response=="reveal the answer"){
        alert("Peter the Great");
    }
}

function click2() {
	alert("Correct");
}


function click3() {
	var response=prompt("Wrong. Type in -reveal the answer- or try again.");
    if(response=="reveal the answer"){
        alert("Nicholas the Second");
    }
}
    
function click4() {
	alert("Correct");
}


function click5() {
	var response=prompt("Wrong. Type in -reveal the answer- or try again.");
    if(response=="reveal the answer"){
        alert("Anastasia");
    }
}
    

function click6() {
    alert("Correct");
}



function click7() {
    var response=prompt("Wrong. Type in -reveal the answer- or try again.");
    if(response=="reveal the answer"){
        alert("The Cold");
    }
}



function click8() {
    alert("Correct");
}



function click9() {
    var input=document.getElementById("input").value;
    if(input=="Romanov"){
        alert("Correct");
        
    } else {
        var response=prompt("Wrong. Type in -reveal the answer- or try again.");
    if(response=="reveal the answer"){
        alert("Romanov");
    }
    }
    
        document.getElementById("input").value = "";
}
    

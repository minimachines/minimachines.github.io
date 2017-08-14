(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("submit").onclick = submit;
	}

	function submit() {
		var input = $("input").value;

		if (input == "student") {
			location.href = "main.html";
		} else {
			$("input").value = "";
			alert("Incorrect password, please try again");
		}
	}
})();
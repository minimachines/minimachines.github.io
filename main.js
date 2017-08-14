(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("skeleton").onclick = skeleton;
	}

	function skeleton() {
		window.open("skeleton.html");
	}
})();
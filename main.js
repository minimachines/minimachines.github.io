(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("skeleton").onclick = skeleton;
		$("css").onclick = css;
	}

	function skeleton() {
		window.open("skeleton.html");
	}

	function css() {
		window.open("css.html");
	}
})();
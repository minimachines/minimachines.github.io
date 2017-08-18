(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("skeleton").onclick = skeleton;
		$("css").onclick = css;
		$("student").onclick = student;
	}

	function skeleton() {
		window.open("skeleton.html");
	}

	function css() {
		window.open("css.html");
	}

	function student() {
		window.open("students/students.html");
	}
})();
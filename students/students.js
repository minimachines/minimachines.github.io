(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("theo").onclick = theo;
		$("sekoy").onclick = sekoy;
		$("danitah").onclick = danitah;
	}

	// Leads to Theo's work
	function theo() {
		window.open("theo/theo.html");
	}

	// Leads to Sekoy's work
	function sekoy() {
		window.open("sekoy/sekoy.html");
	}

	function danitah() {
		window.open("alexa/danitah/alll about me .html");
	}

})();
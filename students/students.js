(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("theo").onclick = theo;
		$("sekoy").onclick = sekoy;
		$("idtech").onclick = iDTech;
	}

	// Leads to Theo's work
	function theo() {
		window.open("theo/theo.html");
	}

	// Leads to Sekoy's work
	function sekoy() {
		window.open("sekoy/sekoy.html");
	}

	function iDTech() {
		window.open("https://www.idtech.com/");
	}

})();
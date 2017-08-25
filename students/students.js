(function() {
	"use strict";
    var $ = function(id) { return document.getElementById(id); };

	window.onload = function() {
		$("theo").onclick = theo;
		$("sekoy").onclick = sekoy;
		$("danitah").onclick = danitah;
		$("amyah").onclick = amyah;
		$("larina").onclick = larina;
		$("khalina").onclick = khalina;
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
		window.open("alexa/danitah/danitah.html");
	}

	function amyah() {
		window.open("alexa/amyah/amyah.html");
	}

	function larina() {
		window.open("alexa/larina/pres.html");
	}

	function khalina() {
		window.open("alexa/khalina/khalina.html");
	}

})();
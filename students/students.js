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
		$("chelsea").onclick = chelsea;
		$("laura").onclick = laura;
		$("sarah").onclick = sarah;
		$("neta").onclick = neta;
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

	function chelsea() {
		window.open("alexa/chelsea/beach.html");
	}

	function laura() {
		window.open("alexa/laura/laura.html");
	}

	function sarah() {
		window.open("alexa/sarah/sarah.html");
	}

	function neta() {
		window.open("alexa/neta/neta.html");
	}
})();
(function( root, $, undefined ) {
	"use strict";

	$(function () {

		$("#menu-btn").on("click", function() {
			if(!$("body").hasClass("navigation-is-open")) {
				$("body").addClass("navigation-is-open");
				$("#menu-btn").text("Deactivate Menu");
			} else {
				$("body").removeClass("navigation-is-open");
				$("#menu-btn").text("Activate Menu");
			}
		});

	});

} ( this, jQuery ));
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Ask your own heart.");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").fadeToggle("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

var count = 0;
function projectClick(e) {
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
    var containingProject = $(this).closest(".project");

    var desc = $(containingProject).find(".project-description")
    
    if (desc.length == 0) {
    	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    }
    else {
    	$(".project-description").fadeOut();
    }
    
}

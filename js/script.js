function baseJS() {
	$(document).ready(function() {
		function slideTab() {
			$(".slide-tab").click(function() {
				$('.gallery').addClass("is-active");
			});
		};

		function ratingColor() {			
			console.log("working")
	    		if($(".rating span").text() == "R") {
	    			console.log("R workking")
	    			$(".rating").addClass("red");
	    		}
	    		if($(".rating span").text() == "PG-13") {
	    			console.log("PG-13 workking")
	    			$(".rating").addClass("yellow");
	    		}
	    		if($(".rating span").text() == "PG") {
	    			console.log("PG workking")
	    			$(".rating").addClass("green");
	    		}

	    	}
    		ratingColor();
	});
};

baseJS();
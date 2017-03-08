$(document).ready(function(){
	// Hide Header on on scroll down
	var navbar = $("#nav-bar");
	var didScroll;
	var lastScrollTop = 0;
	var delta = 0;
	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
			    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	        $('#subheading, #hostel').removeClass('center').addClass('transition');
	        navbar.css("background-color","#253a52");
	        $('#pu-logo').css("opacity","1");
	    } else {
	        // Scroll Up
	        if(st < 200) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	            $('#subheading, #hostel').removeClass('transition').addClass('center');
	            navbar.css("background-color","#f4511e");
	            $('#pu-logo').css("opacity","0");
	        }
	    }
	    
	    lastScrollTop = st;			    
	}

	var placeNavbar = function(){
		if($(window).width() >= "768"){
			var headerHeight = $('header').outerHeight();
			navbar.css("top",headerHeight);
		}
		else{
			navbar.css("top","0px");
		}
	}  	
	setInterval(placeNavbar, 1);
});
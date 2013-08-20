/**
 * Playdo - Base Javascript
 *
 * The Base Javascript
 *
 * This File contains all generic events for 
 * all devices.
 *
 * @project   Playdo
 * @version   0.1
 * @author    Tom Claus
 * @copyright 2013 Playdo
 * @license   GPL v2
 */

$(function(){

	/**
	 * Open Submenu
	 */
	$("header .submenu-btn").on("click", function(e){
		e.preventDefault();
		var link_id = $(this).attr("href");
		$("header .submenu").not(link_id).hide();
		$(link_id).fadeToggle(100);
	});

	/**
	 * Close Submenu
	 */
	$(".container, .darken").on("click", function(e) {
  		$("header .submenu").hide();
  	});

	/**
	 * Open/Close Sidemenu by button
	 */
	$("header .menu").on("click", function(e){
		e.preventDefault();

		// Hide other buttons
		$("header .submenu").hide();

		// Open or Close the menu
		if(app.is_open)
			app.closeMenu();
		else
			app.openMenu();
	});

	/**
	 * Open/Close Sidemenu by swiping
	 */
	$("body").swipe({
		allowPageScroll: 'vertical',
	  	swipeStatus: function(event, phase, direction, distance, duration, fingerCount) {
	  		// Get the current position of the menu
	  		var current_position = $(".sidemenu").offset().left;
	  		var slidepos = undefined;
	  		var opacity = undefined;

	  		// Set startpoint from the touch start event
	  		if(phase == "start")
	  			app.touch_start_position = event.touches ? event.touches[0].pageX : event.x;
	  		if(phase == "end")
	  			app.touch_start_position = undefined;
	  		
	  		// Check if touch started at the left side of the screen for opening the menu
	  		if(phase == "move" && direction == "right" && app.touch_start_position > 20){
	  			//return false;
	  		}

	  		// Check if we swiped more then 20px.
	  		if(distance > 20){

	  			// Remove this offset form the distance value
	  			distance = distance-20;

	  			// When swiping to the right (opening sidemenu)
		  		if(direction == "right" && !app.is_open){
		  			slidepos = -305+distance;
		  			slidepos = slidepos > 0 ? 0 : slidepos;

		  			opacity = distance == 0 ? 1 : distance/305;
		  			opacity = opacity > 1 ? 1 : opacity;

		  		// When swiping to the left (closing sidemenu)
		  		}else if(direction == "left" && app.is_open){
					slidepos = 0-distance;
		  			slidepos = (slidepos < -305) ? -305 : slidepos;

		  			opacity = 1-(distance/305);
		  			opacity = (opacity < 0) ? 0 : opacity;
		  		}

	  			// As long as we're swiping move the menu...
	  			if(phase == "move"){
	  				$(".sidemenu").css("left", slidepos);
					$(".darken").show().css("opacity", opacity);
	  			}

	  			// When swipe event is done, open or close the menu totally
	  			if(phase == "end"){
	  				if (current_position > -150)
	  					app.openMenu();
	  				else
	  					app.closeMenu();
	  			}
	  		}
	  	}
	});

	// Start App
	app.init();
});


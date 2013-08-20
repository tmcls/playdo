/**
 * Playdo - App Javascript
 *
 * The App Javascript
 *
 * This file contains all logical code for the app.
 *
 * @project   Playdo
 * @version   0.1
 * @author    Tom Claus
 * @copyright 2013 Playdo
 * @license   GPL v2
 */

var app = {
	touch_start_position: undefined,
	is_open: false,

	init: function(){
		app.setActionMenu();
	},

    openMenu: function(){   
        
    	// Set position
        $(".sidemenu").animate({left: 0}, 300);
  		$(".darken").show().animate({opacity: 1}, 300);
		$("header .menu").addClass("open");
		
		// Set status
		app.is_open = true;

		// Set title
		app.setTitle("Google Play Music");
    },

   	closeMenu: function(){

   		// Set position
   		$(".sidemenu").animate({left: -305}, 300);
		$(".darken").animate({opacity: 0}, 300, function(){
			$(this).hide();
		});
		$("header .menu").removeClass("open");

		// Set status
		app.is_open = false;

		// Set title
		app.setActionMenu();
   	},

   	setTitle: function(title){
   		$("header .left h1").text(title).css("display", "inline-block");
   		$("header .left .action, header .left .submenu").hide();
   	},

   	setActionMenu: function(){
   		$("header .left h1").hide();
   		$("header .left .action").css("display", "inline-block");
   	}
};

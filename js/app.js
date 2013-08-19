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

 var app = {
	touch_start_position: undefined,
	is_open: false,

    openMenu: function(){   
        $(".sidemenu").animate({left: 0}, 300);
  		$(".darken").show().animate({opacity: 1}, 300);
		$("header .menu").addClass("open");
		app.is_open = true;
    },

   	closeMenu: function(){
   		$(".sidemenu").animate({left: -305}, 300);
		$(".darken").animate({opacity: 0}, 300, function(){
			$(this).hide();
		});
		$("header .menu").removeClass("open");
		app.is_open = false;
   	}
};
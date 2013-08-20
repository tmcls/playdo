/**
 * Playdo - App Javascript
 *
 * The App Javascript
 *
 * This file contains all logical code for the app
 * and all pages
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
        page.overview();
    },

    // Open Left Menu
    openMenu: function(){   
        
    	// Set position
        $(".sidemenu").animate({left: 0}, 300);
  		$(".darken").show().animate({opacity: 1}, 300);
		$("header .menu").addClass("open");
		
		// Set status
		app.is_open = true;

		// Set title
		$("#overview header .left .title").css("display", "inline-block");
        $("#overview header .left .action, header .left .submenu").hide();

        app.setTransparentHeaderOpacity(1);
    },

    // Close Left Menu
   	closeMenu: function(){

   		// Set position
   		$(".sidemenu").animate({left: -305}, 300);
		$(".darken").animate({opacity: 0}, 300, function(){
			$(this).hide();
		});
		$("header .menu").removeClass("open");

		// Set status
		app.is_open = false;

        // Set Action Menu
        $("#overview header .left .title").hide();
        $("#overview header .left .action").css("display", "inline-block");

        app.setTransparentHeaderOpacity();
   	},

    setTransparentHeaderOpacity: function(value){

        var scrolltop = $(window).scrollTop();

        var new_opacity = (scrolltop/100);
            new_opacity = value ? value : new_opacity;
            new_opacity = new_opacity<0.01 ? 0.01 : new_opacity;
            new_opacity = new_opacity>0.99 ? 0.99 : new_opacity;

        var currentColor = $('header.transparent').css('background-color');
        var lastComma = currentColor.lastIndexOf(',');
        var newColor = currentColor.slice(0, lastComma + 1) + new_opacity + ")";
           
        $("header.transparent").css('background-color', newColor);
    },

    getTransparentHeaderOpacity: function(){
        var currentColor = $('header.transparent').css('background-color');
        var lastComma = currentColor.lastIndexOf(',');
        return parseFloat(currentColor.slice(lastComma).replace(",","").replace(")",""));
    }
};
/**
 * Playdo - Pages Javascript
 *
 * The App Javascript
 *
 * This file contains all the pages for the app.
 *
 * @project   Playdo
 * @version   0.1
 * @author    Tom Claus
 * @copyright 2013 Playdo
 * @license   GPL v2
 */

var page = {
	
    overview: function(){   
    	$(".page").hide();

   		$("#overview").show();
   		$("#overview header .left .title").hide();
        $("#overview header .left .action").css("display", "inline-block");

		$("#overview a.block").on("click", function(e){
		    e.preventDefault();
		    page.detailView();
		});
    },

   	detailView: function(){
   		$(".page").hide();

   		$("#detail").show();
   		$("#detail header .title");

		$("#detail .back").on("click", function(e){
			e.preventDefault();
			page.overview();
		});
   	}
};

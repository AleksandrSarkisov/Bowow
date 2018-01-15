$(document).ready(function(){

	var width = $(".container").width();
	$("#block_right").width(width - $("#block_left").width());

	if(width < 540){
		$("#menu-icon").toggle(
			function(){
				$("#menu").show("blind", {direction: "horizontal"}, 1000);
			},
			function(){
				$("#menu").hide("blind", {direction: "horizontal"}, 500);
			}
		);
	}

	if(width < 500){
		$("#front_card").children().css("margin-left","10px");
	}
});
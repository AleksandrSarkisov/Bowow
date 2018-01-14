$(document).ready(function(){

	var width = $(window).width();
	var width_block_left = $("#block_left").width();

	if(width < 540){
		var width_block_left = $("#block_left").width();
		$("#block_right").css("width", width - width_block_left);
		
		$("#menu-icon").toggle(
			function(){
				$("#menu").show("blind", {direction: "horizontal"}, 1000);
				var width_block_left = $("#menu").width();
				$("#block_right").animate({"width": width - width_block_left});
			},
			function(){
				$("#menu").hide("blind", {direction: "horizontal"}, 500);
				$("#block_right").animate({"width": width - width_block_left}, 340);
			});
	}
	else{
		$("#block_right").css("width", width - width_block_left);
	}

/*
	var width = $(window).width();
	var width_body = $("body").width();
	var width_block_left = $("#block_left").width();

	if(width < 540){

		width_block_left = $("#block_left").width();
		$("#block_right").css("width", width - width_block_left);

/*		$(window).resize(function(){
			width = $(window).width();
			width_block_left = $("#block_left").width();
			$("#block_right").css("width", width - width_block_left);
		});
		
		console.log(width_block_left);
		$("#menu-icon").toggle(
		function(){
			$("#menu").show("blind", {direction: "horizontal"}, 1000);
			width_block_left = $("#block_left").width();
			$("#block_right").animate({"width": width - width_block_left}, 1000);
			console.log(width_block_left);
		},
		function(){
			$("#menu").hide("blind", {direction: "horizontal"}, 500);
			width_block_left = $("#menu").width();
			$("#block_right").animate({"width": width - width_block_left}, 500);
			console.log(width_block_left);
		});
	}
	else{
		$("#menu").show();		
		$("#block_left").css("width", width_block_left);
		$("#block_right").css("width", width_body - width_block_left);
	}*/
});
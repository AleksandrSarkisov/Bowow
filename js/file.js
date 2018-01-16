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

	function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
      }

      return null; // специальная клавиша
    }

	$("#cancel").click(function(){
		$("#num_card input").val("");
		$("#owner_card input").val("");
		$("#back_card input").val("");
	});

	$("#num_card input, #cvc").keypress(function(e){
		if (e.keyCode == 46 || e.keyCode == 8 || (e.keyCode >= 35 && e.keyCode <= 39) || (e.keyCode == 65 && e.ctrlKey == true)){
            return;
        }
        else{
        	if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 )){
                e.preventDefault();
            }
        }

        console.log($(this).val().lenght);
    });
	//input.value.replace(/\D/g,'').substr(0,4)
});
$(document).ready(function(){

	/* Для адаптивности */
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

	/* Валидация */

    /* Если не соответствуетФ количество символов в поле */

	$("#cancel").click(function(){
		$("#num_card input").val("");
		$("#owner_card input").val("");
		$("#back_card input").val("");
	});

	$("#cvc").focusout(function(){
		if($(this).val().length != 3){
			$(this).addClass("er");
		}
		else{
			$(this).removeClass("er");
		}
	});

	$("#num_card input").focusout(function(){
		if($(this).val().length != 4){
			$(this).addClass("er");
		}
		else{
			$(this).removeClass("er");
		}
	});

	$("#owner_card input").focusout(function(){
		if($(this).val().length < 4){
			$(this).addClass("er");
		}
		else{
			$(this).removeClass("er");
		}
	});

	/* Только цифры */
	$("#num_card input, #cvc").keypress(function(e){
		var chr = getChar(e);
		e.which = e.which || e.keyCode;

		if (e.which == 8 || e.which == 9 || e.which == 13 || e.which == 46 || 
		(e.which > 34 && e.which < 38) || e.which == 39 || (e.which > 47 && e.which < 58) || 
		(e.which > 95 && e.which < 105) || (e.ctrlKey === true && e.which == 65) || 
		(e.ctrlKey === true && e.which == 67) && e.shiftKey === false){
			if(chr < '0' || chr > '9'){
				return false;
			}
			return;
		}
		else{
			e.preventDefault();
		}
	});

	/* Только латинские буквы */
	$("#owner_card input").keypress(function(e){
		var chr = getChar(e);
		e.which = e.which || e.keyCode;
		
		if (e.which == 8 || e.which == 9 || e.which == 13 || e.which == 46 || e.which == 32 || 
		(e.which > 34 && e.which < 38) || e.which == 39 || (e.which > 64 && e.which < 91) || 
		(e.ctrlKey === true && e.which == 65) || (e.ctrlKey === true && e.which == 67)){
			if(chr < 'A' || chr > 'Z'){
				return false;
			}
			return;
		}
		else{
			e.preventDefault();
		}
	});

	// event.type должен быть keypress
	function getChar(event) {
	  if (event.which == null) { // IE
	    if (event.keyCode < 32) return null; // спец. символ
	    return String.fromCharCode(event.keyCode)
	  }

	  if (event.which != 0 && event.charCode != 0) { // все кроме IE
	    if (event.which < 32) return null; // спец. символ
	    return String.fromCharCode(event.which); // остальные
	  }

	  return null; // спец. символ
	}
});
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

	/* Кнопки Оплатить и Отмена */

	$("#pay").click(function(){
		/* Проверка количества символов */
		if($("#cvc").val().length != 3){
			$("#cvc").addClass("er");
		}
		else{
			$("#cvc").removeClass("er");
		}

		$("#num_card input").each(function(){
			if($(this).val().length != 4){
				$(this).addClass("er");
			}
			else{
				$(this).removeClass("er");
			}
		});

		if($("#owner_card input").val().length < 4){
			$("#owner_card input").addClass("er");
		}
		else{
			$("#owner_card input").removeClass("er");
		}
	});

	$("#cancel").click(function(){
		$("#num_card input").val("");
		$("#owner_card input").val("");
		$("#back_card input").val("");
		$("#num_card input").removeClass("er");
		$("#owner_card input").removeClass("er");
		$("#back_card input").removeClass("er");		
	});
    
	$("#num_card input, #cvc, #owner_card input").focusin(function(){
		$(this).removeClass("er");
	});

	
	/* Ввод только цифр */
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

	/* Ввод только латинских букв */
	$("#owner_card input").keypress(function(e){
		var chr = getChar(e);
		e.which = e.which || e.keyCode;
		
		if (e.which == 8 || e.which == 9 || e.which == 13 || e.which == 46 || e.which == 32 || 
		(e.which > 34 && e.which < 38) || e.which == 39 || (e.which > 64 && e.which < 91) || 
		(e.ctrlKey === true && e.which == 65) || (e.ctrlKey === true && e.which == 67)){
			return;
		}
		else{
			if (chr < 'a' || chr > 'z'){
				e.preventDefault();
			}
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

	/* Выбираемые значения */ 

	var month = [];
	var year = [];
	for (var i = 0; i < 12; i++){
		month[i] = 01 + i;
		if(month[i] < 10){
			month[i] = '0' + month[i];
		}
		else{
			month[i] = '' + month[i];
		}
		$("#month div ul").append("<li class='options' data-value="+month[i]+"><span>"+month[i]+"</span></li><hr>");
	
	}
	for (var i = 0; i < 7; i++){
		year[i] = 2018 + i;
		$("#year div ul").append("<li class='options' data-value="+year[i]+"><span>"+year[i]+"</span></li><hr>");
	}

	/* Стилизация выпадающих списков */

	$("#month").click(function(){
		if($("#month div").attr("class") == "hide"){
			$("#month div").removeClass("hide").addClass("show");
		}
		else{
			$("#month div").removeClass("show").addClass("hide");
		}
	});

	$("#year").click(function(){
		if($("#year div").attr("class") == "hide"){
			$("#year div").removeClass("hide").addClass("show");
		}
		else{
			$("#year div").removeClass("show").addClass("hide");
		}
	});

	/* Установка выбранное значение */

	$("#month ul li").click(function(){
		var val = $(this).text();
		$("#month #res").text(val);
		$("#month #res").attr("data-value", val);

	});

	$("#year ul li").click(function(){
		var val = $(this).text();
		$("#year #res").text(val);
		$("#year #res").attr("data-value", val);
	});

	$("#num_card input:eq(0)").val(5246).attr("value", 5246);
	$("#num_card input:eq(1)").val(2846).attr("value", 2846);
	$("#num_card input:eq(2)").val(3465).attr("value", 3465);
	$("#num_card input:eq(3)").val(7777).attr("value", 7777);
	$("#month #res").append(month[7]);
	$("#month #res").attr("data-value", month[7]);
	$("#year #res").append(year[4]);
	$("#year #res").attr("data-value", year[4]);
	
});
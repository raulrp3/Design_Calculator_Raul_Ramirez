var divPn = "",firstNumber = 0,secondNumber = 0,operation = "",isDecimal = false;;
window.onload = function(){
	var screen = document.getElementById("screen");
	var divAdvanced = document.getElementById("pnAdvanced");
	//var divConversion = document.getElementById("pnConversion");
	var normal = document.getElementById("normal");
	var advanced = document.getElementById("advanced");
	//var conversion = document.getElementById("conversion");
	var numbers = document.getElementById("buttons").getElementsByTagName("button");
	var operations = document.getElementById("operations").getElementsByTagName("button");
	var same = document.getElementById("same");
	divAdvanced.style.display = "none";	
	//divConversion.style.display = "none";
	normal.style.visibility = "hidden";
	normal.addEventListener("click",function(){showNormal()});
	advanced.addEventListener("click",function(){showAdvanced(divAdvanced,normal)});
	//conversion.addEventListener("click",function(){showConversion(divConversion,normal)});
	for (var i = 0;i < numbers.length;i++){
		numbers[i].addEventListener("click",function(){showNumber(screen)});
	}
	for (var i = 0;i < operations.length;i++){
		operations[i].addEventListener("click",function(){showOperation(screen)});
	}
	same.addEventListener("click",function(){calculate(screen)});
}
function showNormal(){
	document.getElementById(divPn).style.display = "none";
	document.getElementById(event.target.id).style.visibility = "hidden";
}
function showAdvanced(divAdvanced,normal){
	if (divAdvanced.style.display == "none"){
		divAdvanced.style.display = "block";
		normal.style.visibility = "visible";
		divPn = divAdvanced.id;
	}
}
/*function showConversion(divConversion,normal){
	if (divConversion.style.display == "none"){
		divConversion.style.display = "block";
		normal.style.visibility = "visible";
		divPn = divConversion.id;
	}
}*/
function showNumber(screen){
	screen.value += event.target.name;
}
function showOperation(screen){
	switch (event.target.name){
		case "AC":{
			firstNumber = 0;
			secondNumber = 0;
			operation = "";
			screen.value = "";
		}
		break;
		case ".":{
			screen.value += event.target.name;
			isDecimal = true;
		}
		break;
		default:{
			firstNumber = screen.value;
			operation = event.target.name;
			screen.value = "";
		}
		break;
	}
}
function calculate(screen){
	secondNumber = screen.value;
	var result = 0;
	if (isDecimal){
		firstNumber = parseFloat(firstNumber);
		secondNumber = parseFloat(secondNumber);
	}else{
		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);
	}
	switch (operation){
		case "+":{
			result = firstNumber + secondNumber;
		}
		break;
		case "-":{
			result = firstNumber - secondNumber;
		}
		break;
		case "*":{
			result = firstNumber * secondNumber;
		}
		break;
		case "/":{
			result = firstNumber / secondNumber;
		}
		break;
		case "sqrt":{
			/*
			firstNumber es el número al que queremos realiza la raíz.
			secondNumber es el exponen te la raíz.
			*/
			result = Math.pow(firstNumber, (1 / secondNumber));
		}
		break;
		case "pot":{
			result = Math.pow(firstNumber,secondNumber);
		}
	}
	screen.value = result;
}
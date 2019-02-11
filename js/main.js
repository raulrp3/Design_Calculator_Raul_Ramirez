var firstNumber = 0,secondNumber = 0,operation = "",isDecimal = false;;
window.onload = function(){
	var screen = document.getElementById("screen");
	var divAdvanced = document.getElementById("pnAdvanced");
	var divMonetary = document.getElementById("pnMonetary");
	var divNumeric = document.getElementById("pnNumeric")
	var divNumericButtons = document.getElementById("pnNumericButtons")
	var normal = document.getElementById("normal");
	var advanced = document.getElementById("advanced");
	var conversionMonetary = document.getElementById("monetary");
	var conversionNumerical = document.getElementById("numerical");
	var numbers = document.getElementById("buttons").getElementsByTagName("button");
	var operations = document.getElementById("operations").getElementsByTagName("button");
	var same = document.getElementById("same");
	divAdvanced.style.display = "none";
	divMonetary.style.display = "none";
	divNumeric.style.display = "none";
	divNumericButtons.style.display = "none";
	normal.style.visibility = "hidden";
	normal.addEventListener("click",function(){showNormal(divAdvanced,divNumeric,divNumericButtons,divMonetary)});
	advanced.addEventListener("click",function(){showAdvanced(divAdvanced,normal)});
	conversionMonetary.addEventListener("click",function(){showMonetary(divMonetary,normal)});
	conversionNumerical.addEventListener("click",function(){showNumerical(divNumeric,divNumericButtons,normal)});
	for (var i = 0;i < numbers.length;i++){
		numbers[i].addEventListener("click",function(){showNumber(screen)});
	}
	for (var i = 0;i < operations.length;i++){
		operations[i].addEventListener("click",function(){showOperation(screen)});
	}
	same.addEventListener("click",function(){calculate(screen)});
}
function showNormal(divAdvanced,divNumeric,divNumericButtons,divMonetary){
	divAdvanced.style.display = "none";
	divNumeric.style.display = "none";
	divNumericButtons.style.display = "none";
	divMonetary.style.display = "none";
	document.getElementById(event.target.id).style.visibility = "hidden";
}
function showAdvanced(divAdvanced,normal){
	if (divAdvanced.style.display == "none"){
		divAdvanced.style.display = "block";
		normal.style.visibility = "visible";
	}
}
function showMonetary(divMonetary,normal){
	if (divMonetary.style.display == "none"){
		divMonetary.style.display = "block";
		normal.style.visibility = "visible";
	}
}
function showNumerical(divNumeric,divNumericButtons,normal){
	if (divNumeric.style.display == "none" && divNumericButtons.style.display == "none"){
		divNumeric.style.display = "block";
		divNumericButtons.style.display = "block";
		normal.style.visibility = "visible";
		isConversion = true;
	}
}
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
			secondNumber es el exponente de la raíz.
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
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var result = add(number1,number2);
alert(result);

var bmi = function(height, weight){
	return weight/(height^2);
};

var height = parseFloat(prompt("Enter your Height (in M): "));
var weight = parseFloat(prompt("Enter your Weight (in Kg): "));

alert(bmi(height,weight));

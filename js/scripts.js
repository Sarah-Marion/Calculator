// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
//
// var number1 = parseFloat(prompt("Enter a number"));
// var number2 = parseFloat(prompt("Enter another number"));
// var result = add(number1,number2);
// alert(result);
//
// var bmi = function(height, weight){
// 	return weight/(height^2);
// };
//
// var height = parseFloat(prompt("Enter your Height (in M): "));
// var weight = parseFloat(prompt("Enter your Weight (in Kg): "));
//
// alert(bmi(height,weight));

//user interface(front-end logic):
$(document).ready(function() {
  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };
  // $("form#add").submit(function(event){
  //   event.preventDefault();
  //   var number1 = parseFloat($("#add1").val());
  //   var number2 = parseFloat($("#add2").val());
  //   alert(add(number1, number2));
  // });

  //The following should give the user answers to questions with decimal points <-- ! -->
  $(".add").on('click',function(event){
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());
    var outPut = add(number1,number2);
    $("#output").text(outPut);
  });
  $(".subtract").on('click',function(event){
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());
    var outPut = subtract(number1,number2);
    $("#output").text(outPut);
  });
  $(".multiply").on('click',function(event){
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());
    var outPut = multiply(number1,number2);
    $("#output").text(outPut);
  });
  $(".divide").on('click',function(event){
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());
    var outPut = divide(number1,number2);
    $("#output").text(outPut);
  });

});

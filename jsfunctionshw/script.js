function squareNumber() {
   var num = document.getElementById("square-input").value;
   numa =  Math.pow(num, 2);
   console.log("The " + "result " + "of " + "squaring " + "the " + "number " + num + " is " + numa)
}

function halfNumber() {
   var num1 = document.getElementById("half-input").value;
   numb =  num1 / 2;
   console.log("Half " + "of " + num1 + " is " + numb);
}

function percentOf() {
	var per1 = document.getElementById("percent1-input").value;
	var per2 = document.getElementById("percent2-input").value;
	var numc = per1 / per2 * 100;
	console.log(per1 + " is " + numc + "% " + "of " + per2);
}

function areaOfCircle() {
	var num4 = document.getElementById("area-input").value;
	var num5 = Math.pow(num4, 2);
	var area = 3.14 * num5;
	console.log("The " + "area " + "for " + "a " + "circle " + "with " + "a " + "radius " + "of " + num4 + " is " + area);
}
function squareNumber(num) {
	if (number == "") {
		alert("Please Insert a number");
	} else {
		number = parseFloat(number);
		writeToSolution("The result of squaring the number " + number + " is " + (+(number * number).toFixed(2)));
	}
}

function halfNumber(number) {
	if (number == "") {
		alert("Please Insert a number");
	} else {
		number = parseFloat(number);
		writeToSolution("Half of " + number + " is " + (+(number / 2).toFixed(2)));
	}
}

function percentOf(numberOne, numberTwo) {
	if (numberOne == "" || numberTwo == "") {
		alert("Please Insert a number");
	} else {
		numberOne = parseFloat(numberOne);
		numberTwo = parseFloat(numberTwo);
		writeToSolution(numberOne + " is " + (+((numberOne / numberTwo) * 100).toFixed(2)) + "% of " + numberTwo);
	}
}

function areaOfCircle(radius) {
	if (radius == "") {
		alert("Please Insert a number");
	} else {
		radius = parseFloat(radius);
		writeToSolution("The area for a circle with radius " + radius + " is " + (+(radius * radius * 3.1415926).toFixed(2)));
	}
}

function writeToSolution(msg) {
	document.getElementById("solution").innerHTML = msg;
}

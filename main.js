// This Function Is Used To Show Information About Console And How To Open Console. It Is Also used for showing the hide additional information button.
function showp(){
    document.getElementById("info_console").style.display = "inline-block";
    document.getElementById("hp").style.display = "inline-block";
}
// This Function Is Used To Hide Information About Console And How To Open Console. It Is Also used for Hiding the hide additional information button.
function hidep(){
    document.getElementById("info_console").style.display = "none";
    document.getElementById("hp").style.display = "none";
}

// Here we will make use of the predefined function for concatenation of two string variables and showing it in console.
var first_name = "Chris ";
console.log(first_name);

var last_name = "Hemsworth";
console.log(last_name);

var full_name = first_name.concat(last_name);
console.log(full_name);

// Here We Will Use Various Opreations On Variable num1 and num2 and show them in console
var num1 = 10;
console.log(num1);

var num2 = 8;
console.log(num2);

// first we will do addition for addition we use the + symbol to add variables
var addition = num1 + num2;
console.log(addition);

// second we will do subtraction for subtraction we use - symbol to subtract variables
var subtraction = num1 - num2;
console.log(subtraction);

// third we will do division for division we use / symbol to divide variables
var division = num1 / num2;
console.log(division);

// last we will do multiplication for multiplication we use * symbol to multily variables
var multiplication = num1 * num2;
console.log(multiplication);








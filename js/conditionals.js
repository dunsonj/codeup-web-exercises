"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var colors = ['red', 'blue', 'yellow,', 'purple', 'green'];
//
// function analyseColor (colors) {
//
//     if (colors === "blue") {
//         return "Blue is the color of the sky"; }
//     else if (colors === "red"){
//         return "Red is the color of Strawberries"; }
//     else  {
//         return ("I do not know anything about " + colors);
//     }
// }
// var colors = ["red" , "blue" , "yellow", "purple", "green"];
//
//
// console.log(analyseColor("yellow"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */



// console.log(analyseColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// switch (colors) {
//
//     case "blue" :
//         alert ("Blue is the color of the sky")
//         break;
//     case "red":
//         alert ("Red is the color of Strawberries");
//         break;
//     default:
//         alert ("I do not know anything about " + colors);
//         break;
// }
//
//


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colors = ['red', 'blue', 'yellow,', 'purple', 'green'];
//
// function analyseColor (colors) {
//
//     if (colors === "blue") {
//          alert("Blue is the color of the sky"); }
//     else if (colors === "red"){
//         alert("Red is the color of Strawberries"); }
//     else  {
//         alert( "I do not know anything about " + colors);
//     }
// }
//
//
// var colors = prompt("Choose a color?");
// console.log(colors);
// console.log(analyseColor(colors));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//var random = Math.floor(Math.random() * 5)
// function calculateTotal (bill, random) {
//
//
//     if (random === 0) {
//         alert("Sorry, you do not get a discount");
//         return bill;
//     } else if (random === 1) {
//         alert("Congratulations you have a 10% discount");
//         var discountedAmount = Number(bill * 0.10);
//         var discountedTotal = Number(bill - discountedAmount);
//
//     } else if (random === 2) {
//         alert("Congratulations you have a 25% discount");
//         var discountedAmount = Number(bill * 0.25);
//         var discountedTotal = Number(bill - discountedAmount);
//
//     } else if (random === 3) {
//         alert("Congratulations you have a 35% discount");
//         var discountedAmount = Number(bill * 0.35);
//         var discountedTotal = Number(bill - discountedAmount);
//
//     } else if (random === 4) {
//         alert("Congratulations you have a 50% discount");
//         var discountedAmount = Number(bill * 0.50);
//         var discountedTotal = Number(bill - discountedAmount);
//     } else if (random === 5) {
//         alert("Congratulations everything is FREE!");
//         return 0;
//     }
//     return discountedTotal;
// }

// console.log(random)
// console.log(calculateTotal(100 , random));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
//
// var bill = prompt("how much is your bill?");
// console.log(bill);
//
// var bill = prompt("how much is your bill?");
// console.log(bill);
// var random = Math.floor(Math.random() * 6);
//
// function calculateTotal (bill, random) {
//
//
//     if (random === 0) {
//         alert("Sorry, you do not get a discount")
//         alert("Your lucky number was  " + random + ". Your price before the discount is $ " + bill + ". Your total price with the discount is $" + discountedTotal );
//         return bill;
//     } else if (random === 1) {
//         var discountedAmount = Number(bill * 0.10);
//         var discountedTotal = Number(bill - discountedAmount);
//
//         alert("Congratulations your lucky number is 1, you have received a 10% discount");
//         alert("Your lucky number was  " + random + ". Your price before the discount is $ " + bill + ". Your total price with the discount is $" + discountedTotal );
//         // var discountedAmount = Number(bill * 0.10);
//         // var discountedTotal = Number(bill - discountedAmount);
//
//     } else if (random === 2) {
//         var discountedAmount = Number(bill * 0.25);
//         var discountedTotal = Number(bill - discountedAmount);
//
//         alert("Congratulations your lucky number is 2, you have received a 25% discount");
//         alert("Your lucky number was  " + random + ". Your price before the discount is $ " + bill + ". Your total price with the discount is $" + discountedTotal );
//         // var discountedAmount = Number(bill * 0.25);
//         // var discountedTotal = Number(bill - discountedAmount);
//
//     } else if (random === 3) {
//         var discountedAmount = Number(bill * 0.35);
//         var discountedTotal = Number(bill - discountedAmount);
//
//         alert("Congratulations your lucky number is 3, you have received a 35% discount")
//         alert("Your lucky number was  " + random + ". Your price before the discount is $ " + bill + ". Your total price with the discount is $" + discountedTotal );
//         // var discountedAmount = Number(bill * 0.35);
//         // var discountedTotal = Number(bill - discountedAmount);
//
//     } else if (random === 4) {
//         var discountedAmount = Number(bill * 0.50);
//         var discountedTotal = Number(bill - discountedAmount);
//
//         alert("Congratulations your lucky number is 4, you have received a 50% discount")
//         alert("Your lucky number was  " + random + ". Your price before the discount is $ " + bill + ". Your total price with the discount is $" + discountedTotal );
//         // var discountedAmount = Number(bill * 0.50);
//         // var discountedTotal = Number(bill - discountedAmount);
//     } else if (random === 5) {
//
//         alert("Congratulations your lucky number is 5, you are our lucky winner, your order is FREE!");
//         alert("Your lucky number was  " + random + ". Your price before the discount is $ " + bill + ". Your total price with the discount is $" + discountedTotal );
//         return 0;
//         }
//     else if (random ===6) {
//         alert ("This is the inclusive number")
//         alert("Your lucky number was " + random + "Your price before the discount is: " + bill + "Your total price with the discount is " + discountedTotal );}
//     return discountedTotal;
//
// }
//
//
// console.log(random)
// console.log(calculateTotal(bill, random));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


// var confirmNumber = confirm("Would you like to enter a number?");
// var number = prompt("What is the number?");
// console.log(number);
//
// if (number > 0) {
//     alert('The number ' + number + ' is positive')
// } else {
//     alert('The number ' + number + ' is negative')
//     alert('Please refresh the page to enter a number')
// }
//
//
// var totalPlus = Number(number) + 100 ;
// console.log(totalPlus);
//
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

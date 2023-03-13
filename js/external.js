//Create two new HTML files, inline_js, and external_js.
//     Create a folder named js in the same location as the HTML files you created.
//     Inside the js folder, create a file named external.js.
//     Use the sample code from this lesson to fill in the HTML files with the appropriate code.
//     Add a console.log message in inline_js.html that says "Hello from inline JavaScript".
//     Add a console.log message in external.js that says "Hello from external JavaScript".
//     Open the HTML files and view the JavaScript Console to make sure you see your messages.
//console.log('Hello from external JavaScript');

//alert("Welcome to my Website!");

//var favColor = prompt("What is your favorite color?");
//console.log(favColor);

//alert("Great, " + favColor + " is my favorite color too!!");

//-------------------------------------------------------------------------------------------------------


//Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

//var littleMermaid = 3
//var brotherBear = 5
//var hercules = 1
//var dailyPrice = 3
//var totalDays = ("littleMermaid" + "brotherBear" + "hercules");
//var movieTotal = ("totalDays")*(dailyPrice);

//console.log(movieTotal);

//var littlemermaid = Number(prompt("How long do you want to rent Little Mermaid?"));
//console.log(littlemermaid);
//var brotherbear = Number(prompt("How long do you want to rent Brother Bear?"));
//console.log(brotherbear);
//var hercules = Number(prompt("How long do you want to rent Hercules?"));
//console.log(hercules);

//var dailyPrice = Number(prompt("What is the fee per day, to rent a movie?"));
//console.log(dailyPrice);

//var totalCost = (littlemermaid + brotherbear + hercules) * dailyPrice;
//console.log(totalCost);

//alert('Your total Cost is ' + totalCost);


//------------------------------------------------------------------------------------------------------

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon

/*
var Google = 400
var Amazon = 380
var Facebook = 350

var timeAtGoogle = 6
var timeAtAmazon = 4
var timeAtFacebook = 10

var GooglePayment = (Google * timeAtGoogle);
var AmazonPayment = (Amazon * timeAtAmazon);
var FacebookPayment = (Facebook * timeAtFacebook);

var totalpayment = (GooglePayment + AmazonPayment + FacebookPayment);

alert ("Your total weekly pay is" + totalpayment);

 */

/*
var Google = Number(prompt("What is Google's hourly wage?"));
console.log(Google);

var Amazon = Number(prompt("What is Amazon's hourly wage?"));
console.log(Amazon);

var Facebook = Number(prompt("What is Facebook's hourly wage?"));
console.log(Facebook);

var timeAtGoogle = Number(prompt("How many hours did you work at Google?"));
console.log(timeAtGoogle);

var timeAtAmazon = Number(prompt("How many hour's did you work at Amazon"));
console.log(timeAtAmazon);

var timeAtFacebook = Number(prompt("How many hour's did you work at Facebook"));
console.log(timeAtFacebook);

var GooglePayment = (Google * timeAtGoogle);
var AmazonPayment = (Amazon * timeAtAmazon);
var FacebookPayment = (Facebook * timeAtFacebook);

var totalpayment = (GooglePayment + AmazonPayment + FacebookPayment);

alert ("Your total weekly pay is " + totalpayment);

*/

//-----------------------------------------------------------------------------------------
//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

// If [first boolean expression == true] AND [the second boolean expression results in true] Then store [true] as the value to `canEnroll`.

// If {either first or second boolean expression results in false} THEN store [false] as the value to `canEnroll'`

//conditions: isClassFull (T/f) && noConflict? (T/F)

// q: can the student enroll? T/F -> boolean

/*
var canEnroll = true // false
var isClassFull = true;
var conflictExists = true;
var canEnroll =  (isClassFull == false && conflictExists == false);
var canNotEnroll =  (isClassFull == true && conflictExists == false);
var cantEnroll =  (isClassFull == false && conflictExists == true);
var canEnroll = !isClassFull && !conflictExists;


var isClassFull = prompt("Is the class full?");
console.log(isClassFull);

var conflictExists = prompt("Is there a conflict with your current schedule?");
console.log(conflictExists);

If (canEnroll); {
    var canEnroll =  (isClassFull == false && conflictExists == false);
canEnroll = (alert ("Congratulations, you are now enrolled in the class"));}

If (conflictExists); {
    var classSize = Number(prompt("What is the maximum amount of student allowed in class?"));
    console.log(classSize);
    var studentsCurrentlyEnrolled = Number(prompt("How many students are currently enrolled?"));}
    if ( studentsCurrentlyEnrolled < classSize) { alert ("Congratulations, you are now enrolled in the class");}
    else { alert("Sorry, this class is full, you are not enrolled");}

var openSpace = prompt("Does the class have space?");
console.log(openSpace);
var conflict = prompt("Does this class conflict your current schedule?");
console.log(conflict)

var canEnroll =  (isClassFull == false && conflictExists == false);
var canNotEnroll =  (isClassFull == true && conflictExists == false);
var cantEnroll =  (isClassFull == false && conflictExists == true);
var canEnroll = !isClassFull && !conflictExists;
var cannotEnroll = (!classFull && classSpace);
var canEnroll = (classSpace && classConflict);

*/





//--------------------------------------------------------------------------------------------------------


/*
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */


// var hasPremium = true;
// var cartSize = 6;
// var offerValid = true;
// var canHaveDiscount = offerValid && (cartSize > 2 || hasPremium);
// premiumMember = true;
// offerValid = true;
// moreThanTwo => 2 && offerValid == true;

//------------------------------------------------------------------------------------------------------
/*
 Use the following code to follow the instructions below:

 var username = 'codeup';
 var password = 'notastrongpassword';
 Create a variable that holds a boolean value for each of the following conditions:
 the password must be at least 5 characters
*/

/*
var username = 'codeup';
var password = 'notastrongpassword';
var minFivePassword = password.length >= 5;
var password.length => 5;
// the password must not include the username
// var usernameNotInPassword = password.indexOf(username) === -1;

var noUserName = !password.includes(username);
// the username must be no more than 20 characters
var userNameNotaParagraph = usernamelength <= 20;

var username.length <= 20;
// neither the username or password can start or end with whitespace
var whitespace = username.trim() && password.trim();
var noWhitespace = username.trim() === username && password.trim() === password;
username.trim();
password.trim();
console.log(password);
console.log(username);
console.log(password.length);

 */

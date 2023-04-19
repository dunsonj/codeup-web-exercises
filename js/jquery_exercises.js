"use strict";

// $(function() {
//
//     alert( 'The DOM has finished loading!' );
// });


// //id Selectors
// var classWork = $('#example').html()
// console.log(classWork);
// alert(classWork);
//
// var partTwo = $('#exampleTwo').html()
// console.log(partTwo);
// alert(partTwo);
//
//
// //class selectors
// $('.codeup').css('border' , '1px solid red' )
// document.querySelector('.codeup')
//
// //element selectors
// $('li').css('font-size', '20px')
// $('h1').css('background-color', "yellow")
// $('p').css('background-color', "yellow")
// $('li').css('background-color', "yellow")
//
// var sho= $('h1').html()
// alert(sho)
//
// //multiple selectors
// $('h1 , p , li').css('background-color', "yellow")

//Mouse Events Excercise


//Changing the background color when h1 is clicked
$('h1').click(function (){
    $('h1').css('background-color', "purple")
});
//Making all paragraphs 18px big once double clicked
$('p').dblclick(function (){
    $('p').css('font-size', '18px')
});
//Making the li to red when hovered over and reset back to black when it is not
$('li').hover(
    function() {
        $('li').css('color', 'red');
    },
    function() {
        $('li').css('color', 'black');
    }
);



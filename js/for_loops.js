
'use strict';
function showMultiplicationTable(input)
{
    // var number = 7;

//creating a multiplication table
    for (let i = 1; i <= 10; i++) {

        // multiply i with number
        var result = i * input;

        // display the result
        console.log(`${input} * ${i} = ${result}`);
    }
}


console.log(showMultiplicationTable(7));
//-------------------------------------------------------------------------------

//
// var random = Math.floor((Math.random() * 200));


for (var i = 0; i < 10; i++) {

    if (i % 2 !== 0) {
        console.log(i + " is an odd number" )}
    else if (i % 2 == 0) {
        console.log(i + " is an even number" )}
    var random = Math.floor((Math.random() * (200-20) ) + 20);
    console.log(i +random)
}
//-----------------------------------------------------------------------------

for (var i = 0; i < 10; i++) {
    var str = ""

    for (var j = 0 ; j < i ; j++ )
    {
        str =str + i ;
    }
    console.log(str)

}

//-------------------------------------------------------------------------

for (var i = 100; 1>=5 ; i-=5) {
    console.log(i)
}

//--------------------------------------------------------------------------
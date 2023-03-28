// var input = prompt("Pick an odd number between 1 and 50");
// console.log(input);

// for (var i = 1; i < 50; i++) {
//
//     if ((i % 2) != 0) {
//         continue
//     }
//     else{
//         if ( i === input )
//         prompt("Yikes! Skipping number:" + i);
//         break
//     }
// }
var numberToStopAt = prompt("Pick an odd number between 1 and 50");
console.log(numberToStopAt)

for (var i = 1; i < 50; i++) {
    if ((i % 2) == 0) {
       continue
  } else
    if (i == numberToStopAt) {
        console.log("Yikes! Skipping number: " + i);
       continue;

    }
    console.log(i)
}


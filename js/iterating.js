(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    // var names = ['Jakira', 'Tavis', 'Nora', 'Nova'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

     // var names = ['Jakira', 'Tavis', 'Nora', 'Nova'];
    // for( var i = 0; i < names.length ; i++) {
    //     console.log(names[i]) ;
    // }

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for( var i = 0; i < names.length ; i++) {
    //     console.log('The members of my household are called '+names[i]) ;
    // }
    //

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
// names.forEach(function(name)
//     {
//         console.log("Here are our names: " + name + ".");
//     });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var cities = ['New York', 'San Diego', 'Austin'];

    function first(cities) {
    return cities[0];
    }
    console.log(first(cities[0]));

    function third(cities) {
        return cities[2];
    }
    console.log(third(cities[2]));

//
//     console.log('There are ' + cities.length + ' cities in this list.');
//     console.log('The first city is: ' + cities[0]);
//     console.log('The second city is: ' + cities[1]);
//     console.log('The third city is: ' + cities[2]);
//
//
//
//



})();
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // planetsString.split(",");
    // console.log(planetsString.split(","));
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var listPlanets = ['Mercury' , 'Venus' ,'Earth' , 'Mars' , 'Jupiter' , 'Saturn' , 'Uranus' ,'Neptune'];
    // listPlanets = planets.join('<br>');
    console.log(listPlanets.join(' <br> '));
    // listPlanets. createElement('ul'). ;
//------------------------------------------------------------------------------------
//Bonus
    var cities = ('New York' , 'San Diego' , 'Austin' , 'Miami') ;


    console.log( cities. createElement('ul'));


    // console.log(listPlanets.join(' <ul></ul> '));





})();
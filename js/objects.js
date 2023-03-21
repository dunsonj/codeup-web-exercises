(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    person.firstName = "Jakira";
    person.lastName = "Dunson";

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = "Hello from ";
    console.log(person.sayHello + person.firstName + " " + person.lastName + "!");

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     *
     *
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function heb(shopObj) {
        for(var i = 0; i < shopObj.length ; i++){

        if (shopObj[i].amount >= 200) {
            let newTotal = shopObj[i].amount - shopObj[i].amount * 0.12;

            console.log( shopObj[i].name + ' your total is: ' + shopObj[i].amount + ". You You get a 12% discount for your purchase. which is:" + shopObj[i].amount * 0.12, "Your new total is: $ " + newTotal) }
        else
            {
                console.log( shopObj[i].name + " You do not get a discount")
            }
        }
    }

 heb(shoppers);

    //
    // console.log(shoppers[0].name + ' your total is: ' + shoppers[0].amount + ". You do not get a discount for your purchase.");
    //
    // console.log(shoppers[1].name + ' your total is: ' + shoppers[1].amount + ". You get a 12% discount for your purchase, which is: " + shoppers[1].amount * 0.12 + " is discounted from your total. Your new total is $220.");
    //
    // console.log(shoppers[2].name + ' your total is: ' + shoppers[2].amount + ". You get a 12% discount for your purchase, which is: " + shoppers[2].amount * 0.12 + " is discounted from your total. Your new total is $281.60");
    //


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
           title : "The Diary of a young girl" ,
            firstName : "Anne" ,
            lastName : "Frank"
        },
        {
            title : "Little Women" ,
            firstName : "Louisa May",
            lastName : "Alcott"
        },
        {
            title : "Assata" ,
            firstName : "Assata",
            lastName : "Shakur"
        },
        {
            title : "To Kill a Mockingbird",
            firstName: "Harper",
            lastName: "Lee"
        },
        {
            title: "The bridge to Terabithia",
            firstName: "Katherine",
            lastName: "Paterson"
        }
    ]

    console.log(books[0].title)
    console.log(books[0].firstName)
    console.log(books[0].lastName)


    // console.log(books[1].title)
    // console.log(books[1].firstName)
    // console.log(books[1].lastName)


    // console.log(books[2].title)
    // console.log(books[2].firstName)
    // console.log(books[2].lastName)


    // console.log(books[3].title)
    // console.log(books[3].firstName)
    // console.log(books[3].lastName)


    // console.log(books[4].title)
    // console.log(books[4].firstName)
    // console.log(books[4].lastName)


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (let i = 0; i < books.length; i++){
        books.indexOf[i];

        console.log("Book #" + (i +1))
        console.log("Title: " + books[i].title)
        console.log("Author: " + books[i].firstName + books[i].lastName)
        console.log("-------------------------")

    };

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();




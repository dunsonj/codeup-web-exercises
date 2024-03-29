/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array



// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

/*
old code
var name = 'your_name_here';
var email = '';
var languages = [];
*/


const name = 'Jakira Dunson';
const email = 'jakiradunson@gmail.com';
const languages = ['javaScript' , 'HTML' , 'CSS'];


// TODO: rewrite the object literal using object property shorthand

/*
old code
users.push({
    name: name,
    email: email,
    languages: languages
});
*/


users.push({
    name,
    email,
    languages
});
console.log(users)

// TODO: replace `var` with `let` in the following variable declarations


/*
old code
var emails = [];
var names = [];
*/

let emails = [];
let names = [];


// TODO: rewrite the following using arrow functions

/*
old code
users.forEach(function(user) {
    return emails.push(user.email);
});

 */

users.forEach((user)=>{
    return emails.push(user.email);
});

//another way
users.forEach((user) => emails.push(user.email));

/*
old code
users.forEach(function(user) {
    return names.push(user.name);
});
*/
users.forEach((user) => {
    return names.push(user.name);
});



// TODO: replace `var` with `let` in the following declaration
// var developers = [];

let developers = [];
users.forEach((user) => {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    /*
    old code
    const name = user.name;
    const email = user.email;
    const languages = user.languages;
    */

    const{name, email, languages} = user;
    // console.log(user)


    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

    developers.push(`${name}'s email is ${email}  ${name} knows ${languages.join(', ')}`);
    console.log(developers)


});

// TODO: Use `let` for the following variable
// var list = '<ul>';

let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

/*
old code
developers.forEach(function (developer) {
 */

for (let developer of developers ){
    // TODO: rewrite the assignment below to use template strings
    // list += '<li>' + developer + '</li>';
    //using template literals
    list += `<li>${developer}</li>`

    console.log(list)

};
list += '</ul>';
$('.put-here').html(list)

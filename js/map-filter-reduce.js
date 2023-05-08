(function (){
    "use strict"

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeLanguages = users.filter(person => person.languages.length >2
)
    console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address

let useEmail = users.map(person => person.email
)

    console.log(useEmail);
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average

let totalExp = users.reduce((total, person) =>
    total + person.yearsOfExperience
, 0)

    console.log(totalExp)
//Use .reduce to get the longest email from the list of users

    let longestEmail = users.reduce(function (longEmail, person){
        if(person.email.length > longEmail.length){
            longEmail = person.email;
        }
        console.log(longEmail);
        return longEmail
    }, '')

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let nameString = users.reduce(function (nString, person){
    if (nString === ''){
        nString = 'Your instructors are: ' + person.name
    }else if (nString != ''){
        nString += ',' + person.name;
    }
        return nString
},'')
    console.log(nameString);



// Alternate Solutions
// Problem 2
// var threeLanguages = users.filter(function(person){
//     return person.languages.length >= 3;
// });
//
// let threeLangs = users.filter((user)=> user.languages.length > 2);
//
// // console.log(threeLanguages);
//
// // Problem 3
// var usersEmail = users.map(function(person){
//     return person.email;
// });
//
// const filteredEmails = user.map(user=> {
//     return user.email;
// });
// // console.log(usersEmail);
//
// // Problem 4
// const totalExp = users.reduce((total,userYoe)=> {
//     return total + userYoe.yearsOfExperience;
// },0);
//
// const averageExp = totalExp / users.length;
//
//
// // console.log(totalExp);
// // console.log(users[0].yearsOfExperience);
//
// // Problem 5
// const longestEmail = users.reduce((email, usersEmail)=> (email.length > usersEmail.email.length) ? email : usersEmail.email, "");
// // console.log(longestEmail);
//
// // Problem 6
// const nameString = users.reduce((nString, usersName)=> {
//     return nString + (usersName.name + " ");
// },"Your instructors are: ");
//
// console.log(nameString);








})();
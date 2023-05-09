(function (){
    "use strict"

const gitUserName = username => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_API_KEY}}).then(res => {
        console.log(res)
        return res.json()

    }).then(res =>{
        console.log(res[0].created_at);
    })

}
gitUserName('dunsonj')


const wait = milSeconds => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Resolve in:  ${milSeconds} milliseconds`)
            }, milSeconds)
        })
};
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



















})()
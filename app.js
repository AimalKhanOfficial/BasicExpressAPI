var express = require('express')
var app = express()

//endpoint # 1
app.get('/giveMeAllUsers', function (req, res) {
    res.send('hello world');
});

let checkAgainstDatabase = (email, password) => {
    return email === "sampleUser@gmail.com" && password === "123a" ? true : false;
}

//endpoint # 2
app.get('/isValidUser', function (req, res) {
    let emailAddress = req.query.email;
    let pass = req.query.password;
    res.send(checkAgainstDatabase(emailAddress, pass));
});

//endpoint #3

app.get('/getListofFriends', function (req, res){
    // written by Arsalan
    
    // get a username
    // make a static data list
    // filter that list based on certain username
    // check the array with allFriends array and if it is null return a message
    // return the users friends list

    const allFriends = {
        farid: ['Raveel', 'Aimal', 'Shaish'],
        arsalan: ['Raveel1', 'Aimal1', 'Shaish1']
    }

    let userName = req.query.userName;
    console.log(userName)
    let finalResult = allFriends[userName];
     //allFriends["arsalan"], allFriends["farid"]   
     
     //written by Farid
     if (finalResult==undefined) {
        finalResult="Your user is not in the database";
     } 
        
    res.send(finalResult);

})

app.listen(3000, () => {
    console.log('=> Hey, IM RUNNING!!!');
});
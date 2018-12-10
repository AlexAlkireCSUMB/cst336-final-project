//function(url) - Get all users(emails) in a specified slack channel.
//Argument is the Slack Channel URL
//For authentication, tokens are used.

function getSlack(Slack_URL) {
    var Slack_Users = [];
    for(var k = 0; k < Slack_Users.length; ++k) {
        Slack_Users.push(k);    
    }
    
    for(var n = 0; n < Slack_Users.length; ++n) {
        console.log(Slack_Users[n]);
    }
    
    return Slack_Users;
}

function updateSlackEmail(){//Update Slack Email in the Steam Linker users DB.
    
}

function getCurrentSlackUser(){
    return JSON.parse('{"email":"testSlackEmail@gmail.com", "url":"steamlinkerspace", "name":"Test Name"}');
    
    //.email
    //.url
    //.displayName
 }


function getSlackUsersIKnow(usr){ // return slack emails of all users specified user shares in their workspace.
    
    return ['slEmailA@gmail.com', 'slEmailB@gmail.com'];
}

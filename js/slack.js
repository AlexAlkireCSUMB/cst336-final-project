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

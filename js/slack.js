//function(url) - Get all users(emails) in a specified slack channel.
//Argument is the Slack Channel URL
//For authentication, tokens are used.

function getSlack(/*Slack_URL*/) {
    var obj = '{"result":false, "count":8}';
    var data = JSON.parse(obj);   
    
    return data;
}

function signUserIn(/*Slack_URL???*/) {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText.trim()=="Verified"){
                window.location = "./index.php";
            } else if(this.responseText.trim()=="Invalid"){
                   alert("Error signing in.");
            }
        }
    };
    
    xml.open("POST",'database.php?sql=verifyUser&email='+email+'&password='+password,true);
    xml.send();
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

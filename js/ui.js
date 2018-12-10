var activeNavBarElem = "nav_home"
var aboutText ="Welcome to Steam Linker, a site that lets you compare games between Steam users by their Steam or Slack accounts."
var contactText ="Contact aalkire@csumb.edu regarding any questions or bug submissions.";
var managementLoaded = false;
var ourFriends;
$(function() {
  $('.dropdown-toggle').dropdown();
  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });
});

function showGames(games){
    clearMain();
    var gamelistText = "<h1>Shared Games:<h1><h4><p>";
    for(g in games){
        gamelistText += games[g]['name']+'<br>';
    }
    gamelistText+="</p></h4>"
    document.getElementById("main_text").innerHTML=gamelistText;

    
}

function compareUsers(){
    var otherUserID;
    if(document.getElementById("dispSlackSel").style.display=="none"){
    //If Steam Selector is active.
        var otherUserName = document.getElementById("SteamNamesSel").value;
        
        for(var f in ourFriends){
            if(ourFriends[f].displayName == otherUserName){
                otherUserID = ourFriends[f].steam_id;
                break;
            }
        }
    }
    else {
    //If Slack Selector is active.    
        var otherUserEmail = document.getElementById("SlackEmailSel").value;
        for(var f in ourFriends){
            if(ourFriends[f].slack_email == otherUserEmail){
                otherUserID = ourFriends[f].steam_id;
                break;
            }
        }
    }
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var games = compareSteamGames(ourFriends[f].steam_id, JSON.parse(this.responseText).steam_id)
                showGames(games);
                
            }
        };
    xmlhttp.open("POST",'database.php?sql=getMe',true);
    xmlhttp.send();
}


function setSlackSelector(){
    document.getElementById("dispSlackSel").style.display="inherit";
    document.getElementById("dispSteamSel").style.display="none";

}
function setSteamSelector(){
    
    document.getElementById("dispSlackSel").style.display="none";
    document.getElementById("dispSteamSel").style.display="inherit";
}

function initSelectors(friend){
    var slackSelector = document.getElementById("SlackEmailSel");
    var opt = document.createElement("option");
    opt.innerHTML= friend.slack_email;
    slackSelector.appendChild(opt);
    
    var steamSelector = document.getElementById("SteamNamesSel");
    var opt = document.createElement("option");
    opt.innerHTML= friend.displayName;
    steamSelector.appendChild(opt);
    
}

function initSharedUsers(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                ourFriends = JSON.parse(this.responseText);
                for(var f in ourFriends){
                   displayUser(new slUser(ourFriends[f]));
                   initSelectors(ourFriends[f]);
                }
                
            }
        };
    xmlhttp.open("POST",'database.php?sql=getMyDB',true);
    xmlhttp.send();

}


function updateNavBar(elemStr){
    var oldElem = document.getElementById(activeNavBarElem);
    var element = document.getElementById(elemStr);
    oldElem.classList.remove("active");
    element.classList.add("active");
    activeNavBarElem = elemStr;
}

class NavBarElem {
    constructor(name, id){
        var navBarE = this
        this.name = name;
        this.id= id;
        this.updatePage = function f(){
        
        };
        this.onClick = function f() {
            updateNavBar(id);
            navBarE.updatePage();
        };
    }
}

function clearMain(){
    document.getElementById("main_text").innerHTML="";
    document.getElementById("accountManagement").style.display= "none";
}
class NavBar {
    constructor(){
        /* Configure navbar here */
        this.navElems = {
            home : new NavBarElem('Home', 'nav_home'),
            about : new NavBarElem('About', 'nav_about'),
            contact : new NavBarElem('Contact', 'nav_contact'),
            account : new NavBarElem('Account', 'nav_account')
            
        };
        this.navElems['home'].updatePage = function(){
            clearMain();
        };
        this.navElems['about'].updatePage = function(){
            clearMain();
            var main_text = document.getElementById("main_text");
            main_text.innerHTML=aboutText;
        };
        this.navElems['contact'].updatePage = function(){
            clearMain();           
            var main_text = document.getElementById("main_text");
            main_text.innerHTML=contactText;
            
        };
            
        this.navElems['account'].updatePage = function(){
            clearMain();
            if(managementLoaded == true){
               document.getElementById("accountManagement").style.display= "inherit";
            } else {
                document.getElementById("accountManagement").style.display= "inherit";
                managementLoaded = true;    
                $('#accountManagement').load('account.php');
           }
        };
        /* Generate navbar */
        var nl = document.getElementById("nav_list");
        for(var key in this.navElems){
              var e = this.navElems[key];
            var listElem = document.createElement('li');
            listElem.setAttribute('id', e.id);
            listElem.classList.add("nav_element");
            var aElem = document.createElement('a');
            aElem.setAttribute('href', "#");
            aElem.innerHTML=e.name;
            listElem.onclick=e.onClick;
            listElem.appendChild(aElem);
            nl.appendChild(listElem);
        }
    }
}
var navBar = new NavBar();

function displayUser(usr){
    var sb = document.getElementById('sidebar')
    sb.appendChild(usr.generateRowElement());
}        

class slUser {
    constructor(userObj){
        this.steamName = userObj.displayName;
        this.name = userObj.name;
        this.steamID = userObj.steam_id;
       // this.imgName = imgName;
        this.elem = null;
        this.slackEmail = userObj.slack_email;
        this.remove = function f(){
            alert("Removing "+name+" from list.");
        };
    }
    
    generateRowElement(){
        if(this.elem != null){
            return this.elem;   
        }
        var userRow = document.createElement('div');
        userRow.classList.add("row");
        userRow.classList.add("user_row");
        var slIconCol = document.createElement('div');
        slIconCol.classList.add("user_icon_col");
        slIconCol.classList.add("col-sm-1");
        var slackImage = document.createElement('img');
        slackImage.classList.add("profile_image");
        slackImage.setAttribute('src', 'img/slack.png');
        slackImage.setAttribute('alt', this.slackEmail);
        slackImage.setAttribute('title', this.slackEmail);
        var stIconCol = document.createElement('div');
        stIconCol.classList.add("user_icon_col");
        stIconCol.classList.add("col-sm-1");
        var steamImage = document.createElement('img');
        steamImage.classList.add("profile_image");
        var steamImageLink = document.createElement('a');
        steamImageLink.setAttribute('href', 'https://steamcommunity.com/profiles/'+this.steamID);
        steamImageLink.setAttribute('alt', this.steamName);
        steamImageLink.setAttribute('title', this.steamName);
        steamImage.setAttribute('src', 'img/steam.png');
        steamImageLink.appendChild(steamImage);
        var userNameCol = document.createElement('div');
        userNameCol.classList.add("col-sm-4");
        userNameCol.classList.add("user_name_col");
        var userNameLink = document.createElement('p');
        userNameLink.classList.add("username_text");
        userNameLink.innerHTML = this.name;
        
        //rmColumn.
        //var rmLink = document.createElement('a');
        userRow.appendChild(stIconCol);
        userRow.appendChild(slIconCol);
        userRow.appendChild(userNameCol);
        userNameCol.appendChild(userNameLink);
        slIconCol.appendChild(slackImage);
        stIconCol.appendChild(steamImageLink);
        return userRow;
    }
}

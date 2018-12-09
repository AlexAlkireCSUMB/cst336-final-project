var activeNavBarElem = "nav_home"
var aboutText ="Welcome to Steam Linker, a site that lets you compare games between Steam users by their Steam or Slack accounts."
var contactText ="Contact aalkire@csumb.edu regarding any questions or bug submissions.";
var managementLoaded = false;

$(function() {
  $('.dropdown-toggle').dropdown();
  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });
});


function createUser(){
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("added"+this.responseText);
            }
        };
    xmlhttp.open("POST",'database.php?sql=addUser&user='+email+'&pw='+password,true);
    xmlhttp.send();
}

function signIn(){
    var emailAddr = document.getElementById("emailInput").value;
    var pw = document.getElementById("passwordInput").value;
    alert("Sign in attempt.\nEmail: "+emailAddr+"\nPassword: "+pw);
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
    constructor(name, id, imgName){
        this.name = name;
        this.id = id;
        this.imgName = imgName;
        this.elem = null;
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
        var stIconCol = document.createElement('div');
        stIconCol.classList.add("user_icon_col");
        stIconCol.classList.add("col-sm-1");
        var steamImage = document.createElement('img');
        steamImage.classList.add("profile_image");
        var steamImageLink = document.createElement('a');
        steamImageLink.setAttribute('href', 'https://steamcommunity.com/id/'+this.id);
        steamImage.setAttribute('src', 'img/steam.png');
        steamImageLink.appendChild(steamImage);
        var userNameCol = document.createElement('div');
        userNameCol.classList.add("col-sm-4");
        userNameCol.classList.add("user_name_col");
        var userNameLink = document.createElement('p');
        userNameLink.classList.add("username_text");
        userNameLink.innerHTML = this.name;
        
        var rmColumn = document.createElement('div');
        rmColumn.classList.add("col-sm-1");
        //rmColumn.
        //var rmLink = document.createElement('a');
        var rmImg = document.createElement('input');
        rmImg.setAttribute('type','image');
        rmImg.setAttribute('src', 'img/cross.png');
        rmImg.classList.add("rm_img");
        rmImg.onclick = this.remove;  
        userRow.appendChild(stIconCol);
        userRow.appendChild(slIconCol);
        userRow.appendChild(userNameCol);
        userNameCol.appendChild(userNameLink);
        slIconCol.appendChild(slackImage);
        stIconCol.appendChild(steamImageLink);
        rmColumn.appendChild(rmImg);
        userRow.appendChild(rmColumn);
        return userRow;
    }
}

var usrA = new slUser('alex', 'ryuuarashi', 'steam.png');
var usrB = new slUser('foobar', 'ryuuarashi', 'steam.png');
displayUser(usrA);
displayUser(usrB);
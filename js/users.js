function registerUser(){
    alert("register User");
    var name = document.getElementById("nameReg").value;
    var email = document.getElementById("SLUserEmailReg").value;
    var password = document.getElementById("passwordReg").value;
    var confirmPW = document.getElementById("confirmPW").value;
    var slackUser = getCurrentSlackUser();
    var steamID = document.getElementById("steamIDReg").value;
    slackEmail = "none";
    console.log(name+email+password+confirmPW+slackUser+steamID);
    if(name && email && password && password == confirmPW && slackUser && steamID){
        createUser(name, email, password, slackUser, steamID);
        localStorage.setItem('name-save', "");
        localStorage.setItem('email-save', "");
        localStorage.setItem('password-save', "");
        localStorage.setItem('cpassword-save', "");
        localStorage.setItem('steamid-save', "");
        document.getElementById('nameReg').value = "";
        document.getElementById('SLUserEmailReg').value = "";
        document.getElementById('passwordReg').value = "";
        document.getElementById('confirmPW').value = "";
        document.getElementById('steamIDReg').value = "";
        
    } else {
        alert("Invalid entry data. Try again.");
        return -1;
    }
    
        
}


function createUser(name, email, password, slackUser, steamID){
    var steamDisplay = getSteamDisplayName(steamID);
    alert(steamDisplay);
    alert(slackUser.name);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("added"+this.responseText);
                window.location.href = "index.php";
            }
        };
    var url ='database.php?sql=addUser&email='+email+'&pw='+password+'&name='+name+'&slack='+slackUser.email+'&steam='+steamID+"&slackurl="+slackUser.url+"&slackname="+slackUser.name+"&steamname="+steamDisplay;
    url = url.replace(' ', '%20');
    alert(url);
    console.log(url);
    
    xmlhttp.open("POST", url,true);
    xmlhttp.send();
}

function signIn(){
    var emailAddr = document.getElementById("emailInput").value;
    var pw = document.getElementById("passwordInput").value;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText.trim()=="Verified"){
                    window.location = "./index.php";
                } else if(this.responseText.trim()=="Invalid"){
                    alert("Error signing in.");
                }
            }
        };
    xmlhttp.open("POST",'database.php?sql=verifyUser&email='+emailAddr+'&pw='+pw,true);
    xmlhttp.send();
}

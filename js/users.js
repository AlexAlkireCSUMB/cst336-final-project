function registerUser(slackEmail, slackDisplay, slackUrl){
    var name = document.getElementById("nameReg").value;
    var email = document.getElementById("SLUserEmailReg").value;
    var password = document.getElementById("passwordReg").value;
    var confirmPW = document.getElementById("confirmPW").value;
    var slackUser = {email:slackEmail, name:slackDisplay, url:slackUrl};
    var steamID = document.getElementById("steamIDReg").value;
    slackEmail = "none";
    if(slUser.email == null){
        alert("Slack not properly linked");
        return -1;
    } else {
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
        
}

function submitDeleteAccount() {
    var oldPW = document.getElementById("pwConfirmDelete").value;
    var email = document.getElementById("emailConfirmDelete").value;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText.trim()=="Verified"){
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        window.location.href = "index.php";
                    }
                };
                var url ='database.php?sql=deleteAccount';
                xmlhttp.open("POST", url,true);
                xmlhttp.send();
            } else if(this.responseText.trim()=="Invalid"){
                alert("Wrong Password");
            }
        }
    };
    xmlhttp.open("POST",'database.php?sql=verifyUser&pw='+oldPW+'&email='+email,true);
    xmlhttp.send();        
}


function createUser(name, email, password, slackUser, steamID){
    getSteamDisplayName(steamID, function cb_createUser(steamDisplay) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    window.location.href = "index.php";
                    signIn(email, password);
                }
            };
        var url ='database.php?sql=addUser&email='+email+'&pw='+password+'&name='+name+'&slack='+slackUser.email+'&steam='+steamID+"&slackurl="+slackUser.url+"&slackname="+slackUser.name+"&steamname="+steamDisplay;
        alert(url);
        url = url.replace(' ', '%20');
      
        xmlhttp.open("POST", url,true);
        xmlhttp.send();
    });
        
}

function signIn(emailAddr, pw){
    if(emailAddr == null){
        emailAddr = document.getElementById("emailInput").value;
        pw = document.getElementById("passwordInput").value;
    }
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

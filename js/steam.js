
function updateSteamID(){//Update Steam ID in the Steam Linker users DB.
    
}

function getSteamIDs(slackEmailList){//Return dictionary of slack emails 
    
}

function getSteamDisplayName(id){
    return "displayOf"+id;
}

function compareSteamGames(usr1_id, usr2_id){
    alert("comparing "+usr1_id+" and "+usr2_id);
    var fakeDict = [{
     name:"foo",
     otherinfo:"7"
    },
    {
    name:"bar",    
    otherinfo:"2"
    }
    ];
    alert(fakeDict);
    return(fakeDict);
    //return list of game names
}
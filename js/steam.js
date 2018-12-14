//$("#games").change(gamesChange);
function updateSteamID(){//Update Steam ID in the Steam Linker users DB.
    
}

function getSteamIDs(slackEmailList){//Return dictionary of slack emails 
    
}

function getSteamDisplayName(id){
    return "displayOf"+id;
    //playerSummaries
    //http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=39AC8A1725168AF0A98007703832C335&steamids=76561197971168805
    $.ajax({
            type: "get",
            url: "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=39AC8A1725168AF0A98007703832C335&steamids=" + id,
            dataType: "json",
            data: {
                "format":"geojson",
            },
            
            success: function(data,status) {
                //if data.response is empty then cant see games
                if (data.response == 0){
                    alert("Privacy settings prohibit display names to show");
                }
                for(var personaname in data.response.players){
                    alert(appid);
                }
                console.log("::::"+data.response.players);
                //var select = document.getElementById("name");
            },
            
            error: function(data, status){
                alert("error");
            }
    });
}

function compareSteamGames(usr1_id, usr2_id){
    var data;
    usr1_id = "76561197972193884";
    76561197972193890
    usr2_id = "76561197972193884";
    var sharedGames1=[];
    var sharedGames2=[];
    
    $.ajax({
            type: "get",
            url: "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=39AC8A1725168AF0A98007703832C335&include_appinfo=1&steamid=" + usr1_id + "&format=json",
            dataType: "json",
            data: {
                "format":"geojson",
            },
            
            success: function(data,status) {
                //if data.response is empty then cant see games
                if (data.response == 0){
                    alert("Privacy settings prohibit games to be shown");
                }
                for(var game in data.response.games){
                    sharedGames1.push([data.response.games[game].appid, data.response.games[game].name]);
                }
                console.log(data);
                console.log(data.response.games);
                console.log(sharedGames1);
                showGames(games);
            },
            
            error: function(data, status){
                alert("error");
            }
    });
    
    $.ajax({
            type: "get",
            url: "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=39AC8A1725168AF0A98007703832C335&include_appinfo=1&steamid=" + usr2_id + "&format=json",
            dataType: "json",
            data: {
                "format":"geojson",
            },
            
            success: function(data,status) {
                //if data.response is empty then cant see games
                if (data.response == 0){
                    alert("Privacy settings prohibit games to be shown");
                }
                for(var game in data.response.games){
                    sharedGames2.push(data.response.games[game].appid);
                    
                    if(sharedGames2.includes(data.response.games[game].appid)){
                        sharedGames2.push(data.response.games[game].appid);
                    }
                }
                console.log(data.response.games);
                //var select = document.getElementById("name");
                showGames(games);
            },
            
            error: function(data, status){
                alert("error");
            }
    });
    
    //nested for loop for comparison
    //     
}



function showGames(games){
    alert(games);
}
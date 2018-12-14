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
                //var select = document.getElementById("name");
            },
            
            error: function(data, status){
                alert("error");
            }
    });
}

function compareSteamGames(usr1_id, usr2_id){
    var data;
    usr1_id = '76561197972193884';
    usr2_id = '76561197972193884';
    var sharedGamesString='a';
    var sharedGames1=[];

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

                var response=(data.response[0]);
                
                for(var game in response["games"]){
                    alert(sharedGames1.length);
                    sharedGames1.push(response.games["games"][game]["appid"]);
                }
                console.log(data);
                console.log(data.response);
                console.log(sharedGames1);
                //showGames(games);
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
                var response = data.response[0];
                
                for(var game in response.games["games"]){
                    console.log(response.games["games"][game]);
                    
                    
                    if(sharedGames1.includes(response.games["games"][game]["appid"])){
                        sharedGamesString+=response.games["games"][game]["name"];
                        alert(sharedGamesString);
                    }
                }
                
                //var select = document.getElementById("name");
                //showGames(games);
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
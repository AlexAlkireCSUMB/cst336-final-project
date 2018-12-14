//$("#games").change(gamesChange);
function updateSteamID(){//Update Steam ID in the Steam Linker users DB.
    
}

function getSteamIDs(slackEmailList){//Return dictionary of slack emails 
    
}

function getSteamDisplayName(id, cb_func){
    alert("id:"+id);
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
                console.log("%o", data);
                alert(data.response.players[0]['personaname']);
                cb_func(data.response.players[0]['personaname']);
                },
            
            error: function(data, status){
                alert("error");
            }
    });
}

function compareSteamGames(usr1_id, usr2_id, cb_func){
    var data;
    var sharedGamesString='';
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

                var response=(data.response.games);
                
                
                console.log("<<<%o>>>>", response);
                for(var game in response){
                    sharedGames1.push(response[game]["appid"]);
                }
                console.log(sharedGames1);
            
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
                        var response = data.response.games;
                        
                        for(var game in response){
                            if(sharedGames1.includes(response[game]["appid"])){
                                sharedGamesString+=response[game]["name"]+"<br>";
                            }
                        }
                        
                        //var select = document.getElementById("name");
                        //showGames(games);
                        cb_func(sharedGamesString);
                        console.log(sharedGamesString);
                    },
                    
                    error: function(data, status){
                        alert("error");
                    }
                    });

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
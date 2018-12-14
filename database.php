
<?php
session_start();
function getDatabaseConnection() {
    if(0){
        $host = "us-cdbr-iron-east-01.cleardb.net";
        $username = "ba2bdf41aaa779";
        $password = "73c70cc6"; // best practice: define this in a separte file
        $dbname = "heroku_8fe0c23bb3c4609"; 
    } else {
        $host = "localhost";
        $username = "alex";
        $password = "testpw"; // best practice: define this in a separte file
        $dbname = "finalTest"; 
   
    }    
    
    // Create connection
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $dbConn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $dbConn; 

    
}
function addUser($name, $email, $pw, $slackEmail, $steamID, $slackURL, $slackName, $steamName) {
    console.log($steamName);
    $dbConn = getDatabaseConnection();
    $sql = "INSERT INTO `slusers` 
        (
        `name`,
        `email`, 
        `password`,
        `steam_id`,
        `slack_email`
        )
        VALUES (
            '".$name."',
            '".$email."',
            '".$pw."',
            '".$steamID."',
            '".$slackEmail."'
            )";
    $statement = $dbConn->prepare($sql); 
    $statement->execute(); 
    

    $sql = "INSERT INTO `steamUsers` 
    (
    `id`, 
    `displayName`
    )
    VALUES (
        '".$steamID."',
        '".$steamName."'
        )";
    $statement = $dbConn->prepare($sql); 
    $statement->execute(); 


    $sql = "INSERT INTO `slackUsers` 
    (
    `email`, 
    `workspace_url`,
    `displayName`
    )
    VALUES (
        '".$slackEmail."',
        '".$slackURL."',
        '".$slackName."'
        )";
    $statement = $dbConn->prepare($sql); 
    $statement->execute(); 

    
} 

function getSLUserBySlack($email){
    $dbConn = getDatabaseConnection();
    $sql = "SELECT `email` FROM `slusers` WHERE `slack_email` = '".$email."'";
    $statement = $dbConn->prepare($sql); 
    $statement->execute(); 
    $records = $statement->fetchAll(); 
    if($records[0]){
        echo $records[0]['email'];
    }
}

function login($email, $pw){
    
    
    $dbConn = getDatabaseConnection();
    $sql = "SELECT `password` FROM `slusers` WHERE `email` = '".$email."'";
    $statement = $dbConn->prepare($sql); 
    $statement->execute(); 
    $records = $statement->fetchAll(); 
    if($pw == $records[0]['password']){
        echo "Verified";
        $_SESSION['user'] = $email;
    } else {
        echo "Invalid";
    }
}

function getSharedSLUsers($workspace_url){
    $dbConn = getDatabaseConnection();
    $sql = "SELECT slusers.id, slusers.steam_id, slusers.slack_email, slusers.name, steamUsers.displayName FROM slusers JOIN slackUsers ON slusers.slack_email = slackUsers.email JOIN steamUsers ON slusers.steam_id = steamUsers.id WHERE slackUsers.workspace_url = '".$workspace_url."'";
    $statement = $dbConn->prepare($sql);
    $statement->execute();
    $records = $statement->fetchAll();
    echo(json_encode($records));
}

if($_GET['sql'] == "addUser"){
    addUser($_GET['name'], $_GET['email'], $_GET['pw'], $_GET['slack'], $_GET['steam'], $_GET['slackurl'], $_GET['slackname'], $_GET['steamname']);
}


if($_GET['sql'] == "verifyUser"){
    if((!isset($_GET['email'])) && isset($_SESSION['user'])){
        $email = $_SESSION['user'];
    } else {
        $email = $_GET['email'];
    }
    login($email, $_GET['pw']);
}

if($_GET['sql'] == "getMyDB"){
    $dbConn = getDatabaseConnection();
    if(isset($_SESSION['user'])){
        $sql = 'SELECT `slack_email` FROM slusers WHERE email = "'.$_SESSION['user'].'"';
        $statement = $dbConn->prepare($sql);
        $statement->execute();
        $records = $statement->fetchAll();
        $email = $records[0]['slack_email'];
        
        $sql = "SELECT `workspace_url` FROM slackUsers WHERE email = '".$email."'"; 
        $statement = $dbConn->prepare($sql);
        $statement->execute();
        $records = $statement->fetchAll();
        
        getSharedSLUsers($records[0]['workspace_url']);
    }    
}

if($_GET['sql']=="getMe"){
    $dbConn = getDatabaseConnection();
    if(isset($_SESSION['user'])){
       $dbConn = getDatabaseConnection();
        $sql = "SELECT slusers.id, slusers.steam_id, slusers.slack_email, slusers.name, steamUsers.displayName FROM slusers JOIN slackUsers ON slusers.slack_email = slackUsers.email JOIN steamUsers ON slusers.steam_id = steamUsers.id WHERE slusers.email = '".$_SESSION['user']."' LIMIT 1";
        $statement = $dbConn->prepare($sql);
        $statement->execute();
        $records = $statement->fetchAll();
        echo(json_encode($records[0]));
     }
}

if($_GET['sql'] == "updateMe"){
    $dbConn = getDatabaseConnection();
    if(isset($_SESSION['user'])){
       $dbConn = getDatabaseConnection();
        $sql = "UPDATE `slusers` SET ";
        $setStr = "";
        if(isset($_GET['pw'])){
            $setStr .= '`password` = "'.$_GET['pw'].'", ';
        }
        if(isset($_GET['slack'])){
            $setStr .= '`slack_email` = "'.$_GET['slack'].'", ';
        }
        if(isset($_GET['steam'])){
            $setStr .= '`steam_id` = "'.$_GET['steam'].'", ';
        }
        $setStr = substr($setStr,0, -2);
        $sql .= $setStr.' WHERE `email` = "'.$_SESSION['user'].'" LIMIT 1';
        
        echo($sql);
        $statement = $dbConn->prepare($sql);
        $statement->execute();
        
     }
}
?>
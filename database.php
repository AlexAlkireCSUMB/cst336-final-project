
<?php

function getDatabaseConnection() {
    $host = "us-cdbr-iron-east-01.cleardb.net";
    $username = "ba2bdf41aaa779";
    $password = "73c70cc6"; // best practice: define this in a separte file
    $dbname = "heroku_8fe0c23bb3c4609"; 
    
    
    // Create connection
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $dbConn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $dbConn; 

    
}
function addUser($user, $pw) {
    $dbConn = getDatabaseConnection();
    $sql = "INSERT INTO `slusers` 
        ( `email` , 
        `password` )
        VALUES ('".$user."', '".$pw."')";
    echo $sql;
    $statement = $dbConn->prepare($sql); 
    $statement->execute(); 
} 
if($_GET['sql'] == "addUser"){
    addUser($_GET['user'], $_GET['pw']);
}
?>
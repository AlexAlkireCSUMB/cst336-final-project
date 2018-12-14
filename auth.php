<?php
    function getUserEmail(/*$Slack_URL*/) {
        //$arr->droplet->networks->v4[0]->ip_address;
        $arr = [10, 20, 30, 40, 50];
        echo "Here: " . " ";
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title> </title>
    </head>
    <body>
      <a href="https://slack.com/oauth/authorize?scope=channels:read+users:read&client_id=498027305905.498498527441"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
      <br />
    </body>
</html>

<?php
    //echo 'code: ';
    //echo $_GET['code'];
    $slack_URL = "https://slack.com/api/oauth.access?client_id=498027305905.498498527441&client_secret=01e84456cb39746556df2a3f7b427376&redirect_uri=https://cst-336-lab1-mwat.c9users.io/Final/cst336-final-project/auth.php";
    $slack_URL .= "&code=".$_GET['code'];
    $json = file_get_contents($slack_URL);
    echo "<br />";
    echo "Result: <br/ >";
    $data = json_decode($json, true);
    //echo "<br />";
    //echo $json;
    echo "<br />data is: <br />";
    print_r($data);
    //echo "<br />Data: <br />";
    
    $token = $data["access_token"];
    echo "<br />Our token is: " . $token;
    echo "<br /><br />";
    //$ch = curl_init("https://slack.com/api/oauth.access");
    $accessURL = "https://slack.com/api/users.info";
    $accessURL .= "?user="."UEPL29GBZ";
    // echo "<br />Access URL is: <br />";
    // echo $accessURL;
    $context = stream_context_create(array(
        'http'=> array(
            'header' => "Authorization: Bearer " . $token)
        ));
    $jsonData = file_get_contents($accessURL, false, $context);
    $accData = json_decode($jsonData, true);
    print_r($accData);
?>

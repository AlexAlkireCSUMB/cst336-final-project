<!DOCTYPE html>
<?php 
    session_start();    
    
?>
<html>
    <head>
        <link rel="icon" href="./img/steam.png">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="./css/styles.css" rel="stylesheet">
        <link href="./css/bootstrap.min.css" rel="stylesheet">
        <title>Steam Linker</title>
    </head>
    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"></button>
                    <p class="navbar-brand">Steam Linker</p>
                </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul id="nav_list" class="nav navbar-nav"></ul>
                <ul class="nav navbar-nav navbar-right">
                    <?php if(isset($_SESSION['user'])) { ?>
                        <li class="nav_element">
                            <a href="logout.php">Logout</a>
                        </li>
                    <?php } else { ?>
                        <li class="nav_element">
                            <a href="register.php">Register</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
                            <ul id="login-dp" class="dropdown-menu">
                                <li>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="emailInput">Email address</label>
                                                <input type="email" class="form-control" id="emailInput" placeholder="Email address">
                                            </div>
                                            <div class="form-group">
                                                <label for="passwordInput">Password</label>
                                                <input type="password" class="form-control" id="passwordInput" placeholder="Password">
                                                <div class="help-block text-right"><a href="">Forgot Password?</a></div>
                                            </div>
                                            <button class="btn btn-primary btn-block" onclick="signIn()">Sign in</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    <?php } ?>
                </ul>
            </div>
        </nav>
        <br>
        <div class="container fill">
            <div class="row filter_row">
                <div  class="col-md-3">
                    <div class="radio" align="center">
                        <label class="radio-inline"><input id="radioSlack" onclick="setSlackSelector()" type="radio" name="optradio" checked>Slack Emails</label>
                        <label class="radio-inline"><input id="radioSteam" onclick="setSteamSelector()" type="radio" name="optradio">Steam Names</label>
                    </div>
                </div>
                <div class="col-md-7" align="center"> 
                    <div class="form-group" id="dispSlackSel">
                        <select class="form-control selector" id="SlackEmailSel">
                        </select>
                    </div>
                    <div class="form-group" id="dispSteamSel" style="display:none">
                        <select class="form-control selector" id="SteamNamesSel">
                          
                        </select>
                    </div>
                    <div class="compareBtnDiv">
                        <button id="compareBtn" onclick="compareSteamGames()">Compare!</button>
                    </div>
                </div>
            </div>
            <div class="row main_row">
                
                <div  class="col-md-3" id="sidebar">
                    
                </div>
                <div id="main_div" class="col-md-8">
                    <div id="accountManagement"></div>
                    <p id="main_text"></p>
                </div>
            </div>
        </div> 
        <script src="./js/slack.js"></script>
        <script src="./js/steam.js"></script>
        <script src="./js/ui.js"></script>
        <script src="./js/users.js"></script>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="./js/bootstrap.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript" src="js/bootstrap-dropdown.js"></script>
        
    </body>
    <?php if(isset($_SESSION['user'])){ ?>
            <script>
                initSharedUsers();
            </script>
        <?php } ?>
</html>
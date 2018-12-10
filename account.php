
        

        
        <h2 style="margin-left:32px">Account Management - 
        <?php 
            session_start();
            echo($_SESSION['user']);
            ?> </h5>
        <div class="container" style="margin-left:48px">
            
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#passwordModal">
                    Change Password
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#slackEmailModal">
                    Change Slack Email
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#steamIDModal">
                    Change Steam ID
                </button>
            </div>
        </div>
        
        <div class="modal fade" id="passwordModal" tabindex="-1" role="dialog" aria-labelledby="passwordModal" aria-hidden="true">
            <div class="modal-dialog modal_pw_size" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="password_modal_text" class="modal-title" id="pwModalLabel">Change Password
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="pass_modal_div" class="modal-body accountManageModalText">
                        
                        Retype old password:     <input type="password" id="retypePass"><br><br>
                    
                        Type new password:     <input  type="password" id="newPassword">

                    </div>
                    <div class="modal-footer">
                        <button id="submitPWChange" onclick="submitPWChange()" type="button" class="btn btn-default" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="slackEmailModal" tabindex="-1" role="dialog" aria-labelledby="slackEmailModal" aria-hidden="true">
            <div class="modal-dialog modal_pw_size" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="slack_email_modal_text" class="modal-title" id="slackEmailLabel">Change Slack ID
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="slack_modal_div" class="modal-body accountManageModalText">
                        
                        Password:     <input  type="password" id="retypeSlackEmailPass"><br><br>
                    
                        Type new Slack Email:     <input id="newSlackEmail">

                    </div>
                    <div class="modal-footer">
                        <button id="submitSlackEmailChange" onclick="submitSlackEmailChange()" type="button" class="btn btn-default" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="steamIDModal" tabindex="-1" role="dialog" aria-labelledby="steamIDModal" aria-hidden="true">
            <div class="modal-dialog modal_pw_size" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="steamid_modal_text" class="modal-title" id="steamidModalLabel">Change Steam ID
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="steam_modal_div" class="modal-body accountManageModalText">
                        
                        Password:     <input  type="password" id="retypeSteamIDPass"><br><br>
                    
                        Type new SteamID:     <input id="newSteamID">

                    </div>
                    <div class="modal-footer">
                        <button id="submitSteamIDChange"  onclick="submitSteamIDChange()" type="button" class="btn btn-default" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>   
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>

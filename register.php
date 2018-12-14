<!DOCTYPE html>
<html>
    <head>
        <title>Steam Linker Account Registration</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="./css/bootstrap.css" rel="stylesheet">
        <link href="./css/account.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
			<div class="row main">
				<div class="panel-heading">
                    <div class="panel-title text-center">
	               		<h1 class="title">Registration</h1>
	               		<hr/>
	               	</div>
	            </div> 
				<div class="main-login main-center">
					<form class="form-horizontal" method="post" action="#">
						<div class="form-group">
							<label for="nameReg" class="cols-sm-2 control-label">Your Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<input type="text" class="form-control" name="nameReg" id="nameReg"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="SLUserEmailReg" class="cols-sm-2 control-label">Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<input type="text" class="form-control" name="SLUserEmailReg" id="SLUserEmailReg"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<input type="password" class="form-control" name="passwordReg" id="passwordReg"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<input type="password" class="form-control" name="confirmPW" id="confirmPW"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div>
						
						<div class="form-group">
							<label for="steamIDReg" class="cols-sm-2 control-label">Steam ID</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<input type="text" class="form-control" name="steamIDReg" id="steamIDReg"  placeholder="Enter your SteamID"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="SLUserEmailReg" class="cols-sm-2 control-label">Slack Sign-in</label>
							<div class="cols-sm-10">
								<div style="margin-left:12px;margin-top:8px;" class="input-group">
            						<a href="https://slack.com/oauth/authorize?scope=channels:read+users:read&client_id=498027305905.498498527441"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
								</div>
							</div>
						</div>

      
                        <br>
						<div class="form-group ">
							<button id="registerBtn" type="button" class="btn btn-primary btn-lg btn-block" onclick='registerUser()'>Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    </body>
    <script>
        window.onbeforeunload = function () {
            localStorage.setItem('name-save', document.getElementById('nameReg').value);
            localStorage.setItem('email-save', document.getElementById('SLUserEmailReg').value);
            localStorage.setItem('password-save', document.getElementById('passwordReg').value);
            localStorage.setItem('cpassword-save', document.getElementById('confirmPW').value);
            localStorage.setItem('steamid-save', document.getElementById('steamIDReg').value);
        }
        window.onload = function () {
            document.getElementById('nameReg').value = localStorage.getItem('name-save');
            document.getElementById('SLUserEmailReg').value = localStorage.getItem('email-save');
            document.getElementById('passwordReg').value = localStorage.getItem('password-save');
            document.getElementById('confirmPW').value = localStorage.getItem('cpassword-save');
            document.getElementById('steamIDReg').value = localStorage.getItem('steamid-save');
        }
    </script>
    <script src="./js/steam.js"></script>
    <script src="./js/slack.js"></script>
    <script src="./js/users.js"></script>
    
</html>
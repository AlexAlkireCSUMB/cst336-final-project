<!DOCTYPE html>
<html>
  <head>
    <link rel="icon" href="./img/steam.png">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  

    <title>Steam Linker</title>
    
    <link href="./css/styles.css" rel="stylesheet">
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    
  </head>

<body>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        </button>
      <p class="navbar-brand">Steam Linker</p>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul id="nav_list" class="nav navbar-nav"></ul>
      
      <ul class="nav navbar-nav navbar-right">
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
							<div class="bottom text-center">
								New? <a href="#"><b>Register for an account</b></a>
							</div>
					 </div>
				</li>
			</ul>
      
      </div>
    </nav>
      <div class="container fill">
        <div class="row main_row">
          <div id="sidebar" class="col-md-3"></div>
        <div id="main_div" class="col-md-8">
          <p id="main_text">foo</p>
        </div>
      </div>
    </div> 
    
    <script src="./js/ui.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./js/bootstrap.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="js/bootstrap-dropdown.js"></script>
  </body>
</html>

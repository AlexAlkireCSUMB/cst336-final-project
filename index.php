<!DOCTYPE html>
<html>
  <head>
    <link rel="icon" href="./img/steam.png">

    <title>Steam Linker</title>
    
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/styles.css" rel="stylesheet">
  </head>

  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li id="nav_home"  class="nav_element" class="active" ><a href="#" onClick='onClickHome()'>Home</a></li>
            <li id="nav_about" class="nav_element"><a href="#about" onclick='onClickAbout()'>About</a></li>
            <li id="nav_contact" class="nav_element"><a href="#contact" onclick='onClickContact()'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">


    </div>
    <script src="./js/ui.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </body>
</html>

var activeNavBarElem = "nav_home"


function updateNavBar(elemStr){
    var oldElem = document.getElementById(activeNavBarElem);
    var element = document.getElementById(elemStr);
    oldElem.classList.remove("active");
    element.classList.add("active");
    activeNavBarElem = elemStr;
    
}

function onClickAbout(){
    updateNavBar("nav_about");
    alert("About pressed");
}
function onClickHome(){
    updateNavBar("nav_home");
    alert("Home pressed");
}
function onClickContact(){
    updateNavBar("nav_contact");
    alert("Contact pressed");
}
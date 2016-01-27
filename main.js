/*
    Author: Abbas Abdulmalik
    Creation Date: 
    Title:
    Revised:
    Purpose:
    Notes:
*/ 
//------------data------------------------
var menu = document.getElementById("menu");
var pnlFront = document.getElementById("pnlFront");
var pnlBack = document.getElementById("pnlBack");
var cssBurger = document.getElementById("cssBurger");
var home = document.getElementById('home');
var heading = document.getElementById('heading')
var menuGap ="55%";
var menuOpen = false;
//----establishing $ as an "id select function" with methods and properties
(function(){
        var element = {};
        var f =  function f(string){
            if(typeof string === 'object'){
                element = string;
            }else{
               element = document.getElementById(string); 
            }
            return f;
        };
        f.chainStyles = function chainStyles(prop, val){
            element.style[prop]= val;
            return chainStyles;
        };
        f.element = element;
        window.$=f;
        return f;
})();
//---------event handlers----------------
heading.onclick = function(e){
    e.stopPropagation();
}
home.addEventListener("click",function(){
    document.location.assign('/index.html');
});
//---------------
menu.onclick = function(){
    toggleMenu();
};
//--------------
pnlBack.onclick = function(){
    toggleMenu();
};
//--------------------------------
function toggleMenu(){
    if(menuOpen){
        pnlFront.style.left="0"; 
        menuOpen = false;
    }else{
        pnlFront.style.left=menuGap;
        menuOpen = true;
    }
}
//---------------------------

   
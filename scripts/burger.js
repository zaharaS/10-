let menu = document.getElementsByClassName('menu')[0];

function toggleMenu() {
    if (menu.className === "menu"){
        menu.className += "open";   
    } else{
        menu.className = "menu";  
    }
}

function openNavMenu() {
    var menu = document.getElementsByClassName('nav-menu')[0];
    if (document.documentElement.clientWidth >= 686) {
        menu.style.display = "flex";
    } else if (document.documentElement.clientWidth < 686) {
        document.getElementsByTagName('main')[0].style.position = 'fixed';
        document.getElementsByTagName('footer')[0].style.display = 'none';
        document.getElementById('nav_background_mobile').style.display = "block";
        menu.style.display = 'flex';
    }
}

function closeNavMenu() {
    var menu = document.getElementsByClassName('nav-menu')[0];
    menu.style = "";
    document.getElementsByTagName('main')[0].style = '';
    document.getElementsByTagName('footer')[0].style = '';
    document.getElementById('nav_background_mobile').style = '';
}
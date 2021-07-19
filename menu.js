/*function open_nav_menu() {
    if ($(document).width() >= '686') {
        document.body.style.overflow = 'hidden';
        $('.nav-menu').fadeIn("normal");
        $('.nav-menu').css('display', 'flex');
    }
    if ($(document).width() < '686') {
        $('main').css('position', 'fixed');
        $('footer').css('display', 'none');
        $('#nav_background').css('display', 'block');
        $('.nav-menu').fadeIn("fast");
        $('.nav-menu').css('display', 'flex');
    }
}
function close_nav_menu() {
    if ($(document).width() >= '686') {
        document.body.style.overflow = 'auto';
        $('.nav-menu').fadeOut("normal");
        $('.nav-menu').css('display', 'flex');
    }
    if ($(document).width() < '686') {
        $('main').css('position', 'relative');
        $('footer').css('display', 'flex');
        
        $('#nav_background').css('display', 'none');
        $('.nav-menu').fadeOut("normal");
        $('.nav-menu').css('display', 'flex');
    }
}
*/
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
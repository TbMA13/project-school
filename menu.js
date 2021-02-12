function open_nav_menu() {
    if ($(document).width() >= '686') {
        document.body.style.overflow = 'hidden';
        $('.nav-menu').fadeIn("normal");
        $('.nav-menu').css('display', 'flex');
        $('#nav_background').css('display', 'block');
    }
    if ($(document).width() < '686') {
        $('main').css('position', 'fixed');
        $('footer').css('display', 'none');
        $('#nav_background').css('display', 'block');
        $('.nav-menu').fadeIn("normal");
        $('.nav-menu').css('display', 'flex');
    }
}
function close_nav_menu() {
    if ($(document).width() >= '686') {
        document.body.style.overflow = 'auto';
        $('#nav_background').css('display', 'none');
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
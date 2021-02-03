function open_nav_menu(){
    $('#nav_background').css('display', 'block');
    $('.nav-menu').fadeIn("fast");
    $('.nav-menu').css('display', 'flex');
    
}
function close_nav_menu() {
    $('#nav_background').css('display', 'none');

    $('.nav-menu').fadeOut("fast");
    $('.nav-menu').css('display', 'flex');
}
//TODO НЕ РАБОТАЕТ НА ТЕЛЕФОНЕ
/*
function open_nav_menu(){
    $('.nav-menu').show('fast');
    $('.nav-menu').css('display', 'flex');
    $('#nav_background').css('display', 'block');
    $('body').css('position', 'fixed');
    $('footer').css('display', 'none');
    $('.background').css('z-index', '70');
    
}
function close_nav_menu() {    
    $('#nav_background').css('display', 'none');
    $('.nav-menu').fadeOut("fast");

}*/
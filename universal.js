window.onload = function () {
    
    let headerHeight = document.getElementById('header').offsetHeight;
    const marginTop = 50;
    document.getElementsByClassName('article')[0].style.marginTop = (headerHeight + marginTop + "px");


    openButton.onclick = openNavMenu;
    closeButton.onclick = closeNavMenu;

    document.getElementById('invalid_image').onclick = invalid;
}
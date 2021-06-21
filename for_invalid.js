window.onload = function () {
    document.getElementById('invalid_image').onclick = invalid;
}

function invalid() {
    const forInvalidBlock = document.getElementById('for-invalid');
    if (forInvalidBlock.style.height === '0px') {
        forInvalidBlock.style.height = 'auto';
        forInvalidBlock.style.paddingTop = '10px';
        forInvalidBlock.style.paddingBottom = '10px';
        forInvalidBlock.style.opacity = '1';
    } else {
        forInvalidBlock.style.height = '0';
        forInvalidBlock.style.paddingTop = '0';
        forInvalidBlock.style.paddingBottom = '0';
        forInvalidBlock.style.opacity = '0';
    }
}

//!Изменение размера шрифта
function fontSizeChange(sourse, fontSize) {
    for (let i = 0; i < sourse.length; i++) {
        sourse[i].style.fontSize = fontSize;
    }
}

function invalidBlockRepair() {
    //Восстановление блока для слабовидящих
    fontSizeChange(document.getElementsByClassName('for-invalid-paragraph'), '18px');
    document.getElementById('small-font').style.fontSize = '15px';
    document.getElementById('middle-font').style.fontSize = '17px';
    document.getElementById('high-font').style.fontSize = '20px';
    fontSizeChange(document.getElementsByClassName('color-paragraph'), '16px');
}

function smallFontSize() {
    let headerLink = document.getElementsByClassName('header-link');
    let navLink = document.body.getElementsByClassName('nav-menu-link');
    let headingText = document.getElementsByTagName('h1');
    let paragraph = document.getElementsByTagName('p');

    if (document.documentElement.clientWidth > 1125) {
        fontSizeChange(headerLink, '20px');
        fontSizeChange(navLink, '12px');
        fontSizeChange(headingText, '28px');
        fontSizeChange(paragraph, '18px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '18px');
        invalidBlockRepair();
    }
}

function middleFontSize() {
    let headerLink = document.getElementsByClassName('header-link');
    let navLink = document.getElementsByClassName('nav-menu-link');
    let headingText = document.getElementsByTagName('h1');
    let paragraph = document.getElementsByTagName('p');

    if (document.documentElement.clientWidth > 1125) {
        fontSizeChange(headerLink, '28px');
        fontSizeChange(navLink, '18px');
        fontSizeChange(headingText, '35px');
        fontSizeChange(paragraph, '22px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '22px');
        fontSizeChange(document.getElementsByClassName('footer-text'), '25px')
        invalidBlockRepair();
    }
}

function highFontSize() {
    let headerLink = document.getElementsByClassName('header-link');
    let navLink = document.getElementsByClassName('nav-menu-link');
    let headingText = document.getElementsByTagName('h1');
    let paragraph = document.getElementsByTagName('p');

    if (document.documentElement.clientWidth > 1125) {
        fontSizeChange(headerLink, '33px');
        fontSizeChange(navLink, '21px');
        fontSizeChange(headingText, '39px');
        fontSizeChange(paragraph, '26px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '26px');
        fontSizeChange(document.getElementsByClassName('footer-text'), '29px')
        invalidBlockRepair();
    }
}

//!Изменение цветовой гаммы
function manyColors(path, color, property) {
    if (property === 'background'){
        for (let i = 0; path.length > i; i++) {
            path[i].style.background = color;
        }
    }
    else if (property === 'color') {
        for (let i = 0; path.length > i; i++) {
            path[i].style.color = color;
        }
    }
}

function colorChange(textColor, blockColor) {
    document.getElementById('background').style.background = blockColor;
    manyColors(document.getElementsByClassName('article'), blockColor, 'background');
    manyColors(document.getElementsByTagName('h1'), textColor, 'color');
    manyColors(document.getElementsByTagName('p'), textColor, 'color');
    manyColors(document.getElementsByTagName('a'), textColor, 'color');
    document.getElementsByTagName('footer').style.background = 
}
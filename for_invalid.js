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
    document.getElementById('small-font').style.fontSize = '15px';
    document.getElementById('small-font').style.letterSpacing = '0';
    document.getElementById('small-font').style.fontFamily = '';

    document.getElementById('middle-font').style.fontSize = '17px';
    document.getElementById('middle-font').style.letterSpacing = '0';
    document.getElementById('middle-font').style.fontFamily = '';

    document.getElementById('high-font').style.fontSize = '20px';
    document.getElementById('high-font').style.letterSpacing = '0';
    document.getElementById('high-font').style.fontFamily = '';

    fontSizeChange(document.getElementsByClassName('color-paragraph'), '16px');

    for (let i = 0; i < document.getElementsByClassName('paragraph-js').length; i++) {
        document.getElementsByClassName('paragraph-js')[i].style.fontSize = "16px";
        document.getElementsByClassName('paragraph-js')[i].style.fontFamily = "";
    }

    document.getElementById('arial-click').style.letterSpacing = "";
    document.getElementById('times-new-roman-click').style.letterSpacing = "";

    for (let i = 0; i < document.getElementsByClassName('for-invalid-paragraph').length; i++) {
        document.getElementsByClassName('for-invalid-paragraph')[i].style.fontSize = "";
        document.getElementsByClassName('for-invalid-paragraph')[i].style.letterSpacing = "0";
        document.getElementsByClassName('for-invalid-paragraph')[i].style.fontFamily = "";
    }
    for (let i = 0; i < document.getElementsByClassName('color-paragraph').length; i++) {
        document.getElementsByClassName('color-paragraph')[i].style = "";
        document.getElementsByClassName('color-paragraph')[i].style.fontFamily = "";
    }

    document.getElementById('arial-click').style.fontFamily = 'Arial, Helvetica, sans-serif';
    document.getElementById('times-new-roman-click').style.fontFamily = 'TimesNewRoman, Times, serif';

    document.getElementById('min-spacing').style.letterSpacing = "";
    document.getElementById('middle-spacing').style.letterSpacing = "3px";
    document.getElementById('max-spacing').style.letterSpacing = "4px";

    document.getElementById('delete-invalid').style = "";
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
    if ((document.documentElement.clientWidth <= 1125) && (document.documentElement.clientWidth >= 686)) {
        fontSizeChange(headerLink, '25px');
        fontSizeChange(navLink, '13px');
        fontSizeChange(headingText, '32px');
        fontSizeChange(paragraph, '18px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '18px');
        invalidBlockRepair();
    }
    if (document.documentElement.clientWidth < 686) {
        fontSizeChange(headerLink, '16px');
        fontSizeChange(navLink, '14px');
        fontSizeChange(headingText, '23px');
        fontSizeChange(paragraph, '16px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '16px');
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

    if ((document.documentElement.clientWidth <= 1125) && (document.documentElement.clientWidth >= 686)) {
        fontSizeChange(headerLink, '27px');
        fontSizeChange(navLink, '15px');
        fontSizeChange(headingText, '35px');
        fontSizeChange(paragraph, '22px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '22px');
        invalidBlockRepair();
    }

    if (document.documentElement.clientWidth < 686) {
        fontSizeChange(headerLink, '18px');
        fontSizeChange(navLink, '16px');
        fontSizeChange(headingText, '25px');
        fontSizeChange(paragraph, '20px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '20px');
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

    if ((document.documentElement.clientWidth <= 1125) && (document.documentElement.clientWidth >= 686)) {
        fontSizeChange(headerLink, '29px');
        fontSizeChange(navLink, '17px');
        fontSizeChange(headingText, '37px');
        fontSizeChange(paragraph, '24px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '24px');
        invalidBlockRepair();
    }

    if (document.documentElement.clientWidth < 686) {
        fontSizeChange(headerLink, '20px');
        fontSizeChange(navLink, '18px');
        fontSizeChange(headingText, '27px');
        fontSizeChange(paragraph, '22px');
        fontSizeChange(document.getElementsByClassName('useful-link'), '22px');
        invalidBlockRepair();
    }
}

//!Изменение цветовой гаммы
function manyColors(path, color, property) {
    if (property === 'background') {
        for (let i = 0; path.length > i; i++) {
            path[i].style.background = color;
        }
    } else if (property === 'color') {
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
    manyColors(document.getElementsByTagName('footer'), blockColor, 'background');
    manyColors(document.getElementsByTagName('nav'), blockColor, 'background')
    document.getElementById('header').style.background = blockColor;
    document.getElementById('for-invalid').style.background = blockColor;
    document.getElementById('nav_background_mobile').style.background = blockColor;
    //восстановление блока для слабовидящих

    document.getElementById('small-font').style.color = 'black';
    document.getElementById('middle-font').style.color = 'black';
    document.getElementById('high-font').style.color = 'black';
    for (let i = 0; i < document.getElementsByClassName('color-paragraph').length; i++) {
        document.getElementsByClassName('color-paragraph')[i].style = "";
    }
    manyColors(document.getElementsByTagName('label'), textColor, 'color');
    for (let i = 0; i < document.getElementsByClassName('paragraph-js').length; i++) {
        document.getElementsByClassName('paragraph-js')[i].style.color = "";
    }
    document.getElementById('delete-invalid').style = "";
}

//!работа с изображениями
function imagesOnOff(change) {
    if (change === 'off') {
        document.getElementById('background').style.background = 'none';
        for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
            document.getElementsByTagName('img')[i].style.opacity = "0";
        }
    }
    if (change === 'on') {
        document.getElementById('background').style.background = '';
        for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
            document.getElementsByTagName('img')[i].style.opacity = "1";
        }
    }
    for (let i = 0; i < document.getElementsByClassName('icon').length; i++) {
        document.getElementsByClassName('iconJS')[i].style.opacity = "1";
    }
}


//!выбор шрифта

function fontChange(font) {
    for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.fontFamily = font;
    }
    for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
        document.getElementsByTagName('h1')[i].style.fontFamily = font;
    }
    for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
        document.getElementsByTagName('a')[i].style.fontFamily = font;
    }
    document.getElementById('arial-click').style.fontFamily = 'Arial, Helvetica, sans-serif';
    document.getElementById('times-new-roman-click').style.fontFamily = 'TimesNewRoman, Times, serif';
    invalidBlockRepair();
}

//!Изменение межбуквеннго интервала

function letterSpacingChange(value) {
    for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.letterSpacing = value;
    }
    for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
        document.getElementsByTagName('h1')[i].style.letterSpacing = value;
    }
    for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
        document.getElementsByTagName('a')[i].style.letterSpacing = value;
    }
    document.getElementById('min-spacing').style.letterSpacing = "";
    document.getElementById('middle-spacing').style.letterSpacing = "3px";
    document.getElementById('max-spacing').style.letterSpacing = "4px";
    invalidBlockRepair();
}

function invalidReset() {
    for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style = "";
    }
    for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
        document.getElementsByTagName('h1')[i].style = "";
    }
    for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
        document.getElementsByTagName('a')[i].style = "";
    }

    //цвета
    document.getElementById('background').style.background = "";
    manyColors(document.getElementsByClassName('article'), "", 'background');
    manyColors(document.getElementsByTagName('h1'), "", 'color');
    manyColors(document.getElementsByTagName('p'), "", 'color');
    manyColors(document.getElementsByTagName('a'), "", 'color');
    manyColors(document.getElementsByTagName('footer'), "", 'background');
    manyColors(document.getElementsByTagName('nav'), "", 'background')
    document.getElementById('header').style.background = "";
    document.getElementById('for-invalid').style.background = "";
    document.getElementById('nav_background_mobile').style.background = "";
    manyColors(document.getElementsByTagName('label'), "", 'color');

    document.getElementById('arial-click').style.fontFamily = 'Arial';
    document.getElementById('times-new-roman-click').style.fontFamily = 'TimresNewRoman';

    document.getElementById('min-spacing').style.letterSpacing = "";
    document.getElementById('middle-spacing').style.letterSpacing = "3px";
    document.getElementById('max-spacing').style.letterSpacing = "4px";

    document.getElementById('on').checked = true;
}
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

function smallFontSize() {
    //изменить шрифт хедера
    let headerLink = document.getElementsByClassName('header-link');
    for (let i = 0; i < headerLink.length; i++){
        headerLink[i].style.fontSize = '22px';
    }
    //изменить шрифт навменю
    let nav
    //изменить шрифт основных блоков
    ///изменить шрифт футера
}
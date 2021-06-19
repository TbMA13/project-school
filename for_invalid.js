/*const forInvalidBlock = document.getElementById('for-invalid');
let i = 0;

function invalid(i, forInvalidBlock) {
    for (let i; true; i += 1) {
        if (i === 0) {
            forInvalidBlock.classList.add('visible');
        } else if ((i % 2) !== 0) {
            forInvalidBlock.style.animationDirection = reverse;
        } else if ((i % 2) !== 1) {
            forInvalidBlock.style.animationDirection = normal;
        }
    }
}
*/
/*function invalid(score) {
    const forInvalidBlock = document.getElementById('for-invalid');
    if (score === 0) {
        score += 1;
        forInvalidBlock.classList.add('visible');
    }
    else if ((score % 2) !== 0) {
        score += 1;
        forInvalidBlock.style.animationDirection = reverse;
    }
    else if ((score % 2) !== 1) {
        score += 1;
        forInvalidBlock.style.animationDirection = normal;
    }
}
*/
/*
function choiseInvalidBlock(score) {
    if (score === 0) {
        hideInvalidBlock();
    } else if (score === 1) {
        visionInvalidBlock();
    }
}

function hideInvalidBlock() {
    score += 1;
    const forInvalidBlock = document.getElementById('for-invalid');
    forInvalidBlock.classList.remove('visible');
    forInvalidBlock.classList.add('hide');
}

function visionInvalidBlock() {
    score -= 1;
    const forInvalidBlock = document.getElementById('for-invalid');
    forInvalidBlock.classList.remove('hide');
    forInvalidBlock.classList.add('visible');
}*/
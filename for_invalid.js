let score = 0

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
    forInvalidBlock.classList.add('hide');
}

function visionInvalidBlock() {
    score -= 1;
    const forInvalidBlock = document.getElementById('for-invalid');
    forInvalidBlock.classList.remove('hide');
}
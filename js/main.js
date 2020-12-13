const generateRow = (countRows, countBlocks) => {
    return [...Array(countRows)]
        .reduce((total) => total += `<div class="square-row">${generateSquare(countBlocks)}</div>`, '');
}

const generateSquare = (count) => {
    return [...Array(count)].reduce((total) => total += '<div class="square"/></div>', '')
}

const generateBlocks = (countRows, countBlocks) => {
    const squareWrapper = document.querySelector(".square-wrapper");
    squareWrapper.innerHTML += generateRow(countRows, countBlocks);
}

const colorBlocks = () => {
    const blocks = document.querySelectorAll(".square");
    blocks.forEach((block) => {
        block.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    })
}

const generateBlocksInterval = () => {
    const interval = 1000;
    setInterval(() => colorBlocks(), interval);
}

generateBlocks(5, 5);
generateBlocksInterval();
const CELL_LENGTH = 60;
const CELL_NB = 16;
const body = document.querySelector('body');
const container = document.createElement('div');
const configBtn = document.createElement('button');

configBtn.textContent = 'Configuration';
configBtn.classList.add('btn-config');
body.appendChild(configBtn);

const resetGrid = () => {
    if (!container.childElementCount) {
        return;
    }
    const last = container.lastElementChild;
    container.removeChild(last);
    return resetGrid();
}
const buildGrid = (nbColums) => {
    resetGrid();
    container.style.width = `${CELL_LENGTH * nbColums}px`;
    container.style.height = `${CELL_LENGTH * nbColums}px`;
    for (let i = 0; i < nbColums; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < nbColums; j++) {
            const col = document.createElement('div');
            row.appendChild(col);
            col.classList.add('col');
            col.style.width = `${100 / nbColums}%`;
        }
        row.style.height = `${100 / nbColums}%`;
        row.classList.add('row');
        container.appendChild(row);
    }
    container.classList.add('container');
    body.appendChild(container);
    const cells = document.querySelectorAll(".col");
    cells.forEach((cell) => cell.addEventListener('mouseenter', changeBackground));
}

buildGrid(CELL_NB);
configBtn.addEventListener('click', setConfiguration);


function changeBackground() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    this.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function setConfiguration() {
    const nbRow = parseInt(prompt('how many row and colum would you like ?'));
    if (nbRow && (nbRow >= 0 && nbRow <= 100)) {
        buildGrid(parseInt(nbRow));
    }   
}

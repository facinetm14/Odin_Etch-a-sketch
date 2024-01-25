const CELL_LENGTH = 60;
const CELL_NB = 16;
const container = document.createElement('div');
container.style.width = `${CELL_LENGTH * CELL_NB}px`;
container.style.height = `${CELL_LENGTH * CELL_NB}px`;
for (let i = 0; i < CELL_NB; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < CELL_NB; j++) {
        const col = document.createElement('div');
        row.appendChild(col);
        col.classList.add('col');
        col.style.width = `${100 / CELL_NB}%`;
    }
    row.style.height = `${100 / CELL_NB}%`;
    row.classList.add('row');
    container.appendChild(row);
}
container.classList.add('container');
document.querySelector('body').appendChild(container);

const cells = document.querySelectorAll(".col");
cells.forEach((cell) => cell.addEventListener('mouseenter', changeBackground));

function changeBackground() {
    this.style.backgroundColor = 'red';
}

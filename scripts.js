const mainTitle = document.querySelector("#title");
let curValue = 0;

const btnIncrease = document.querySelector('#inc');
const btnDecrease = document.querySelector("#dec");
const btnReset = document.querySelector("#reset");

btnIncrease.addEventListener('click', () => {
    curValue ++;
    mainTitle.textContent = curValue;
});

btnDecrease.addEventListener('click', () => {
    curValue --;
    mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

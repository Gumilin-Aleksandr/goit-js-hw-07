`use strict`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', onCreateBoxes);

function onCreateBoxes() {
  const amount = Number(inputNumber.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    size += 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
  inputNumber.value = '';
}

destroyButton.addEventListener('click', onDestroyBoxes);

function onDestroyBoxes() {
  boxesContainer.innerHTML = '';
}

boxesContainer.style.display = 'flex';
boxesContainer.style.gap = '44px';
boxesContainer.style.marginTop = '44px';
controls.style.display = 'flex';
controls.style.gap = '16px';

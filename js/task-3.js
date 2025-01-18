`use strict`;

const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', onInputType);

function onInputType() {
  const trimmedValue = inputText.value.trim();
  outputText.textContent = trimmedValue || 'Anonymous';

  return outputText;
}

let inputRef = document.querySelector('input#name-input');
let outputRef = document.querySelector('span#name-output');

function onInputChange(event) {
  inputRef = event.currentTarget.value;
  console.log(inputRef);
  inputRef !== '' ? (outputRef.innerText = inputRef.trim()) : (outputRef.innerText = 'Anonymous');
}

inputRef.addEventListener('input', onInputChange);

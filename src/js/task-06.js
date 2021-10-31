const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;

const onBlur = () => {
  const valueLength = inputRef.value.length;
  if (valueLength == Number(inputLength)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
};
inputRef.addEventListener('blur', onBlur);

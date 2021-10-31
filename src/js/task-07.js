const inputRef = document.querySelector('input#font-size-control');

const onInput = () => {
  const value = inputRef.value;
  const text = document.querySelector('span#text');
  text.style.fontSize = `${value}px`;
};
inputRef.addEventListener('input', onInput);

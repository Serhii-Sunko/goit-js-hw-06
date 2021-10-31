const form = document.querySelector('form.login-form');
const elements = form.elements;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  } else console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

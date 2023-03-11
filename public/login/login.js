const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
  // Your sign-in logic goes here
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  // submit wil  default trigger sumbit form without linking button element to form
  e.preventDefault(); // restrict event 'submit' to send form input to server(via get/post)

  const height = parseInt(document.querySelector('#height'));
  const weight = parseInt(document.querySelector('#weight'));
  const result = document.querySelector('#results');
  result.innerHTML = 'hello';
});

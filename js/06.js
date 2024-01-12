const validationInput = document.getElementById('validation-input');
  validationInput.addEventListener('blur', checkInputLength);
  function checkInputLength() {
    const requiredLength = parseInt(validationInput.getAttribute('data-length'), 10);
    const inputLength = validationInput.value.length;

    if (inputLength === requiredLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  }
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener("blur", () =>{
  const admittedLength = parseInt(validationInput.getAttribute('data-length'));
  const inputValue = validationInput.value.length;

  if (inputValue === admittedLength){
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  }
  else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formElements = loginForm.elements;
    const formData = {};
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.tagName === 'INPUT' && element.type !== 'submit') {
        formData[element.name] = element.value;
      }
    }
    if (!formData.email || !formData.password) {
      alert('Toate câmpurile trebuie completate.');
    } else {
      console.log(formData);
      loginForm.reset();
    }
  });
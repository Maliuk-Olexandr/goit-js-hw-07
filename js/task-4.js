
const formInput = document.querySelectorAll('.login-form input');
formInput.forEach(input => {
    input.setAttribute('autocomplete', 'on');
});


const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    console.log(formData);
    event.currentTarget.reset();
});
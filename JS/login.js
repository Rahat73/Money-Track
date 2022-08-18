function checkLogin() {
    const inputEmail = document.getElementById('input-email').value;
    const inputPass = document.getElementById('input-pass').value;

    if (inputEmail === 'rahat@mail.com' && inputPass === 'rahat123') {
        alert('logged in successfully');
    }
    else {
        alert('Wrong credentials');
    }
}
const input = document.getElementById('password');
const input2 = document.getElementById('confirm');
input.addEventListener("input", password);
input2.addEventListener("input",password);

function password() {
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#confirm');
    //const error= document.getElementById('error');
    if (confirm.value === password.value) {
      password.setCustomValidity("");
      confirm.setCustomValidity("");
    } else {
        //error.classList.add('inCase');
        password.setCustomValidity("Not the same thing");
        confirm.setCustomValidity("Not the same thing");
    }
  }
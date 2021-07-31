function check() {
    let name = document.getElementById('fullname');
    let email = document.getElementById('emailbox');
    let password = document.getElementById('pswd');
    let login = document.getElementById('logname');
    document.getElementById('errorMessage_user_name').innerHTML = "";

    let form  = document.getElementsByTagName('form')[0];
    form.isValid = true;

    document.getElementById('errorMessage_user_name').innerHTML = "";
    document.getElementById('errorMessage_user_email').innerHTML = "";
    document.getElementById('errorMessage_user_password').innerHTML = "";
    document.getElementById('errorMessage_user_username').innerHTML = "";


    if (name.value == '') {
        document.getElementById('errorMessage_user_name').innerHTML += "your name is not filled <br>";
        form.isValid = false;
    }
    if (email.value == '') {
        document.getElementById('errorMessage_user_email').innerHTML += "your email is not filled <br>";
        form.isValid = false;
    }
    if (password.value == '') {
        document.getElementById('errorMessage_user_password').innerHTML += "your password is not filled <br>";
        form.isValid = false;
    }
    if (login.value == '') {
        document.getElementById('errorMessage_user_username').innerHTML += "your login is not filled <br>";
        form.isValid = false;
    }

    if (form.isValid == true) {
        let welcome_user=fullname.value;
        alert(`Добро пожаловать, ${welcome_user}!`)
    }
}


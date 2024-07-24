function check() {

    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');
    console.log(storedEmail);
    console.log(storedPw);

    // entered data from the login-form
    var  email = document.getElementById('email');
    console.log(email);
    var password = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(email.value !== storedEmail || password.value !== storedPw) {
        alert('invalid email or password');
    }else {
        // alert('You are loged in.');
        location.replace("main.html");
    }
    let obj = {      
        email:storedEmail
    };

    alert(JSON.stringify(obj));
    return false;
}

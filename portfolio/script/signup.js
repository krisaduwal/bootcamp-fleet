// var button = document.getElementById("button1");
// button.setAttribute("onclick", "move();");
// function move() {
//     window.location.href = "main.html";
// }

function validate() {
    
    var username = document.getElementsByName('username')[0].value;
    var email= document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value;  
    var cpassword = document.getElementsByName('cpassword')[0].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
   
    if(username.length < 1){
        alert("please enter username");
        return false;
    }
    else if(email==null || email == "") {
        alert("please enter your email address");  
        return false;
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    }    
    else if(password.length<=8){
        alert("password should be atleast of 8 characters!");
        return false;
    }
    else if(cpassword!== password){
        alert("password do not match");
        return false;
    }
    else{
        // alert('ok')
        location.replace("main.html");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        console.log(email);
        console.log(password);
    }
    let obj = {
        
        email:email
    };

    alert(JSON.stringify(obj));
    // document.getElementById("f1").reset();
    return false;
}

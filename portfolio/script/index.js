// var button = document.getElementById("button1");
// button.setAttribute("onclick", "move();");
// function move() {
//     window.location.href = "main.html";
// }

function validateForm() {

    var email= document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value;    
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if(email==null || email == "") {
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
    else{
        // alert('ok')
        location.replace("main.html");
    }
    let obj = {
        
        email:email
    };
    alert(JSON.stringify(obj));
    // document.getElementById("f1").reset();
    return false;
}

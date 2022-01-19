import showPassword from "../components/passwordsee.js";

document.getElementById('eyeIcon-Login').addEventListener('click',showPassword)

// ---------------------------
let count = 0;

let allRegisterUser = JSON.parse(localStorage.getItem('signInUserdetails')) || [];

let clicklogin = document.getElementById('myform_LogIn');
clicklogin.addEventListener('submit',() => {
    loginUser(event);
})

function loginUser(event){
    event.preventDefault();
    let loginaddress = document.getElementById('LogIn_email_Input').value;
    console.log('loginaddress:', loginaddress)
    let password = document.getElementById('LogIn_password_Input').value;
    console.log('password:', password)

    for(let i=0;i<allRegisterUser.length;i++){
        if(allRegisterUser[i].emailadd === loginaddress && allRegisterUser[i].password === password){
            count = 1;
            break;
        }
    }
    if(count === 1){
        alert('Logged in successfully');
        window.location.href = "./index.html"
    }
    else{
        alert('Invalid Email Id or password');
    }
}
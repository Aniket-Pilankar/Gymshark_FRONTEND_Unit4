import showPassword from "../components/passwordsee.js";

document.getElementById('eyeIcon-Login').addEventListener('click',showPassword)

import { shownav, crouzel } from "../components/navbar.js";
document.querySelector("#navbar_full").innerHTML = shownav()
crouzel()
import footer from "../components/footer.js"
document.querySelector("#main_footer_div").innerHTML = footer()

// ---------------------------

let clicklogin = document.getElementById('myform_LogIn');
clicklogin.addEventListener('submit',() => {
    loginUser(event);
})

async function loginUser(event){
    
    try {
        event.preventDefault();

        let loginData = {
            email:document.getElementById('LogIn_email_Input').value,
            password :document.getElementById('LogIn_password_Input').value
        }

        loginData = JSON.stringify(loginData)
        console.log('loginData:', loginData)


        let res = await fetch('http://127.0.0.1:3333/login',{
            method:'POST',
            body:loginData,
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log('res:', res)

        let response = await res.json()
        console.log('response:', response)

        console.log('response.user:', response.user)
        console.log('response.user:', response.token)


        if(response.user === undefined){
            alert('Please try another email or password')
            return
        }

        let User_LOGIN_token = response.token;
        localStorage.setItem('User_LOGIN_token',JSON.stringify(User_LOGIN_token))

        alert('Logged in successfully');
        
    } catch (error) {
        console.log('error:', "error in loginUser function");
    }
}



// ------------------------
// let count = 0;

// let allRegisterUser = JSON.parse(localStorage.getItem('signInUserdetails')) || [];

// let clicklogin = document.getElementById('myform_LogIn');
// clicklogin.addEventListener('submit',() => {
//     loginUser(event);
// })

// function loginUser(event){
//     event.preventDefault();
//     let loginaddress = document.getElementById('LogIn_email_Input').value;
//     console.log('loginaddress:', loginaddress)
//     let password = document.getElementById('LogIn_password_Input').value;
//     console.log('password:', password)

//     for(let i=0;i<allRegisterUser.length;i++){
//         if(allRegisterUser[i].emailadd === loginaddress && allRegisterUser[i].password === password){
//             count = 1;
//             break;
//         }
//     }
//     if(count === 1){
//         alert('Logged in successfully');
//         window.location.href = "./index.html"
//     }
//     else{
//         alert('Invalid Email Id or password');
//     }
// }
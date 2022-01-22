import showPassword from "../components/passwordsee.js"

let eyeclickIcon = document.getElementById('eyeIcon-SignUp');
eyeclickIcon.addEventListener('click',showPassword)
// document.getElementById('eyeIcon-SignUp').addEventListener('click',showPassword)

import { shownav, crouzel } from "../components/navbar.js";
document.querySelector("#navbar_full").innerHTML = shownav()
crouzel()
import footer from "../components/footer.js"
document.querySelector("#main_footer_div").innerHTML = footer()
// --------------------------------------------------------------------------

let collectday = document.getElementById('day');
let collectmonth = document.getElementById('month');

let collectyear = document.getElementById('year');


const months = ['Month','January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

function populateMonths(){
    for(let i=0;i<months.length;i++){
        const option = document.createElement('option');
        
        option.textContent = months[i];
        // option.value = months[i]
        collectmonth.append(option);
        console.log(collectmonth.value)
    }
    collectmonth.value = "January"
}
populateMonths()

let previousday;

function populateDays(month){
    // console.log('month:', month)

    while(collectday.firstChild){
        collectday.removeChild(collectday.firstChild)
    }
    let dayNum;

    let year = collectyear.value;

    if(month === 'January' || month === 'March' || 
    month === 'May' || month === 'July' || month === 'August' 
    || month === 'October' || month === 'December') {
        dayNum = 31;
    } 
    else if(month === 'April' || month === 'June' 
    || month === 'September' || month === 'November') {
        dayNum = 30;
    }
    else{
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    for(let i=1;i<=dayNum;i++){
        const option = document.createElement('option');
        option.textContent = i;
        collectday.append(option);
    }
    if(previousday){
        collectday.value = previousday
    }
}
populateDays(collectmonth.value)
function populateYears(){
    let year = new Date().getFullYear()
    console.log('year:', year)
    for(let i =0 ; i < 101 ; i++){
        const option = document.createElement('option');
        option.textContent = year - i;
        collectyear.append(option);
    }
}
populateYears()

collectmonth.onchange = () => {
    // console.log(collectmonth.value)
    populateDays(collectmonth.value)
}

collectyear.onchange = () => {
    populateDays(collectyear.value)
}

collectday.onchange = () => {
    previousday = collectday.value
}
// ------------------------------------------------------

// {
//     "name": "MASAI School",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
//   }

let RegisterUserDetalis =JSON.parse(localStorage.getItem('signInUserdetails')) || []

let registerationForm  = document.getElementById('myform_LogIn');
registerationForm.addEventListener('submit',()=> {
    Register(event)
});

function Register(event){
    event.preventDefault()
    console.log("here");

    let firstname = document.getElementById('SignUp_firstname_Input').value
    let lastname = document.getElementById('SignUp_lastname_Input').value;
    let emailadd = document.getElementById('SignUp_email_Input').value;
    let password = document.getElementById('LogIn_password_Input').value;
    let gender = document.getElementById('selectGender').value
    function registerData(firstname,lastname,emailadd,password,gender){
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailadd = emailadd;
        this.password = password;
        this.gender = gender;
    }
    let obj = new registerData(firstname,lastname,emailadd,password,gender)
    console.log('obj:', obj);

    let flag = false;
    for(let i=0;i<RegisterUserDetalis.length;i++){
        if(emailadd === RegisterUserDetalis[i].emailadd){
            flag = true;
            alert('Email Id already existed');
            return;
        }
    }

    RegisterUserDetalis.push(obj);
    localStorage.setItem('signInUserdetails',JSON.stringify(RegisterUserDetalis))
    alert(`${firstname} your account has been created`)
    window.location.href = "Login.html";
}
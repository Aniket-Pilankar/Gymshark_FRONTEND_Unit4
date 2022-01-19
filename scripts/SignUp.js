import showPassword from "../components/passwordsee.js"

let eyeclickIcon = document.getElementById('eyeIcon-SignUp');
eyeclickIcon.addEventListener('click',showPassword)
// document.getElementById('eyeIcon-SignUp').addEventListener('click',showPassword)

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



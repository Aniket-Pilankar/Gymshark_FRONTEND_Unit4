function showPassword(){
    // console.log("object");
    let input = document.getElementById('LogIn_password_Input');
    if(input.type === "password"){
        input.type = "text";
        // input.style.fontWeight = "100";
    }
    else{
        input.type = "password";
    }
}

export default showPassword
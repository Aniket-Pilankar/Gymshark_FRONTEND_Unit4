
function cradit(){
    document.querySelector("#details_of_cradit").innerHTML = "";
       structure() 
    }
    
        function structure(){
    
    
    let input = document.createElement("input");
    input.setAttribute("class" , "ccnumber");
    input.placeholder = "Enter Your CC Number";
    input.type = "Number";
    let div = document.createElement("div");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    input2.placeholder = "YOE";
    input3.placeholder = "CVV";
    input2.type = "Number";
    input3.type = "Number";
    div.setAttribute("class" , "cvv")
    div.append(input2 , input3)
    let btn = document.createElement("button");
    btn.textContent = "submit"
    btn.addEventListener("click" , function(){
          let cc = input.value;
          let ex =  input2.value;
           let cvv = input3.value;
    
     let store = {
         cc: cc,
         ex:ex,
         cvv:cvv
        } 
        if(cc.length > 16 || cc.length < 16){
         alert("wrong Credintial")
     }
     else{
    console.log(store)
        localStorage.setItem("storedata" , JSON.stringify(store))
        OTP()
     }
    
    })
    document.querySelector("#details_of_cradit").append(input , div , btn);
    
    }
     
    
    
    
    
    function dabit(){
        document.querySelector("#details_of_dadit").innerHTML = "";
        structure()
      function structure(){
    let input = document.createElement("input");
    input.setAttribute("class" , "ccnumber");
    input.placeholder = "Enter Your DC Number";
    input.type = "Number";
    let div = document.createElement("div");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    input2.placeholder = "YOE";
    input3.placeholder = "CVV";
    input2.type = "Number";
    input3.type = "Number";
    div.setAttribute("class" , "cvv")
    div.append(input2 , input3)
    let btn = document.createElement("button");
    btn.textContent = "submit"
    btn.addEventListener("click" , function(){
          let cc = input.value;
          let ex =  input2.value;
           let cvv = input3.value;
    
     let store = {
         cc: cc,
         ex:ex,
         cvv:cvv
        } 
        if(cc.length > 16  || cc.length < 16){
         alert("wrong Credintial only 16 degit")
     }
     else{
    console.log(store)
        localStorage.setItem("storedata" , JSON.stringify(store))
        OTP()
     }
    
         
    
    
    })
    document.querySelector("#details_of_dadit").append(input , div , btn)
    
    }
    }
    
    
    
    function paypal(){
     document.querySelector("#pay").innerHTML = "";
    
    
        let input = document.createElement("input");
    input.setAttribute("class" , "ccnumber");
    input.placeholder = "Enter Your Number Paypal number";
    input.type = "Number";
    let btn = document.createElement("button");
    btn.textContent = "submit"
    btn.addEventListener("click" , function(){
          let cc = input.value;
    
     let store = {
         cc: cc,
        } 
        if(cc.length > 10 || cc.length < 10){
         alert("wrong Credintial Only 10 digit")
     }
     else{
    console.log(store)
        localStorage.setItem("storedata" , JSON.stringify(store))
        OTP()
     }
    
         
    
    
    })
    document.querySelector("#pay").append(input , btn);
    
    
    }
    
    
    
    
    function OTP(){
        document.querySelector("#OTP").innerHTML = "";
    
        let input =  document.createElement("input");
        input.setAttribute("id" , "OTPinput");
        input.placeholder = "Enter OTP here";
        let btn = document.createElement("button");
        btn.textContent = "submit";
        document.querySelector("#OTP").append(input , btn);
    
        
            btn.addEventListener("click" ,function(){
               let inputotp = input.value;
             if(inputotp == "1234"){   
                Swal.fire(`ORDER PLACES SUCCESSFULLY`, `ORDER ID ${ Math.floor(Math.random() * 100)}`);
                setTimeout(function(){
                    //  alert("return to home page");
                window.location.href = "index.html"
                } , 2000)
               
             } 
             
            else{
                alert("use OTP 1234")
            }
            })
    }

 let pricedata = JSON.parse(localStorage.getItem("price"))
document.querySelector("#rs").textContent = "TOTAL PAYMENT - "+"$ " + pricedata.total;
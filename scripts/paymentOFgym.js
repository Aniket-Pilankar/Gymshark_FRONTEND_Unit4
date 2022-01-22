document.querySelector("#submitbtn").addEventListener("click" , myfunction)
var  detailes = JSON.parse(localStorage.getItem("addressOFgym")) || [];



let obj =  {};
let obj2;
 let total = 0;
  function myfunction(event){
    event.preventDefault()
    var fname = document.querySelector("#first").value;
    var lname = document.querySelector("#last").value;
    var address = document.querySelector("#add").value;
    var phone= document.querySelector("#phone").value;
    var city = document.querySelector("#city").value;
    var country = document.querySelector("#country").value;

var obj = {
    fname:fname,
    lname :lname,
    address: address,
    phone: phone,
    city: city,
    country:country
}
detailes.push(obj)
console.log(obj)
  localStorage.setItem("addressOFgym" , JSON.stringify(detailes))




   
  if( obj.fname == "" || obj.lname  ==  "" ||  obj.address  ==  "" || obj.phone ==  "" || obj.city  ==  "" || obj.country  ==  ""){
       alert("fill carrect information")
       
  }
  else{

    window.location.href = "pay.html";
  }
  }
 


///for product in cart section 

// let TotalAmount_DataGot = JSON.parse(localStorage.getItem('TotalAmountOfCart'))
// console.log('TotalAmount_DataGot:', TotalAmount_DataGot);

let Data_of_Products = JSON.parse(localStorage.getItem('ItemsAddedToGymSharkBag'))
console.log('Data_of_Products:', Data_of_Products);



 showdata(Data_of_Products)
function showdata(data){
document.querySelector("#childdivmain").innerHTML ="";
data.forEach(element => {
   let products_in_cart = document.createElement("div");
   products_in_cart.setAttribute("id" , "products_in_cart");
   let product_img = document.createElement("div");
   product_img.setAttribute("id" , "product_img");
   let img = document.createElement("img");
   img.setAttribute("src" , element.image1)
   product_img.append(img)
   let product_name_or_size = document.createElement("div");
   product_name_or_size.setAttribute("id" , "product_name_or_size");
   let name = document.createElement("h3");
   name.textContent = element.title;
   let size = document.createElement("p");
   size.textContent = "Size :" + " "+element.description_points1;
   let rs = document.createElement("p");
   rs.textContent ="$" + Number(element.price) +".00";
   let price = document.createElement("div")
   price.setAttribute("id" , "price")


 product_name_or_size.append(name , size);
 price.append(rs);

 products_in_cart.append(product_img , product_name_or_size , price);
 document.querySelector("#childdivmain").append(products_in_cart)


 total+= +element.price;
})

}


//for coupen code
document.querySelector("#sub").textContent = "USD $" + total;
document.getElementById("price_id").textContent ="USD $" + total;

document.getElementById("cupon").addEventListener("click" , function(){
 let value_of_input= document.getElementById("offer_input").value;


 if(value_of_input == "masai30"){
    let all = total*30/100;
   let ans = total - all;


obj2 = {
  total : ans,
}
console.log(obj2)
localStorage.setItem("price" , JSON.stringify(obj2));
 document.getElementById("price_id").textContent ="USD $" + ans; 
 }
 else{
  obj2 = {
    total : total,
}
console.log(obj2)
localStorage.setItem("price" , JSON.stringify(obj2));
 }

})
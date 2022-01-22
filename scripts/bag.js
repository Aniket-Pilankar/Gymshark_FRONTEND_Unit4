
import { shownav, crouzel } from "../components/navbar.js"
import footer from "../components/footer.js"
// crouzel()
document.getElementById("navbar12").innerHTML = shownav()
document.getElementById("main_footer_div").innerHTML = footer()


// let fake = JSON.parse(localStorage.getItem('TotalAmountOfCart'))
// console.log('fake:', typeof(fake))

let GetItemfromInsidePage = JSON.parse(localStorage.getItem('ItemsAddedToGymSharkBag')) || []
console.log('GetItemfromInsidePage:', GetItemfromInsidePage)
// console.log('GetItemfromInsidePage:', GetItemfromInsidePage.length)

let Total_Price_Of_all_Products = 0;
// let Total_Price_Of_all_Products_Array = [];
let Individual_price_of_Product = 0;

display(GetItemfromInsidePage)
function display(arr){
    document.querySelector('tbody').textContent = null
    arr.map((elem,index) => {

        // let Total_Price_Of_all_Products = 0;

        let {image1,title,subtitle,price} = elem

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        let leftDiv1 = document.createElement('div');

        let leftimgDiv = document.createElement('div');
        let leftDetailsDiv = document.createElement('div');

        leftDiv1.setAttribute('id','leftDiv1');
        leftimgDiv.setAttribute('id','leftimgDiv');
        leftDetailsDiv.setAttribute('id','leftDetailsDiv');

        let leftimage = document.createElement('img');
        leftimage.src = image1;
        leftimage.style.width = "100%"

        let title_p1 = document.createElement('p')
        let size_p2 = document.createElement('p')
        let cat_p3 = document.createElement('p')
        let price_p4 = document.createElement('p')

        title_p1.textContent = title;
        size_p2.textContent = `Size M`;
        cat_p3.textContent = subtitle;
        price_p4.textContent =`$${price} USD` ;

        leftDetailsDiv.append(title_p1,size_p2,cat_p3,price_p4)

        leftimgDiv.append(leftimage);
        leftDiv1.append(leftimgDiv,leftDetailsDiv);
        td1.append(leftDiv1)

        // --------------------------------------------------MID DIV WORKING
        let quantityOfEachProduct = 1;

        let MidMainDiv = document.createElement('div');

        let MidMinusDiv = document.createElement('div');
        let MidCountDiv = document.createElement('div');
        let MidPlusDiv = document.createElement('div');
        let RemoveContent = document.createElement('p')

        MidMainDiv.setAttribute('id','MidMainDiv')
        MidMinusDiv.setAttribute('id','MidMinusDiv')
        MidCountDiv.setAttribute('id','MidCountDiv')
        MidPlusDiv.setAttribute('id','MidPlusDiv')
        RemoveContent.setAttribute('id','RomoveOption')

        MidMinusDiv.textContent = "-";
        MidCountDiv.textContent = quantityOfEachProduct;
        MidPlusDiv.textContent = "+";
        RemoveContent.textContent = "Remove";
// -----------------------------------------------------------------------TOTAL AMOUNT
        let putCount = document.getElementById('TotalAmountOfProduct');
        // let sum = 0;
        Individual_price_of_Product += +price
        putCount.textContent = Individual_price_of_Product

        MidPlusDiv.addEventListener('click',()=>{
            Increase_QuantCount()
        })
        function Increase_QuantCount(){
            quantityOfEachProduct = quantityOfEachProduct + 1;
            // console.log('quantityOfEachProduct_Plus:', quantityOfEachProduct)
            MidCountDiv.textContent = quantityOfEachProduct;
            // console.log(SubTotalPrice.textContent);
            // SubTotalPrice.textContent += +price
            let a = +SubTotalPrice.textContent;
            let b = +price;

            
            SubTotalPrice.textContent = a + b
            // console.log(typeof(a));
            // console.log(typeof(b));
            console.log(SubTotalPrice.textContent);
            // Individual_price_of_Product = SubTotalPrice.textContent;
            // console.log('Individual_price_of_Product:', Individual_price_of_Product)

            Total_Price_Of_all_Products = quantityOfEachProduct * +elem.price;
            putCount.textContent = Total_Price_Of_all_Products ;
            localStorage.setItem('TotalAmountOfCart',JSON.stringify(Total_Price_Of_all_Products))
            // putCount.textContent = Total_Price_Of_all_Products + Number(elem.price)
        }

        MidMinusDiv.addEventListener('click',() => {
            Decrease_QuantCount()
        })
        function  Decrease_QuantCount(){
            if(quantityOfEachProduct > 1){
                quantityOfEachProduct--;
                console.log('quantityOfEachProduct_Minus:', quantityOfEachProduct)
                MidCountDiv.textContent = quantityOfEachProduct;
                let a = +SubTotalPrice.textContent;
                let b = +price

                // Individual_price_of_Product = a - b;
                
                SubTotalPrice.textContent = a - b
                // console.log(typeof(a));
                // console.log(typeof(b));
                console.log(SubTotalPrice.textContent);
                // Individual_price_of_Product = SubTotalPrice.textContent;
                // console.log('Individual_price_of_Product:', Individual_price_of_Product)
                Total_Price_Of_all_Products = +SubTotalPrice.textContent;
            putCount.textContent = Total_Price_Of_all_Products ;
            localStorage.setItem('TotalAmountOfCart',JSON.stringify(Total_Price_Of_all_Products))
            }
        }

        RemoveContent.addEventListener('click',() => {
            RemoveElements(index,elem.price)
        })

        function RemoveElements(index,price){
            // console.log("here");
            GetItemfromInsidePage.splice(index,1)
            localStorage.setItem('ItemsAddedToGymSharkBag',JSON.stringify(GetItemfromInsidePage))
            Individual_price_of_Product -= (+price + +price)
        putCount.textContent = Individual_price_of_Product ;
        // localStorage.setItem('TotalAmountOfCart',JSON.stringify(Individual_price_of_Product))
            display(GetItemfromInsidePage)
        }

        MidMainDiv.append(MidMinusDiv,MidCountDiv,MidPlusDiv)        
        td2.append(MidMainDiv,RemoveContent)
// ----------------------------------------------------------RIGHT DIV  

        let RightMainDiv = document.createElement('div');

        let SubTotalPrice = document.createElement('p');

        RightMainDiv.setAttribute('id','RightMainDiv');
        SubTotalPrice.setAttribute('id','SubTotalPrice')

        SubTotalPrice.textContent = price;

        RightMainDiv.append(SubTotalPrice)
        td3.append(RightMainDiv)
// ----------------------------------------------------------Footer
        



        tr.append(td1,td2,td3)
        document.querySelector('tbody').append(tr);


        localStorage.setItem('TotalAmountOfCart',JSON.stringify(Individual_price_of_Product))
    })

}

document.getElementById('CheckOutButton').addEventListener('click',GoTo_PaymentPage)

function GoTo_PaymentPage(){
    window.location.href = "paymentOfgym.html"
}
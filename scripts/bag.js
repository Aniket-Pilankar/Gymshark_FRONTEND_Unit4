
import { shownav, crouzel } from "../components/navbar.js"
import footer from "../components/footer.js"

document.getElementById("navbar12").innerHTML = shownav()
document.getElementById("main_footer_div").innerHTML = footer()
crouzel()


let data = [
    {
        name: "Flex_SHORTS_Gymshark_Womens",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/FLEXSHORTSBLACKCHARCOAL.A-Edit_BK_885x.jpg?v=1601992419",
        price: 35,
        size: "M",

    },
    {
        name: "VITAL SEAMLESS 2.0 SHORTS",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/VITALSEAMLESSSHORTB1A4J-BBF3-XS-AI1BLACKMARL6.A_GB_EDIT_GB_BK_9ab613b6-f6d6-4c0f-8dc8-dd8f9a2eb64b_885x.jpg?v=1638156298",
        price: 40,
        size: "S",

    },
    {
        name: "VITAL SEAMLESS 2.0 LEGGINGS",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/VITALSEAMLESSLEGGINGSBLACK27.A_ZH_ZH_885x.jpg?v=1638156302",
        price: 50,
        size: "L",

    },
    {
        name: "VITAL SEAMLESS 2.0 LEGGINGS",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/VITALSEAMLESSLEGGINGSBLACK27.A_ZH_ZH_885x.jpg?v=1638156302",
        price: 10,
        size: "L",

    }

];

localStorage.setItem("CartData", JSON.stringify(data));

let apendData = JSON.parse(localStorage.getItem("CartData"));

display(apendData)

function display(apendData) {
    var elements = ``;
    var top = 0
    apendData.forEach(({ name, imageLink, price, size }, i) => {


        //console.log('name, imageLink, price, size: ', name, imageLink, price, size);

        elements += `
                <tr>
                    <td>
                        <div id="name-img">
                            <div id="imgdiv">
                                <img id="proImg"
                                    src=${imageLink}
                                    alt="">
                            </div>
                            <div id="info">
                                <h3 id="proName">${name}</h3>
                                <p id="size">Size:${size}</p>
                                <span id="price">$ ${price} USD</span>
                               
                            </div>
                        </div>
                    </td>
                    <td>
                        <div id="quantity">
                            <button id= "dec">-</button>
                             <h1 id="quant">1</h1>
                            <button id ="inc">+</button>
                        </div>
                    </td>
                    <td id="tprice">$ ${price} USD</td>
                </tr>`



        top += price;
        let y = document.querySelector("tbody")
        document.getElementById("totalAmnt").innerText = "$ " + top + " USD"
        y.innerHTML = elements
    });
}


function decreament(i) {



}
function increament(i) {

}




let data = [
    {
        name: "Flex_SHORTS_Gymshark_Womens",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/FLEXSHORTSBLACKCHARCOAL.A-Edit_BK_885x.jpg?v=1601992419",
        price: 35,
        size: "M"
    },
    {
        name: "VITAL SEAMLESS 2.0 SHORTS",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/VITALSEAMLESSSHORTB1A4J-BBF3-XS-AI1BLACKMARL6.A_GB_EDIT_GB_BK_9ab613b6-f6d6-4c0f-8dc8-dd8f9a2eb64b_885x.jpg?v=1638156298",
        price: 40,
        size: "S"
    },
    {
        name: "VITAL SEAMLESS 2.0 LEGGINGS",
        imageLink: "https://cdn.shopify.com/s/files/1/0156/6146/products/VITALSEAMLESSLEGGINGSBLACK27.A_ZH_ZH_885x.jpg?v=1638156302",
        price: 50,
        size: "L"
    }

];

localStorage.setItem("CartData", JSON.stringify(data));

let apendData = JSON.parse(localStorage.getItem("CartData"));
//display(apendData)
function display(apendData) {
    apendData.forEach(({ name, imageLink, price, size }) => {

        //     let x = `<table>
        //     <thead id="rowhead">
        //         <tr>
        //             <th id="rh1">ITEM</th>
        //             <th id="rh2">QUANTITY</th>
        //             <th id="rh3">SUBTOTAL</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>
        //                 <div id="name-img">
        //                     <div id="imgdiv">
        //                         <img id="proImg"
        //                             src=${imageLink}
        //                             alt="">
        //                     </div>
        //                     <div id="info">
        //                         <h3 id="proName">${name}</h3>
        //                         <p id="size">Size:${size}</p>
        //                         <span id="price">$ ${price} USD</span>
        //                     </div>
        //                 </div>
        //             </td>
        //             <td>
        //                 <div id="quantity">
        //                     <button>-</button>
        //                     <h1 id="quant">0</h1>
        //                     <button>+</button>
        //                 </div>
        //             </td>
        //             <td id="tprice">$ 125 USD</td>
        //         </tr>
        //     </tbody>
        //     <tfoot>
        //         <tr>
        //             <td><a href="">Continue Shopping</a></td>
        //             <td>Total</td>
        //             <td>$ 125 USD</td>
        //         </tr>
        //     </tfoot>
        // </table>`

        // let y = document.getElementById("conatiner")
        // y.innerHTML=x
    });
}

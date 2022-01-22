function shownav(){
    return ` <div id="upper_nav">
    <a href="/" class="upper_nav_component"><i class="far fa-user"></i> My Account</a>
    <a href="/"  class="upper_nav_component">Blog</a>
    <a href="/"  class="upper_nav_component">Newslatter</a>
    <a href=""  class="upper_nav_component">Help</a>
    <select name="" id="country">
        <option value="USA">United state</option>
        <option value="England">England</option>
        <option value="india">india</option>
        <option value="australia">australia</option>
    </select>
    </div>
    <div id="navbar">
    <a href="../index.html"> <img id="logo" src="https://cdn.shopify.com/s/files/1/0156/6146/files/icon-200_767692d6-7327-4714-8ce6-69826dd054a5_72x72.png?v=1510932724" alt=""></a>

      <div>
          <div class="dropdown">
                <a href="/" class="nav_components">womens</a>
             <div class="dropdown-content">
                 <div>
                 <div class="drop_content">
                     <div>
                         <h3 class="heading_drop">TRANDING</h3>
                         <a href="">KK Fit Collection</a>
                         <a href="">New Releases</a>
                         <a href="">E-Gift Card</a>
                         <a href="">Matching Sets</a>
                         <a href="">Must-Haves</a>
                         <a href="">Loungewear</a>
                         <a href="">Running</a>
                     </div>
                     <div>
                         <h3  class="heading_drop">PRODUCTS</h3>
                         <a href="">All Products</a>
                         <a href="">Crop Tops</a>
                         <a href="">Hoodies & Jackets</a>
                         <a href="">Shorts</a>
                         <a href="">Underwear</a></div>
                     <div>
                         <h3  class="heading_drop">COLLECTION</h3>
                         <a href="">Vital</a>
                         <a href="">Adapt</a>
                         <a href="">Basic Essentials</a>
                         <a href="">Flex</a>
                         <a href="">Seamless</a></div>
                     <div>
                         <h3  class="heading_drop">ACCESSORIES</h3>
                         <a href="">All Accessories</a>
                         <a href="">Equipment</a>
                         <a href="">Socks</a>
                         <a href="">Headwear</a>
                         <a href="">Bottles</a></div>
                 </div>
                <div id="drop_img">
                    <h2 class="heading_drop2">FEATURED</h2>
                 <div class="drop_img_url" id="women-drop">
                     <h3 class="catalog">NEW RELEASED</h3>
                 </div>
                 <div class="drop_img_url" id="women-drop2">
                     <h3 class="catalog">MUST HAVED</h3>
                 </div>
                </div> 
                 </div>
                 
               </div>
          </div>
           
          <div class="dropdown">
             <a href="../category.html" class="nav_components" >mens</a>
          <div class="dropdown-content" id="mens">
             <div>
                 <div class="drop_content">
                 <div>
                         <h3 class="heading_drop">TRANDING</h3>
                         <a href="">KK Fit Collection</a>
                         <a href="">New Releases</a>
                         <a href="">E-Gift Card</a>
                         <a href="">Matching Sets</a>
                         <a href="">Must-Haves</a>
                         <a href="">Loungewear</a>
                         <a href="">Running</a>
                     </div>
                     <div>
                         <h3  class="heading_drop">PRODUCTS</h3>
                         <a href="">All Products</a>
                         <a href="">Crop Tops</a>
                         <a href="">Hoodies & Jackets</a>
                         <a href="">Shorts</a>
                         <a href="">Underwear</a></div>
                     <div>
                         <h3  class="heading_drop">COLLECTION</h3>
                         <a href="">Vital</a>
                         <a href="">Adapt</a>
                         <a href="">Basic Essentials</a>
                         <a href="">Flex</a>
                         <a href="">Seamless</a></div>
                     <div>
                         <h3  class="heading_drop">ACCESSORIES</h3>
                         <a href="">All Accessories</a>
                         <a href="">Equipment</a>
                         <a href="">Socks</a>
                         <a href="">Headwear</a>
                         <a href="">Bottles</a></div>
                 </div>
                <div id="drop_img">
                    <h2 class="heading_drop2">FEATURED</h2>
                 <div class="drop_img_url" id="women-drop">
                     <h3 class="catalog">NEW RELEASED</h3>
                 </div>
                 <div class="drop_img_url" id="women-drop2">
                     <h3 class="catalog">MUST HAVED</h3>
                 </div>
                </div> 
                 </div>
            </div>
       </div>
       <div class="dropdown">
         <a href="/" class="nav_components">ACCESSORIES</a>
      <div class="dropdown-content" id="acces">
         <div>
             <div class="drop_content">
                 <div>
                     <h3 class="heading_drop">SHOP ALL</h3>
                     <a href="">all products</a>
                 </div>
                 <div>
                     <h3  class="heading_drop">PRODUCTS</h3>
                     <a href="">Bags</a>
                     <a href="">Socks</a>
                     <a href="">Headwear</a>
                     <a href="">Equipment</a>
                     <a href="">Bottles</a></div>
                 <div>     
                     <h3  class="heading_drop">UNDERWEAR</h3>
                     <a href="">Womens Underwear</a>
                     <a href="">Mens Underwear</a>
                      </div>
             </div>
            <div id="drop_img2">
                 <h3 class="catalog" id="tranding">TRANDING APP</h3>
            </div> 
             </div>
        </div>
   </div>
      </div>
      <div>
     <a href="../search.html" class="icons"><i  class="fas fa-search"></i></a>
     <a href=""class="icons"><i class="far fa-heart"></i></a>
     <a href="../Login.html" class="icons"> <i class="far fa-user"></i></a>
     <a href="../bag.html" class="icons" ><i id="cart" class="fas fa-shopping-bag id="ClickOnBag""></i></a>
 
      </div>     
    </div>
    <div id="crouzel_sec">
     <i class="fas fa-chevron-left"></i> 
     <div  id="crouzel"></div>
      <i class="fas fa-chevron-right"></i>
    </div>`
}

function crouzel(){
    let arr = [
    "Unlock exclusive deals, our latest drops, and more! Sign up for texts.",
    "Shop Gymshark with Afterpay, pay in 4 installments.",
    " Free Standard Shipping When You Spend $75",
    "Shop now. Pay over time with Klarna.",
    "Unlock exclusive deals, our latest drops, and more! Sign up for texts."
]

let p = document.createElement("p");
document.querySelector("#crouzel").append(p)
p.textContent = arr[0];
let i = 0;

setInterval(function(){
    if(i === arr.length){
        i = 0
    }
    p.textContent = arr[i]
    document.querySelector("#crouzel").append(p)
   i++;
   } , 2000)


}


export {shownav , crouzel}
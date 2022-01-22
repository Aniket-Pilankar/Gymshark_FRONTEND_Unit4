import { shownav, crouzel } from "../components/navbar.js";
document.querySelector("#navbar_full").innerHTML = shownav()
crouzel()
import footer from "../components/footer.js"
document.querySelector("#main_footer_div").innerHTML = footer()

// ---------------
let AddItemsToBag = JSON.parse(localStorage.getItem('ItemsAddedToGymSharkBag')) || []

let insidepage_id = JSON.parse(localStorage.getItem('IdForSinglePageProduct'));
console.log('insidepage_id:', insidepage_id)

import getdatafromId from '../components/fetchdataforinsidepage.js'
console.log('getdatafromId:', getdatafromId)

async function getSinglepageData() {
    let res = await getdatafromId(insidepage_id)
    // console.log('res:', res)
    appendDataToInsidePage(res)
    // let response = await res;
    // console.log('response:', response)
}
getSinglepageData()


function appendDataToInsidePage(elem) {
    console.log('elem:', elem)

    let { image1, image2, image3, image4, image5, image6, color, price, title, subtitle } = elem

    let img1 = document.getElementById('img1');
    img1.src = image1
    let img2 = document.getElementById('img2');
    img2.src = image2
    let img3 = document.getElementById('img3');
    img3.src = image3
    let img4 = document.getElementById('img4');
    img4.src = image4
    let img5 = document.getElementById('img5');
    img5.src = image5
    let img6 = document.getElementById('img6');
    img6.src = image6

    let small_img1 = document.getElementById('img2_1')
    small_img1.src = image1;
    let small_img2 = document.getElementById('img2_2')
    small_img2.src = image2;
    let small_img3 = document.getElementById('img2_3')
    small_img3.src = image3;
    let small_img4 = document.getElementById('img2_4')
    small_img4.src = image4;
    let small_img5 = document.getElementById('img2_5')
    small_img5.src = image5;
    let small_img6 = document.getElementById('img2_6')
    small_img6.src = image6;

    let titleName = document.getElementById('insidepage_title')
    titleName.textContent = title;

    let priceName = document.getElementById('insidepage_price')
    priceName.textContent = price;

    let ColorName = document.getElementById('colors');
    ColorName.textContent = color;

    let subTitle = document.getElementById('subTitle');
    subTitle.textContent = subtitle;

    document.getElementById('openbox').addEventListener('click', () => {
        showDescriptionInsidePage(elem)
    })
    document.getElementById('cartInsidepage').addEventListener('click',() => {
        ADDBagPage(elem)
    });
}
let flag = false;
function showDescriptionInsidePage(elem) {
    console.log("object");
    
    let openbox = document.getElementById('hideDisplayWhenNotClicked');
    let ccc = document.getElementById('openbox');
    if (flag === false) {
        flag = true;
        display()
        function display(){
            
            ccc.style.border= "2px solid blue";
            ccc.style.borderRadius = "5px"

            let { description_title, description_para, description_points1, description_points2, description_points3, description_points4, description_points5, description_points6, description_points7, description_points8, description_points9, description_points10 } = elem;

        
        openbox.style.display = "block"

        let DesTitle = document.getElementById('description_title')
        let DesPara = document.getElementById('description_para')
        let DesP1 = document.getElementById('description_points1')
        let DesP2 = document.getElementById('description_points2')
        let DesP3 = document.getElementById('description_points3')
        let DesP4 = document.getElementById('description_points4')
        let DesP5 = document.getElementById('description_points5')
        let DesP6 = document.getElementById('description_points6')
        let DesP7 = document.getElementById('description_points7')
        let DesP8 = document.getElementById('description_points8')
        let DesP9 = document.getElementById('description_points9')
        let DesP10 = document.getElementById('description_points10')

        DesTitle.textContent = description_title;
        DesPara.textContent = description_para;
        DesP1.textContent = description_points1;
        DesP2.textContent = description_points2;
        DesP3.textContent = description_points3;
        DesP4.textContent = description_points4;
        DesP5.textContent = description_points5;
        DesP6.textContent = description_points6;
        DesP7.textContent = description_points7;
        DesP8.textContent = description_points8;
        DesP9.textContent = description_points9;
        if (description_points9 !== "") {
            DesP9.textContent = description_points9;
        }
        else {
            DesP9.style.display = "none"
        }
        if (description_points10 !== "") {
            DesP10.textContent = description_points10;
        }
        else {
            DesP10.style.display = "none"
        }
        }
    }
    else{
        openbox.style.display = "none";
        ccc.style.border= "none";
        flag = false;
    }
}



function ADDBagPage(elem){
    // console.log('elem123:', elem)
    let CheckbagSameItemCount = 0 
    for(let i=0 ; i<AddItemsToBag.length;i++){
        if(elem.id === AddItemsToBag[i].id){
            CheckbagSameItemCount += 1;
            break;
        }
    }
    if(CheckbagSameItemCount === 0){
        AddItemsToBag.push(elem);
        localStorage.setItem('ItemsAddedToGymSharkBag',JSON.stringify(AddItemsToBag))
        console.log('AddItemsToBag:', AddItemsToBag)
    }
    else{
        alert('Item already added to Bag');
    }

}

// document.getElementById('ClickOnBag').addEventListener('click',GoToBag)
// function GoToBag(){
//     window.location.href = "../bag.html"
//     // console.log("Yessss");
// }
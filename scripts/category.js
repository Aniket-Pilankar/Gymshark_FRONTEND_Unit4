import { shownav, crouzel } from "../components/navbar.js";
document.querySelector("#navbar_full").innerHTML = shownav()
crouzel()
import footer from "../components/footer.js"
document.querySelector("#main_footer_div").innerHTML = footer()


async function getData(){

    let res = await fetch(`http://127.0.0.1:5555/api/productsMens`,{
        method:'GET',
        headers:{
            'Content-Type':'appliation/json'
        }
    });
    console.log('res:', res)

    let response = await res.json();
    console.log('response:', response)
    appendData(response)
}
getData()


function appendData(arr){
    arr.map((elem) => {

        let {id,image1,title,color,price} = elem
        console.log('image1,title,color,price:', image1,title,color,price)

        let maindiv = document.createElement('div');
        maindiv.setAttribute('class','category_maindiv');

        let Category_imageDiv = document.createElement('div');
        let Category_midDiv = document.createElement('div');
        let Category_bottomDiv = document.createElement('div');

        let Category_midDivText_1 = document.createElement('div');
        let Category_midDivText_2 = document.createElement('div');

        Category_imageDiv.setAttribute('class','Category_imageDiv')
        Category_midDiv.setAttribute('class','Category_midDiv')
        Category_bottomDiv.setAttribute('class','Category_bottomDiv')

        let Category_image = document.createElement('img');
        let Category_title = document.createElement('p');
        let Category_color = document.createElement('span');
        let Category_price = document.createElement('p');

        
        Category_image.src = image1;
        Category_title.textContent = title;
        Category_color.textContent = color;
        Category_price.textContent = price;
        
        Category_image.style.height = "100%";
        Category_image.style.width = "100%";
        Category_color.style.fontSize = "small";
        Category_price.setAttribute('class','customizePrice')
        Category_midDivText_1.setAttribute('class','Category_midDivText_1')

        Category_imageDiv.append(Category_image);
        Category_midDivText_1.append(Category_title)
        Category_midDivText_2.append(Category_price)
        Category_midDiv.append(Category_midDivText_1,Category_midDivText_2)
        Category_bottomDiv.append(Category_color);

        maindiv.addEventListener('click',() => {
            sendIdToInsidePage(id)
        })

        maindiv.append(Category_imageDiv,Category_midDiv,Category_bottomDiv)        

        document.getElementById('containerOfData').append(maindiv)
    })
}

function sendIdToInsidePage(id){
    // console.log('id:', id)
    localStorage.setItem('IdForSinglePageProduct',JSON.stringify(id));
    window.location.href = "insidepage.html";
}
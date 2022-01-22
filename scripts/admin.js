document.getElementById('addProductSubmit').addEventListener('click',AddProduct);

async function AddProduct(){
    let compulsory_id_required = document.getElementById('id').value;
    if(compulsory_id_required === ""){
        alert('Please provide Id of the product needed to be added');
        return;
    }
    try{
        let data = {
            id:document.getElementById('id').value,
            title:document.getElementById('title').value,
            subtitle:document.getElementById('subtitle').value,
            image1:document.getElementById('image1').value,
            image2:document.getElementById('image2').value,
            image3:document.getElementById('image3').value,
            image4:document.getElementById('image4').value,
            image5:document.getElementById('image5').value,
            image6:document.getElementById('image6').value,
            color:document.getElementById('color').value,
            price:document.getElementById('price').value,
            description_title:document.getElementById('description_title').value,
            description_para:document.getElementById('description_para').value,
            description_points1:document.getElementById('description_points1').value,
            description_points2:document.getElementById('description_points2').value,
            description_points3:document.getElementById('description_points3').value,
            description_points4:document.getElementById('description_points4').value,
            description_points5:document.getElementById('description_points5').value,
            description_points6:document.getElementById('description_points6').value,
            description_points7:document.getElementById('description_points7').value,
            description_points8:document.getElementById('description_points8').value,
            description_points9:document.getElementById('description_points9').value,
            description_points10:document.getElementById('description_points10').value,

        }
        data = JSON.stringify(data)
        // console.log('data:', data)
        let res = await fetch('http://127.0.0.1:5555/api/productsMens',{
            
            method:'POST',
            body:data,
            headers:{
                'Content-Type':'application/json'
            }
        })
        
        let response = await res.json()
        console.log('response:', response)
    }
    catch(error){
        console.log('error:', "error in Addproduct function");

    }
}
// --------------------------------------------------------------------------------------------------

// document.getElementById('DeleteProductSubmit').addEventListener('click',DeleteProduct)

async function DeleteProduct(){
    
try{
    let Delete_id = document.getElementById('Delete_id').value;
    if(Delete_id === ""){
        alert('Enter valid id of product to be deleted');
        return;
    }
    console.log('Delete_id:', Delete_id);

    let res = await fetch(`http://127.0.0.1:5555/api/productsMens/${Delete_id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })

    let response = await res.json()
    console.log('response:', response)
}
catch(error){
    console.log('error:', "error in the DeleteProduct function")

}

}
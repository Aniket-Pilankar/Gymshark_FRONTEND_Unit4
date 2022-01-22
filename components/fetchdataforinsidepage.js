async function getdatafromId(id){
    try{
        let res = await fetch(`http://127.0.0.1:5555/api/productsMens/${id}`)
    let data = await res.json();
    // console.log('data:', data)
    return data;
    }
    catch(error){
        console.log('error:', error);

    }
}

export default getdatafromId
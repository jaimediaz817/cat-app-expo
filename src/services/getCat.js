const getCat = async (breedId) => {
    let url = "";

    if (!breedId) {
        url = "https://api.thecatapi.com/v1/images/search";
    } else {
        url = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId;
    }     

    let res = await fetch(url);
    const [data] = await res.json();

    let { url: urlImage, breeds: [breed]} = data;

    console.log("UN SOLO GATO: ", urlImage, breed); 
    /* 
        BREED es un objeto que puede llegar o no vacio
    */
   if (!breed) {
       breed = {
           id: 0,
           name: "Random"
       }
   }

    const objCat = {
        image: urlImage,
        breed: breed
    }

    return objCat;
}

export default getCat;
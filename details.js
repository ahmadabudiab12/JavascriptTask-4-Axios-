
async function getproduct() {
    const urlparams = new URLSearchParams(window.location.search);
    const id = urlparams.get('id');

    try {
        const response = await axios(`https://dummyjson.com/products/${id}`);
        const data = response.data;
        const {title,description,discountPercentage,thumbnail,stock,rating} = data;

        console.log(response);

        document.querySelector(".title").textContent= title;
        document.querySelector(".desc").textContent= description;
        document.querySelector("img").src=thumbnail;
        document.querySelector(".discount").textContent= discountPercentage;
        document.querySelector(".rating").textContent= rating;

    
    } catch (error) {
        console.error(error);
    }
}

getproduct();

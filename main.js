async function getproducts() {

  try{
  const response = await axios("https://dummyjson.com/products");
  const data = response.data;
  const products = data.products;
  console.log(products);

 

  const results = products.map(function (product) {
      return ` 
      <div class="product">
      <div class="pic"><img src=${product.thumbnail}></div>
      <div class="details">
      <h3>${product.title}</h3>
      <span> price : ${product.price}</span>
      <a href="details.html?id=${product.id}">details</a>
      
      </div>
      
      </div>

`
    }).join('');

  document.querySelector(".products").innerHTML = results;
  }catch (error) {
    console.error(error);
  }

}

getproducts();


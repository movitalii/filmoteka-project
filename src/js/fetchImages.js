import ApiService from "./api-service";
import onCart from "./cart";

const apiService = new ApiService ();

apiService.fetchImage().then(data => {
    addArticleImage(data);
})

function addArticleImage(data) { 
    // console.log(data.results);
    const cart = data.results.map(result => onCart(result)).join("");
    document.querySelector(`body`).insertAdjacentHTML("beforeend", cart)
     
    
     
 }
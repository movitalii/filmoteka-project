import ApiService from "./api-service";
import onCart from "./cart";

const apiService = new ApiService ();

apiService.fetchImage().then(data => {

})
console.log(document.querySelector(`body`))
function addArticleImage(data) { 
 
    const cart = data.results.map(result => onCart(result)).join("");
     refs.imageGallery.insertAdjacentHTML("beforeend", cart)
     const light = new SimpleLightbox(`.photo-card a`, { captionsData: 'alt',captionDelay: 250,});
    
    
     
 }
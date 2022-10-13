
import ApiService from './api-service';
import addArticleImage from './fetchImages';
import { saveInfo, getInfo, removeInfo } from './storage_api';

const FUND_NAME = 'genre_card';

const searchFormRef = document.querySelector('#form-search');
const errorMessage = document.querySelector('.error-notification');
const input = document.querySelector(`.form-group__input`)

const apiService = new ApiService();

searchFormRef.addEventListener('submit', onFormSubmit) ;

console.log(searchFormRef);

function onFormSubmit(e) {
  e.preventDefault();
 
  apiService.query = e.currentTarget.elements.searchQuery.value;  
   
      

    apiService.fetchFundFilms().then(data => {
        
   if(data.results.length === 0){
    // input.value = '';
       
 document.querySelector('.error-notification').insertAdjacentHTML('beforeend', 'Search result not successful. Enter the correct movie name.');
    
 apiService.fetchImage().then(data => {

  setTimeout(() => {
    if(document.querySelector(`.error-notification`)) {
      document.querySelector('.error-notification').innerHTML = '';
      addArticleImage(data); 
  saveInfo(data.page, data.results); 
    }
  }, 2000);
  
});
 
//  console.log(cartError)
    return;
   }
      // console.log('ok', data.results.length);
      cleanView()
    addArticleImage(data); 
   });
  
<<<<<<< HEAD
    // console.log('image', data);
    const cart = data.results.map(result => {
      let genresArr = [];
      result.genre_ids.forEach(genreID => {
        // console.log(genreID)
        genres.forEach(genOBJ => {
          // console.log(genOBJ)
          if (genreID === genOBJ.id) {
            genresArr.push(` ${genOBJ.name}`);
            // console.log(genresArr)
          }
        });
      });
      
      if (genresArr.length > 3) {
        genresArr = genresArr.slice(0, 2);
        genresArr.push(' Other...');
             
      } 
      if (genresArr.length === 0) {
        
        genresArr.push('No genres');
      }
      result.genre_ids = genresArr;
      return result;
      
    } ).map(result => onCard(result)).join('');
      // console.log('cart', cart)
    document.querySelector(`.gallery`).insertAdjacentHTML('beforeend', cart);
=======
>>>>>>> main
  }

  function cleanView() {

    document.querySelector(`.gallery`).innerHTML = ``; 
    
  };






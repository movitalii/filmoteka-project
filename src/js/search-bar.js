
import ApiService from './api-service';
import onCard from './card';
import renderFilmsMarkup from './templates/renderFilmsMarkup';

const GENRE_NAME = 'genre_card';

const searchFormRef = document.querySelector('#form-search');
const errorMessage = document.querySelector('.error-notification');
const input = document.querySelector(`.form-group__input`)

const apiService = new ApiService();

searchFormRef.addEventListener('submit', onFormSubmit) ;

console.log(searchFormRef);

function onFormSubmit(e) {
  e.preventDefault();
 
  apiService.query = e.currentTarget.elements.searchQuery.value;
  cleanView()
  
  console.log(e.currentTarget.value);
  
    apiService.fetchFundFilms();

    apiService.fetchFundFilms().then(data => {
      moves = data;    
   
    console.log('ok', data);
    onMovesCard(data);
   });
   input.value = '';
   
  }

  const genreName = localStorage.getItem(GENRE_NAME);
  // console.log('genre', genreName)
  genres = JSON.parse(genreName);  


  function onMovesCard(data) {
  
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
  }

  function cleanView() {

    document.querySelector(`.gallery`).innerHTML = ``;
  };

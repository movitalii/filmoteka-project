import ApiService from './api-service';
import onCard from './card';

const apiService = new ApiService();
const GENRE_NAME   = 'genre_card';

apiService.fetchGenres().then(data => {
  const genres = data.genres
  localStorage.setItem(GENRE_NAME, JSON.stringify(genres))
//  console.log('ok', data.genres);
});

apiService.fetchImage().then(data => {
  addArticleImage(data);
});
const genreName = localStorage.getItem(GENRE_NAME);
  // console.log('genre', genreName)
  const genres = JSON.parse(genreName);  

function addArticleImage(data) {
  
  console.log(data.results);
  const cart = data.results.map(result => {
    let genresArr = [];
    result.genre_ids.forEach(genreID => {
      // console.log(genreID)
      genres.forEach(genOBJ => {
        // console.log(genOBJ)
        if (genreID === genOBJ.id) {
          genresArr.push(`${genOBJ.name}`);
          // console.log(genresArr)
        }
      });
    });
    
    if (genresArr.length > 3) {
      genresArr = genresArr.slice(0, 2);
      genresArr.push(' other..');
           
    } 
    if (genresArr.length === 0) {
      
      genresArr.push('no genres');
    }
    result.genre_ids = genresArr;
    // console.log(result)
    console.log('odject', Object.values(result.genre_ids)) 
    
    
    return result;
  } ).map(result => onCard(result)).join('');
    console.log('cart', cart)
  document.querySelector(`.gallery`).insertAdjacentHTML('beforeend', cart);
}

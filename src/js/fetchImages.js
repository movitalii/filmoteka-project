import ApiService from './api-service';
import onCard from './card';
import { createPagination } from './pagination'; // добавил для пагинации
// Ed import//
import { saveInfo, getInfo, removeInfo } from './storage_api';
/////////////
const apiService = new ApiService();

const GENRE_NAME = 'genre_card';

let genres = [];
apiService.fetchGenres().then(data => {
  genres = data.genres;
  localStorage.setItem(GENRE_NAME, JSON.stringify(genres));
  apiService.fetchImage().then(data => {
    // console.log('YES', data.total_results);
    createPagination(data.total_results); // добавил для пагинации

    addArticleImage(data);
    saveInfo(data.page, data.results); // добавил сохранение в локалсторедж при обращении к АПИ////////
  });
  //  console.log('ok', data.genres);
});
localStorage.setItem(GENRE_NAME, JSON.stringify(genres));
const genreName = localStorage.getItem(GENRE_NAME);
// console.log('genre', genreName)
genres = JSON.parse(genreName);
console.log(genres);

export default function addArticleImage(data) {
  // console.log('image', data);
  const cart = data.results
    .map(result => {
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
      // console.log(result)
      // console.log('odject', Object.values(result.genre_ids))

      return result;
    })
    .map(result => onCard(result))
    .join('');
  // console.log('cart', cart)
  if (document.querySelector(`.gallery`)) {
    document.querySelector(`.gallery`).insertAdjacentHTML('beforeend', cart);
  }
}

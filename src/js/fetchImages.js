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
    addArticleImage(data);

    createPagination(data.total_results); // Пагинация
    // const totalNumberPages = data.total_results;
    // console.log('Я не должен быть здесь', totalNumberPages);

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
    .flatMap(result => {
      let genresArr = [];
      if (result.gender === 0 || result.gender === 1 || result.gender === 2) {
        result.genre_ids = [' Drama'];
        result.first_air_date = '2019-10-17';
        return result.genre_ids;
      }

      result.genre_ids.forEach(genreID => {
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
      if (result.gender) {
      }
      // console.log(result)
      // console.log('odject', Object.values(result.genre_ids))
      if (result.first_air_date === '') {
        result.first_air_date = `2021`;
      }
      if (result.backdrop_path == null) {
        result.backdrop_path = '/xHLwNxk7Kgpatru7advnbnBGtgf.jpg';
        return result.backdrop_path;
      }
      result.release_date === ''
        ? (result.release_date = `2015`)
        : result.release_date;

      // console.log(result.poster_path)

      return result;
    })
    .map(result => onCard(result))
    .join('');
  // console.log('cart', cart)
  if (document.querySelector(`.gallery`)) {
    document.querySelector(`.gallery`).insertAdjacentHTML('beforeend', cart);
  }
}

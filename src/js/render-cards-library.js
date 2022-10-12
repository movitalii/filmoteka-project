// по нажатию кнопки WATCHED в значение keyOfLocalStorage вносим ключ локал сторадж просмотренных и добавляем/убираем класс .is-active
// по нажатию кнопки QUEUE в значение keyOfLocalStorage вносим ключ локал сторадж очереди и добавляем/убираем класс .is-active
// по нажатию на карточку открываем модальное окно



import axios from "axios";
import ApiService from "./api-service";
import onCard from './card';
import { saveInfo, getInfo, removeInfo } from './storage_api';

const keyOfLocalStorage = 1;
const stringKey = keyOfLocalStorage.toString();
// вместо единицы должен приходить ключ из локального хранилища 


let arrayToRender = [];
arrayToRender = getInfo(stringKey);
// console.log(arrayToRender);


// --------
const apiService = new ApiService();
const GENRE_NAME   = 'genre_card';

apiService.fetchGenres().then(data => {
  const genres = data.genres
  localStorage.setItem(GENRE_NAME, JSON.stringify(genres))
//  console.log('ok', data.genres);
});

apiService.fetchImage().then(data => {
  saveInfo(data.page, data.results); // добавил сохранение в локалсторедж при обращении к АПИ////////
  addArticleImage(data);
});
const genreName = localStorage.getItem(GENRE_NAME);
  // console.log('genre', genreName)
  const genres = JSON.parse(genreName);  

function addArticleImage(data) {
  
  // console.log(data.results);
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
    // console.log(result)
    // console.log('odject', Object.values(result.genre_ids)) 
    
    
    return result;
  } ).map(result => onCard(result)).join('');
    // console.log('cart', cart)
  document.querySelector(`.library`).insertAdjacentHTML('beforeend', cart);
}

// по нажатию кнопки WATCHED в значение keyOfLocalStorage вносим ключ локал сторадж просмотренных и добавляем/убираем класс .is-active
// по нажатию кнопки QUEUE в значение keyOfLocalStorage вносим ключ локал сторадж очереди и добавляем/убираем класс .is-active
// по нажатию на карточку открываем модальное окно

import axios from 'axios';
import ApiService from './api-service';
import onCard from './card';
import { saveInfo, getInfo, removeInfo } from './storage_api';
const apiService = new ApiService();

const keyOfLocalStorage = 1;
const stringKey = keyOfLocalStorage.toString();
console.log(apiService);
// вместо единицы должен приходить ключ из локального хранилища

// console.log(arrayToRender);

let arrayToRender = [];
// функція викликається при кліку, звертається до локал стораж, забирає масив ID і по ньому рендерить в розмітку
function makeArrayToRender(arg) {
  arrayToRender = getInfo(arg);
  console.log(arrayToRender);
  const filmIdNumber = arrayToRender.map(film => film.id);
  console.log(filmIdNumber);
  filmIdNumber.forEach(el => getFilmById(el));
}

function getFilmById(filmId) {
  apiService.id = filmId;
  apiService.fetchAllFilms().then(data => onMovesCard(data));

}



// const filmDataObj = getFilmById(14410);
// console.log("filmDataObj",filmDataObj);
// const cartMarkup = onCard(filmDataObj).join('');
// console.log("MARKUP", cartMarkup);
// console.log('cart', cart)
// refs.libraryEl.insertAdjacentHTML('beforeend', cartMarkup);




// makeArrayToRender('queue');
// makeArrayToRender('watched');

// --------
<<<<<<< HEAD
const refs = {
  queueBtn: document.querySelector('#queue'),
  watchedBtn: document.querySelector('#watched'),
  libraryEl: document.querySelector('.library'),
};

console.log(refs.queueBtn);
console.log(refs.watchedBtn);
console.log(refs.libraryEl);

const onClickWatched = () => {
  refs.queueBtn.classList.remove('btn_is-active');
  refs.watchedBtn.classList.add('btn_is-active');
  makeArrayToRender('watched');
};

const onClickQueue = () => {
  refs.queueBtn.classList.add('btn_is-active');
  refs.watchedBtn.classList.remove('btn_is-active');
  makeArrayToRender('queue');
};

if (refs.queueBtn) {
  refs.queueBtn.addEventListener('click', onClickQueue);
  refs.watchedBtn.addEventListener('click', onClickWatched);
=======
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
  // document.querySelector(`.library`).insertAdjacentHTML('beforeend', cart);
>>>>>>> main
}

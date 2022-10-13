// по нажатию кнопки WATCHED в значение keyOfLocalStorage вносим ключ локал сторадж просмотренных и добавляем/убираем класс .is-active
// по нажатию кнопки QUEUE в значение keyOfLocalStorage вносим ключ локал сторадж очереди и добавляем/убираем класс .is-active
// по нажатию на карточку открываем модальное окно

import axios from 'axios';
import ApiService from './api-service';
import onCardLib from './card_library';
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
  addArticleImage(arrayToRender);
  
  // const filmIdArray = arrayToRender.map(film => film.id);
  // console.log(filmIdArray);
  // filmIdArray.forEach(el => getFilmById(el));
}
const GENRE_NAME = 'genre_card';
const genreName = localStorage.getItem(GENRE_NAME);
  // console.log('genre', genreName)
 const genres = JSON.parse(genreName);  
console.log(genres);

function addArticleImage(arrayToRender) {
  
  // console.log('image', data);
  const cart = arrayToRender.map(arrayToRender => {
    let genresArr = [];
    arrayToRender.genre_ids.forEach(genreID => {
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
    arrayToRender.genre_ids = genresArr;
    // console.log(result)
    // console.log('odject', Object.values(result.genre_ids)) 
    
    
    return arrayToRender;
  } ).map(arrayToRender => onCardLib(arrayToRender)).join('');
    // console.log('cart', cart)
  refs.libraryEl.insertAdjacentHTML('beforeend', cart);
}

function getFilmById(filmId) {
  apiService.id = filmId;
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
}


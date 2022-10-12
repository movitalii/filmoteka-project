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
  filmIdNumber.forEach(el => console.log(el));
}

// makeArrayToRender('queue');
// makeArrayToRender('watched');

// --------
const refs = {
  queueBtn: document.querySelector('#queue'),
  watchedBtn: document.querySelector('#watched'),
};

console.log(refs.queueBtn);
console.log(refs.watchedBtn);

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

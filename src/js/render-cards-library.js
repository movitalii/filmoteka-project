// по нажатию кнопки WATCHED в значение keyOfLocalStorage вносим ключ локал сторадж просмотренных и добавляем/убираем класс .is-active
// по нажатию кнопки QUEUE в значение keyOfLocalStorage вносим ключ локал сторадж очереди и добавляем/убираем класс .is-active
// по нажатию на карточку открываем модальное окно

import axios from 'axios';
import ApiService from './api-service';
import onCardLib from './card_library';
import { saveInfo, getInfo, removeInfo } from './storage_api';
import { fetchFromGallery } from './fetch-render_modal';
const apiService = new ApiService();
import { backdrop } from './renderModal';

//localStorageChecker

let arrayToRender = [];
// функція викликається при кліку, звертається до локал стораж, забирає масив і по ньому рендерить в розмітку
function makeArrayToRender(arg) {
  arrayToRender = getInfo(arg);
  console.log(arrayToRender);
  addArticleImage(arrayToRender);
}

function cleanView() {
  refs.libraryEl.innerHTML = ``;
}

function addArticleImage(arrayToRender) {
  const card = arrayToRender
    .map(arrayToRender => onCardLib(arrayToRender))
    .join('');

  refs.libraryEl.insertAdjacentHTML('beforeend', card);
}

const refs = {
  queueBtn: document.querySelector('#queue'),
  watchedBtn: document.querySelector('#watched'),
  libraryEl: document.querySelector('.library'),
  contentEl: document.querySelector('.content'),
};

// console.log(refs.queueBtn);
// console.log(refs.watchedBtn);

// console.log(refs.libraryEl);

const onClickWatched = () => {
  refs.queueBtn.classList.remove('btn_is-active');
  refs.watchedBtn.classList.add('btn_is-active');
  refs.contentEl.classList.add('no_display');
  cleanView();
  makeArrayToRender('watched');
};

const onClickQueue = () => {
  refs.queueBtn.classList.add('btn_is-active');
  refs.watchedBtn.classList.remove('btn_is-active');
  refs.contentEl.classList.add('no_display');
  cleanView();
  makeArrayToRender('queue');
  console.log(galContainer);
};

if (refs.queueBtn) {
  refs.queueBtn.addEventListener('click', onClickQueue);
  refs.watchedBtn.addEventListener('click', onClickWatched);
}

let queueData = [];
let watchedData = [];
queueData = getInfo('queue');
watchedData = getInfo('watched');
// console.log(queueData.length);
// console.log(watchedData.length);
// if (queueData.length < 1 || watchedData < 1) {return};

if (refs.queueBtn) {
  if (!queueData && !watchedData) {
    return;
  } else if (!watchedData) {
    return;
  } else if (watchedData.length > 0) {
    onClickWatched();
  } else if (queueData.length > 0) {
    onClickQueue();
  } else {
    return;
  }
}

// const galContainer = document.querySelector('.library-page');
// galContainer.addEventListener('click', showCard);
// // let watchedData = getInfo('watched');
// // console.log("LENGTH", localData.length);
// // if (watchedData && watchedData.length > 0 ) {onClickWatched()};
// function showCard(e) {
//   e.preventDefault();
//   backdrop.classList.remove('is-hidden');
//   console.log(e.target);
//   fetchFromGallery(
//     '/' +
//       e.target.src.substring(
//         e.target.src.lastIndexOf('/') + 1,
//         e.target.src.length
//       )
//   );
// }

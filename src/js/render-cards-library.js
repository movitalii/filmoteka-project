// по нажатию кнопки WATCHED в значение keyOfLocalStorage вносим ключ локал сторадж просмотренных и добавляем/убираем класс .is-active
// по нажатию кнопки QUEUE в значение keyOfLocalStorage вносим ключ локал сторадж очереди и добавляем/убираем класс .is-active
// по нажатию на карточку открываем модальное окно
import axios from 'axios';
import ApiService from './api-service';
import onCardLib from './card_library';
import { saveInfo, getInfo, removeInfo } from './storage_api';
import { fetchFromGallery } from './fetch-render_modal';
import { renderModal, backdrop } from './renderModal';
const apiService = new ApiService();

//localStorageChecker

let arrayToRender = [];
// функція викликається при кліку, звертається до локал стораж, забирає масив і по ньому рендерить в розмітку
function makeArrayToRender(arg) {
  arrayToRender = getInfo(arg);
  console.log(arrayToRender);
  addArticleImage(arrayToRender);
  saveInfo('page', arrayToRender);
  const cardGallery = document.querySelector('.library');
  cardGallery.addEventListener('click', clickHandler);
  function clickHandler(e) {
    e.preventDefault();

    if (e.target.nodeName === 'DIV') {
      return;
    }

    backdrop.classList.remove('is-hidden');
    fetchFromGallery(
      '/' +
        e.target.src.substring(
          e.target.src.lastIndexOf('/') + 1,
          e.target.src.length
        ),
      'page'
    );
  }
  console.log(cardGallery);
}

function cleanView() {
  refs.libraryEl.innerHTML = ``;
}

function addArticleImage(arrayToRender) {
  const card = arrayToRender
    .map(arrayToRender => onCardLib(arrayToRender))
    .join('');
  if (arrayToRender.length > 0) {
    refs.contentEl.classList.add('no_display');
  } else if (arrayToRender.length === 0) {
    refs.contentEl.classList.remove('no_display');
  }

  refs.libraryEl.insertAdjacentHTML('beforeend', card);
}

const refs = {
  queueBtn: document.querySelector('#queue-lib'),
  watchedBtn: document.querySelector('#watched-lib'),
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

// let watchedData = getInfo('watched');
// console.log("LENGTH", localData.length);
// if (watchedData && watchedData.length > 0 ) {onClickWatched()};

export { onClickQueue, onClickWatched };
